<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '~/components/Navbar.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
// ... (formData, provinsiList, onMounted, submitForm tetap sama)

const mitraList = ref([
  { id: 1, nama: 'Mitra A', deskripsi: 'Deskripsi mitra A...', gambar: '/img/branches/branches.jpg' },
  { id: 2, nama: 'Mitra B', deskripsi: 'Deskripsi mitra B...', gambar: '/img/branches/branches.jpg' },
  { id: 3, nama: 'Mitra C', deskripsi: 'Deskripsi mitra C...', gambar: '/img/branches/branches.jpg' },
]);

const ulasanList = ref([
  { id: 1, nama: 'John Doe', ulasan: 'Ulasan John Doe...', jabatan: 'CEO' },
  { id: 2, nama: 'Jane Smith', ulasan: 'Ulasan Jane Smith...', jabatan: 'Manager' },
]);

const paketList = ref([
  { id: 1, nama: 'Paket Dasar', harga: '$99', fitur: ['Fitur 1', 'Fitur 2'] },
  { id: 2, nama: 'Paket Menengah', harga: '$199', fitur: ['Fitur 1', 'Fitur 2', 'Fitur 3'] },
  { id: 3, nama: 'Paket Premium', harga: '$299', fitur: ['Fitur 1', 'Fitur 2', 'Fitur 3', 'Fitur 4'] },
]);

const formData = ref({
  nama: '',
  hp: '',
  email: '',
  domisili: '',
});

const provinsiList = ref([]);

onMounted(async () => {
  try {
    const response = await fetch('https://ibnux.github.io/data-indonesia/provinsi.json');
    provinsiList.value = await response.json();
  } catch (error) {
    console.error('Error fetching domisili:', error);
  }
});

const submitForm = () => {
  console.log('Form Data:', formData.value);
  alert('Pendaftaran berhasil!');
  formData.value = {
    nama: '',
    hp: '',
    email: '',
    domisili: '',
  };
}

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
    <section id="video" class="container mx-auto py-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">Video Kemitraan</h2>
      <div class="flex justify-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" title="Video Kemitraan"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
    </section>

    <section class="bg-gray-800 py-12">
      <div class="container mx-auto text-center">
        <h2 class="text-2xl font-semibold mb-6">Riwayat Kemitraan</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="mitra in mitraList" :key="mitra.id" class="p-6 bg-gray-700 rounded shadow">
            <img :src="`${mitra.gambar}`" :alt="mitra.nama" class="w-full h-40 object-cover mb-4 rounded">
            <h3 class="text-xl font-semibold mb-2">{{ mitra.nama }}</h3>
            <p>{{ mitra.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container mx-auto py-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">Ulasan Mitra</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div v-for="ulasan in ulasanList" :key="ulasan.id" class="p-6 bg-gray-700 rounded shadow">
          <h3 class="text-xl font-semibold mb-2">{{ ulasan.nama }}</h3>
          <p class="mb-4">{{ ulasan.ulasan }}</p>
          <p class="text-sm text-gray-400">{{ ulasan.jabatan }}</p>
        </div>
      </div>
    </section>

    <section class="bg-gray-800 py-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">Paket Kemitraan Eksklusif</h2>
      <div class="flex flex-col md:flex-row items-center">
        <div class="md:w-1/2 p-6">
          <div class="bg-gray-700 rounded shadow p-8">
            <h3 class="text-3xl font-bold mb-4">Rp 30.000.000</h3>
            <ul class="list-disc list-inside mb-4">
              <li>Akses Eksklusif ke Jaringan Mitra Kami</li>
              <li>Dukungan Pemasaran dan Promosi</li>
              <li>Pelatihan dan Workshop Eksklusif</li>
              <li>Konsultasi Bisnis Strategis</li>
              <li>Branding dan Desain Eksklusif</li>
              <li>Dukungan Teknis Prioritas</li>
            </ul>
            <button class="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Mulai Kemitraan</button>
          </div>
        </div>
        <div class="md:w-1/2 p-6">
          <img src="" alt="Ilustrasi Paket Kemitraan" class="w-full rounded shadow">
        </div>
      </div>
    </section>

    <section class="container mx-auto py-12">
      <h2 class="text-2xl font-semibold mb-6 text-center">Formulir Pendaftaran Kemitraan</h2>
      <div class="max-w-2xl mx-auto bg-gray-700 p-8 rounded shadow">
        <form @submit.prevent="submitForm">
          <div class="mb-4">
            <label for="nama" class="block text-gray-300 text-sm font-bold mb-2">Nama</label>
            <input type="text" id="nama" v-model="formData.nama"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required>
          </div>
          <div class="mb-4">
            <label for="hp" class="block text-gray-300 text-sm font-bold mb-2">Nomor HP</label>
            <input type="tel" id="hp" v-model="formData.hp"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required>
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-300 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" v-model="formData.email"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required>
          </div>
          <div class="mb-4">
            <label for="domisili" class="block text-gray-300 text-sm font-bold mb-2">Domisili</label>
            <select id="domisili" v-model="formData.domisili"
              class="w-full bg-gray-800 border border-gray-600 rounded py-2 px-3 text-white" required>
              <option value="">Pilih Domisili</option>
              <option v-for="provinsi in provinsiList" :key="provinsi.kode" :value="provinsi.nama">
                {{ provinsi.nama }}
              </option>
            </select>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Daftar
              Sekarang</button>
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