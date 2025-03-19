<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center"
    style="background-image: url('https://source.unsplash.com/1600x900/?barbershop,city')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Find Our Branches</h1>
        <p class="text-lg mt-2">Visit our nearest barbershop locations</p>
      </div>
    </div>
  </section>

  <section id="branches" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Our Locations</h2>

    <!-- Google Maps Embed -->
    <div class="mt-8 flex justify-center">
      <iframe class="w-full md:w-3/4 h-80 rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=Jakarta,Indonesia"
        allowfullscreen>
      </iframe>
    </div>

    <!-- Grid Cabang -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      <div v-for="(branch, index) in branches" :key="index" class="border rounded-lg shadow-lg overflow-hidden">
        <img :src="branch.image" :alt="branch.name" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold">{{ branch.name }}</h3>
          <p class="text-sm text-gray-600">{{ branch.address }}</p>
          <a :href="branch.mapLink" target="_blank"
            class="block mt-4 text-center bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            Get Directions
          </a>
        </div>
      </div>
    </div>
  </section>

  <Footer />
  <ScrollUp />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Navbar from '~/components/NavbarPartnership.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';

const branches = ref([
  {
    name: 'Uncle Tom’s Barbershop - Jakarta',
    address: 'Jl. Sudirman No. 10, Jakarta',
    image: 'https://source.unsplash.com/400x300/?barbershop,indonesia',
    mapLink: 'https://goo.gl/maps/XvF5MNPc6pD2'
  },
  {
    name: 'Uncle Tom’s Barbershop - Bandung',
    address: 'Jl. Asia Afrika No. 15, Bandung',
    image: 'https://source.unsplash.com/400x300/?barber,bandung',
    mapLink: 'https://goo.gl/maps/XvF5MNPc6pD2'
  },
  {
    name: 'Uncle Tom’s Barbershop - Surabaya',
    address: 'Jl. Tunjungan No. 22, Surabaya',
    image: 'https://source.unsplash.com/400x300/?barbershop,surabaya',
    mapLink: 'https://goo.gl/maps/XvF5MNPc6pD2'
  }
]);
</script>
