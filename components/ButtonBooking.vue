<template>
  <div
    class="relative z-[11] md:absolute bottom-3 md:left-1/2 md:-translate-x-1/2 bg-black md:bg-opacity-75 shadow-lg rounded-xl p-3 w-full md:w-[500px] flex flex-col md:flex-row items-stretch md:items-end gap-3">
    <div class="flex-1">
      <p class="text-gray-500 text-sm mb-1">{{ cmsStore.hero?.booking.placeholder }}</p>
      <input type="datetime-local" v-model="selectedDateTime" :min="minDateTime"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
    </div>

    <button @click="handleBooking"
      class="px-4 md:px-6 py-2.5 font-semibold rounded-lg text-primary-dark-1 bg-gold hover:brightness-110 transition duration-300">
      {{ cmsStore.hero?.booking.label }}
    </button>
  </div>

  <div v-if="isPopupVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-body-dark-1 p-6 rounded-lg shadow-lg w-96 text-white">
      <h2 class="text-2xl font-semibold mb-6">Konfirmasi Booking</h2>

      <div class="mb-4">
        <label for="nama" class="block text-sm font-medium mb-1">Nama</label>
        <input id="nama" v-model="formData.nama"
          class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
      </div>

      <div class="mb-4">
        <label for="phone" class="block text-sm font-medium mb-1">Nomor Telepon</label>
        <input id="phone" v-model="formData.phone"
          class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
      </div>

      <div class="mb-4">
        <label for="cabang" class="block text-sm font-medium mb-1">Cabang</label>
        <select id="cabang" v-model="formData.cabang"
          class="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-yellow-500">
          <option value="" disabled>Pilih Cabang</option>
          <option v-for="location in locations" :key="location.id" :value="location.title">
            {{ location.title }}
          </option>
        </select>
      </div>

      <p class="mb-4"><strong>Tanggal:</strong> {{ formattedTanggal }}</p>

      <div class="mt-6 flex justify-end">
        <button @click="isPopupVisible = false"
          class="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md mr-2">
          Tutup
        </button>
        <button @click="confirmBooking" class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-md">
          Konfirmasi
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import { useCmsStore } from "@/stores/cms";

const cmsStore = useCmsStore();

const formData = reactive({
  nama: "",
  phone: "",
  tanggal: "",
});

const isPopupVisible = ref(false);
const selectedDateTime = ref("");
const minDateTime = ref('');
const locations = ref([]);

onMounted(async () => {
  await cmsStore.fetchCmsData("location");
  locations.value = cmsStore.location.locations;
  setMinDateTime();
});

// Method
const handleBooking = () => {
  formData.tanggal = selectedDateTime.value;
  isPopupVisible.value = true;
};

const confirmBooking = async () => {
  try {
    if (!formData.nama || !formData.phone || !formData.tanggal) {
      alert("Harap isi semua kolom.");
      return;
    }

    const response = await cmsStore.saveBooking(formData);

    if (response.success) {
      alert("Booking berhasil dikonfirmasi.");
      isPopupVisible.value = false;
      formData.nama = "";
      formData.phone = "";
      formData.tanggal = "";
    } else {
      alert("Gagal mengkonfirmasi booking: " + response.message);
    }
  } catch (error) {
    console.error("Error confirming booking:", error);
    alert("Terjadi kesalahan saat mengkonfirmasi booking.");
  }
};

const formattedTanggal = computed(() => {
  if (formData.tanggal) {
    const date = new Date(formData.tanggal);
    const day = date.getDate();
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "Mei", "Jun",
      "Jul", "Agu", "Sep", "Okt", "Nov", "Des"
    ];
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day} ${month} ${year}, ${hours}:${minutes}`;
  }
  return "";
});

const setMinDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');

  minDateTime.value = `${year}-${month}-${day}T${hours}:${minutes}`;
};
</script>