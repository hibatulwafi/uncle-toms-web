<script setup>
import { ref, onMounted } from 'vue';
import { useCmsStore } from '@/stores/cms';
const cmsStore = useCmsStore(); // Inisialisasi store

import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
// ... (formData, provinsiList, onMounted, submitForm tetap sama)



import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const mitraList = ref([
  { id: 1, nama: 'Mitra A', deskripsi: 'Deskripsi mitra A...', gambar: '/img/branches/branches.jpg' },
  { id: 2, nama: 'Mitra B', deskripsi: 'Deskripsi mitra B...', gambar: '/img/branches/branches.jpg' },
  { id: 3, nama: 'Mitra C', deskripsi: 'Deskripsi mitra C...', gambar: '/img/branches/branches.jpg' },
  { id: 3, nama: 'Mitra D', deskripsi: 'Deskripsi mitra D...', gambar: '/img/branches/branches.jpg' },
  { id: 3, nama: 'Mitra E', deskripsi: 'Deskripsi mitra E...', gambar: '/img/branches/branches.jpg' },
  { id: 3, nama: 'Mitra F', deskripsi: 'Deskripsi mitra F...', gambar: '/img/branches/branches.jpg' },
  { id: 3, nama: 'Mitra G', deskripsi: 'Deskripsi mitra G...', gambar: '/img/branches/branches.jpg' },
]);

const ulasanList = ref([
  { id: 1, nama: 'John Doe', ulasan: 'Ulasan John Doe...', jabatan: 'CEO' },
  { id: 2, nama: 'Jane Smith', ulasan: 'Ulasan Jane Smith...', jabatan: 'Manager' },
]);

const formData = ref({
  nama: '',
  hp: '',
  email: '',
  domisili: '',
  kota: '',
});

const provinsiList = ref([]);
const kotaList = ref([]);
const provinsiName = ref('');

onMounted(async () => {
  try {
    const response = await fetch('https://ibnux.github.io/data-indonesia/provinsi.json');
    provinsiList.value = await response.json();
  } catch (error) {
    console.error('Error fetching domisili:', error);
  }
});

const fetchKota = async (kodeProvinsi) => {
  try {
    const response = await fetch(
      `https://ibnux.github.io/data-indonesia/kabupaten/${kodeProvinsi}.json`
    );
    if (!response.ok) {
      throw new Error(
        `Gagal mengambil data kota: ${response.status} ${response.statusText}`
      );
    }
    kotaList.value = await response.json();
  } catch (error) {
    console.error('Error fetching kota:', error);
    kotaList.value = []; // Kosongkan daftar kota jika terjadi error
  }
};

const handleProvinsiChange = async () => {
  if (formData.value.domisili) {
    const selectedProvinsi = provinsiList.value.find(
      (p) => p.id === formData.value.domisili
    );
    if (selectedProvinsi) {
      provinsiName.value = selectedProvinsi.nama; // Simpan nama provinsi
      await fetchKota(selectedProvinsi.id);
    }
  } else {
    console.log('Provinsi tidak ditemukan');
  }
  formData.kota = '';
};

const submitForm = async () => {
  try {
    const timestamp = new Date().toISOString();
    const response = await cmsStore.saveKemitraan({
      ...formData.value,
      domisili: provinsiName.value,
      timestamp: timestamp,

    });
    if (response.success) {
      alert(response.message);
      formData.value = {
        nama: '',
        hp: '',
        email: '',
        domisili: '',
        kota: '',
      };
      kotaList.value = [];
    } else {
      alert(response.message);
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('Terjadi kesalahan saat mengirim formulir.');
  }
};
</script>

<template>
  <Navbar />

  <section class="relative h-[500px] bg-cover bg-center" style="background-image: url('/img/haircut.jpg')">
    <div class="absolute inset-0 bg-black opacity-50 "></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold mb-4 ">Become Our Premium Partner</h1>
        <p class="text-lg mb-8">Kami menawarkan peluang kemitraan eksklusif untuk mengembangkan bisnis Anda.</p>
        <a href="#video"
          class="bg-gold hover:brightness-110 text-primary-dark-1 font-bold py-3 px-6 rounded transition-transform duration-300 hover:scale-110 hover:text-primary-dark-2 inline-flex items-center whitespace-nowrap">
          Show More <i class="lni lni-chevron-down font-bold text-xl ml-2"></i>
        </a>
      </div>
    </div>
  </section>

  <div class="bg-gray-900 text-white">
    <section id="video" class="md:px-32 px-6 mx-auto py-12">

      <h6 class="mb-2 block md:text-lg font-semibold text-white text-center">
        Video Partnership
      </h6>
      <h2 class="mb-6 text-xl md:text-4xl text-center">
        Become Our Premium Partner
      </h2>

      <div class="flex flex-col md:flex-row justify-center gap-6">
        <div class="mb-4 md:mb-0 md:w-1/2">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Video Kemitraan"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        </div>
        <div class="md:w-1/2">
          <h3 class="text-xl font-semibold mb-6">Bergabunglah dengan Kemitraan Kami</h3>
          <p class="mb-6">
            Temukan peluang kemitraan yang menguntungkan dan kembangkan bisnis Anda bersama kami.
            Kami menawarkan dukungan penuh dan sumber daya untuk membantu Anda sukses.
          </p>
          <p class="mb-6">
            Kami percaya dalam membangun hubungan jangka panjang dengan mitra kami.
            Bergabunglah dengan jaringan mitra kami yang berkembang dan raih kesuksesan bersama.
          </p>

          <a href="#existing"
            class="bg-gold hover:brightness-110 text-primary-dark-1 font-bold py-3 px-6 rounded transition-transform duration-300 hover:scale-110 hover:text-primary-dark-2 inline-flex items-center whitespace-nowrap">
            Existing Partner
            <i class="lni lni-chevron-down font-bold text-xl ml-2"></i>
          </a>
        </div>
      </div>
    </section>

    <section id="existing" class="bg-gray-800 py-12 md:px-32 px-6 mx-auto">
      <div class="container mx-auto text-center">

        <h6 class="mb-2 block md:text-lg font-semibold text-white text-center">
          Existing Partner
        </h6>
        <h2 class="mb-6 text-xl md:text-4xl text-center">
          Testimony from our partners
        </h2>

        <swiper :modules="[SwiperAutoplay, SwiperPagination]" :slides-per-view="1" :space-between="20" :loop="true"
          :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{ clickable: true }" :breakpoints="{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 }
          }" class="pb-10">
          <swiper-slide v-for="mitra in mitraList" :key="mitra.id">
            <div class="p-6 bg-gray-700 rounded shadow h-full flex flex-col">
              <img :src="`${mitra.gambar}`" :alt="mitra.nama" class="w-full h-40 object-cover mb-4 rounded" />
              <div class="flex-grow">
                <h3 class="text-xl font-semibold mb-2 text-white">{{ mitra.nama }}</h3>
                <p class="text-gray-300">{{ mitra.deskripsi }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <section class="py-12 md:px-32 px-6 mx-auto">

      <h6 class="mb-2 block md:text-lg font-semibold text-white text-center">
        Partner Package </h6>
      <h2 class="mb-6 text-xl md:text-4xl text-center">
        Paket Kemitraan Eksklusif
      </h2>

      <div class="flex flex-col md:flex-row items-stretch">
        <div class="md:w-1/2 p-6">
          <div class="bg-gray-700 rounded shadow p-8">
            <div>
              <h2 class="text-2xl font-semibold mb-4 text-center">Hanya Dengan</h2>
              <p class="text-red-400 text-xl md:text-3xl line-through mb-2">Rp 60.000.000</p>
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl md:text-5xl font-bold text-white">Rp 30.000.000</h3>
                <span class="bg-green-600 text-white text-sm font-semibold py-1 px-3 rounded-full">Dics 50%</span>
              </div>
              <ul class="list-disc list-inside text-gray-300 mb-4">
                <li>Akses Eksklusif ke Jaringan Mitra Kami</li>
                <li>Dukungan Pemasaran dan Promosi</li>
                <li>Pelatihan dan Workshop Eksklusif</li>
                <li>Konsultasi Bisnis Strategis</li>
                <li>Branding dan Desain Eksklusif</li>
                <li>Dukungan Teknis Prioritas</li>
              </ul>
            </div>
            <a href="#form"
              class="bg-gold hover:brightness-110 text-primary-dark-1 font-bold py-3 px-6 rounded transition-transform duration-300 hover:scale-110 hover:text-primary-dark-2 inline-flex items-center whitespace-nowrap">
              Daftar Partnership
              <i class="lni lni-chevron-down font-bold text-xl ml-2"></i>
            </a>
          </div>
        </div>
        <div class="md:w-1/2 p-6">
          <img src="/img/about-image-1.png" alt="Ilustrasi Paket Kemitraan"
            class="w-full max-h-[432px] rounded shadow object-cover" />
        </div>
      </div>
    </section>

    <section id="form" class="container mx-auto py-12 bg-body-dark-1">

      <h6 class="mb-2 block md:text-lg font-semibold text-white text-center">
        Join Us!
      </h6>
      <h2 class="mb-6 text-xl md:text-4xl text-center">
        Formulir Pendaftaran Kemitraan
      </h2>

      <div class="max-w-2xl mx-auto bg-gray-700 p-8 rounded shadow">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="nama" class="block text-gray-300 text-sm font-bold mb-2">Nama</label>
            <input type="text" id="nama" v-model="formData.nama"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required />
          </div>
          <div class="mb-4">
            <label for="hp" class="block text-gray-300 text-sm font-bold mb-2">Nomor HP</label>
            <input type="tel" id="hp" v-model="formData.hp"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" v-model="formData.email"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required />
          </div>
          <div class="mb-4">
            <label for="domisili" class="block text-gray-300 text-sm font-bold mb-2">Domisili</label>
            <select id="domisili" v-model="formData.domisili" @change="handleProvinsiChange"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required>
              <option value="">Pilih Domisili</option>
              <option v-for="provinsi in provinsiList" :key="provinsi.id" :value="provinsi.id">
                {{ provinsi.nama }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label for="kota" class="block text-gray-300 text-sm font-bold mb-2">Kota</label>
            <select id="kota" v-model="formData.kota"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required>
              <option value="">Pilih Kota</option>
              <option v-for="kota in kotaList" :key="kota.id" :value="kota.nama">
                {{ kota.nama }}
              </option>
            </select>
          </div>
          <div class="text-center">
            <button type="submit"
              class="bg-gold hover:brightness-110 text-primary-dark-1 font-bold py-3 px-6 rounded transition-transform duration-300 hover:scale-110 hover:text-primary-dark-2 inline-flex items-center whitespace-nowrap">
              Daftar Sekarang
            </button>
          </div>
        </form>
      </div>
    </section>

    <section id="partnership" class="bg-primary-dark-1 text-primary-color py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-xl mx-auto text-center">
          <h2 class="text-3xl font-semibold mb-6">
            Tertarik dengan Kemitraan?
          </h2>
          <p class="text-lg mb-8">
            Kami siap membantu Anda memulai perjalanan kemitraan yang sukses. Hubungi kami sekarang untuk konsultasi
            gratis dan informasi lebih lanjut.
          </p>
          <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank"
            class="bg-gold hover:brightness-110 text-primary-dark-1 font-bold py-3 px-6 rounded-md transition-transform duration-300 hover:scale-110 hover:text-primary-dark-2 inline-flex items-center">
            <i class="lni lni-whatsapp text-2xl mr-2"></i> Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </section>

  </div>

  <Footer />
  <ScrollUp />
</template>

<style>
.swiper-pagination-bullet {
  background: #d4a373 !important;
}

.border-gold {
  border-color: #F59E0B;
}
</style>
