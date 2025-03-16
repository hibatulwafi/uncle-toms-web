<template>
    <div class="p-4">
        <h2 class="text-2xl font-semibold mb-4">Data Booking</h2>
        <div class="flex justify-between items-center mb-4">
            <input type="text" v-model="searchQuery" placeholder="Cari..."
                class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
            <button @click="exportToCSV" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
                Ekspor ke CSV
            </button>
        </div>
        <div v-if="paginatedBookingData && paginatedBookingData.length > 0" class="overflow-x-auto">
            <table class="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="py-2 px-4 border-b text-left">Nama</th>
                        <th class="py-2 px-4 border-b text-left">Nomor HP</th>
                        <th class="py-2 px-4 border-b text-left">Cabang</th>
                        <th class="py-2 px-4 border-b text-left">Tanggal Booking</th>
                        <th class="py-2 px-4 border-b text-left">Tanggal Submit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in paginatedBookingData" :key="index" class="hover:bg-gray-50">
                        <td class="py-2 px-4 border-b">{{ item.nama }}</td>
                        <td class="py-2 px-4 border-b">{{ item.phone }}</td>
                        <td class="py-2 px-4 border-b">{{ item.cabang }}</td>
                        <td class="py-2 px-4 border-b">{{ formatDate(item.tanggal) }}</td>
                        <td class="py-2 px-4 border-b">{{ formatDateSubmit(item.timestamp) }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <p v-else class="text-gray-600">Tidak ada data booking.</p>
        <div class="flex justify-center mt-4">
            <button :disabled="currentPage === 1" @click="currentPage--"
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-l-md">
                Sebelumnya
            </button>
            <span class="py-2 px-4">{{ currentPage }} / {{ totalPages }}</span>
            <button :disabled="currentPage === totalPages" @click="currentPage++"
                class="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-r-md">
                Selanjutnya
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { exportToCsv } from '@/utils/csv';

const bookingData = ref(null);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 10;

const formatDate = (dateString) => {
    if (dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const monthNames = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember',
        ];
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${day} ${month} ${year}, jam ${hours}:${minutes}`;
    }
    return 'Tanggal tidak tersedia';
};

const formatDateSubmit = (timestamp) => {
    if (timestamp && typeof timestamp.seconds === 'number') {
        const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
        return date.toLocaleDateString('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        });
    }
    return 'Tanggal tidak tersedia';
};

const fetchBookingData = async () => {
    try {
        const response = await $fetch('/api/booking');
        bookingData.value = response;
    } catch (error) {
        console.error('Error fetching booking data:', error);
    }
};

onMounted(() => {
    fetchBookingData();
});

const filteredBookingData = computed(() => {
    if (!searchQuery.value) {
        return bookingData.value;
    }
    return bookingData.value.filter((item) => {
        return (
            item.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            item.phone.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });
});

const totalPages = computed(() => {
    if (!filteredBookingData.value) {
        return 1;
    }
    return Math.ceil(filteredBookingData.value.length / itemsPerPage);
});

const paginatedBookingData = computed(() => {
    if (!filteredBookingData.value) {
        return [];
    }
    const startIndex = (currentPage.value - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredBookingData.value.slice(startIndex, endIndex);
});

const exportToCSV = () => {
    if (bookingData.value) {
        exportToCsv(bookingData.value, 'data-booking.csv');
    }
};
</script>