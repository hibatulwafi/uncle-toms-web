<template>
  <div class="p-4">
    <h2 class="text-2xl font-semibold mb-4">Data Kemitraan</h2>
    <div class="flex justify-between items-center mb-4">
      <input type="text" v-model="searchQuery" placeholder="Cari..."
        class="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-blue-300" />
      <button @click="exportToCSV" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
        Ekspor ke CSV
      </button>
    </div>
    <div v-if="paginatedKemitraanData && paginatedKemitraanData.length > 0" class="overflow-x-auto">
      <table class="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead>
          <tr class="bg-gray-100">
            <th class="py-2 px-4 border-b text-left">Nama</th>
            <th class="py-2 px-4 border-b text-left">Nomor HP</th>
            <th class="py-2 px-4 border-b text-left">Email</th>
            <th class="py-2 px-4 border-b text-left">Domisili</th>
            <th class="py-2 px-4 border-b text-left">Kota</th>
            <th class="py-2 px-4 border-b text-left">Tanggal Submit</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedKemitraanData" :key="index" class="hover:bg-gray-50">
            <td class="py-2 px-4 border-b">{{ item.nama }}</td>
            <td class="py-2 px-4 border-b">{{ item.hp }}</td>
            <td class="py-2 px-4 border-b">{{ item.email }}</td>
            <td class="py-2 px-4 border-b">{{ item.domisili }}</td>
            <td class="py-2 px-4 border-b">{{ item.kota }}</td>
            <td class="py-2 px-4 border-b"> {{ formatDate(item.timestamp) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p v-else class="text-gray-600">Tidak ada data kemitraan.</p>
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

const kemitraanData = ref(null);
const searchQuery = ref('');
const currentPage = ref(1);
const itemsPerPage = 10;

const formatDate = (timestamp) => {
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

const fetchKemitraanData = async () => {
  try {
    const response = await $fetch('/api/kemitraan');
    kemitraanData.value = response;
  } catch (error) {
    console.error('Error fetching kemitraan data:', error);
  }
};

onMounted(() => {
  fetchKemitraanData();
});

const filteredKemitraanData = computed(() => {
  if (!searchQuery.value) {
    return kemitraanData.value;
  }
  return kemitraanData.value.filter((item) => {
    return (
      item.nama.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.email.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.hp.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.domisili.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.kota.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });
});

const totalPages = computed(() => {
  if (!filteredKemitraanData.value) {
    return 1;
  }
  return Math.ceil(filteredKemitraanData.value.length / itemsPerPage);
});

const paginatedKemitraanData = computed(() => {
  if (!filteredKemitraanData.value) {
    return [];
  }
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return filteredKemitraanData.value.slice(startIndex, endIndex);
});

const exportToCSV = () => {
  if (kemitraanData.value) {
    exportToCsv(kemitraanData.value, 'data-kemitraan.csv');
  }
};
</script>