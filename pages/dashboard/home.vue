<template>
	<div class="flex">
		<DashboardSidebar />
		<div class="flex-1">
			<DashboardHeader />
			<div class="p-4">
				<h1 class="text-2xl font-semibold mb-4">Dashboard Home</h1>

				<div class="mb-4">
					<div class="bg-white rounded-md shadow-md p-4 flex items-center w-72 ">
						<div>
							<h2 class="text-lg font-semibold mb-2">Jumlah Data Kemitraan</h2>
							<p class="text-3xl font-bold">{{ kemitraanCount }}</p>
						</div>
					</div>
				</div>

				<div class="bg-white rounded-md shadow-md p-4 w-full">
					<h2 class="text-lg font-semibold mb-2">Data Masuk 30 Hari Terakhir</h2>
					<div class="h-96 w-full">
						<canvas ref="chartCanvas" class="w-full"></canvas>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import Chart from 'chart.js/auto';

const router = useRouter();
const kemitraanData = ref([]);
const chartCanvas = ref(null);

onMounted(async () => {
	if (localStorage.getItem('accessGranted') !== 'true') {
		router.push('/login');
		return;
	}

	await fetchKemitraanData();
	createChart();
});

const fetchKemitraanData = async () => {
	try {
		const response = await $fetch('/api/kemitraan');
		kemitraanData.value = response;
	} catch (error) {
		console.error('Error fetching kemitraan data:', error);
	}
};

const kemitraanCount = computed(() => {
	return kemitraanData.value.length;
});

const dailyCounts = computed(() => {
	const counts = {};
	const today = new Date();

	for (let i = 29; i >= 0; i--) { // Ubah 6 menjadi 29
		const date = new Date(today);
		date.setDate(today.getDate() - i);
		const dateString = date.toISOString().split('T')[0];
		counts[dateString] = 0;
	}

	kemitraanData.value.forEach((item) => {
		const dateString = item.timestamp.split('T')[0];
		if (counts[dateString] !== undefined) {
			counts[dateString]++;
		}
	});

	return Object.values(counts);
});

const dailyLabels = computed(() => {
	const today = new Date();
	const labels = [];

	for (let i = 29; i >= 0; i--) { // Ubah 6 menjadi 29
		const date = new Date(today);
		date.setDate(today.getDate() - i);
		const dateString = date.toISOString().split('T')[0];
		labels.push(dateString);
	}

	return labels;
});

const createChart = () => {
	if (chartCanvas.value) {
		new Chart(chartCanvas.value.getContext('2d'), {
			type: 'line',
			data: {
				labels: dailyLabels.value,
				datasets: [{
					label: 'Data Masuk',
					data: dailyCounts.value,
					borderColor: 'rgb(75, 192, 192)',
					tension: 0.1,
				}],
			},
			options: {
				responsive: true, // Tambahkan responsive: true
				maintainAspectRatio: false, // Tambahkan maintainAspectRatio: false
				scales: {
					y: {
						beginAtZero: true,
					},
				},
			},
		});
	}
};
</script>