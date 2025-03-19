<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center"
    style="background-image: url('https://source.unsplash.com/1600x900/?barber,haircut')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Our Services</h1>
        <p class="text-lg mt-2">Choose the best service for your style</p>
      </div>
    </div>
  </section>

  <section id="services" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">What We Offer</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      <div v-for="(service, index) in services" :key="index"
        class="border rounded-lg shadow-lg p-6 flex flex-col items-center">
        <img :src="service.icon" alt="Service Icon" class="w-16 h-16 mb-4">
        <h3 class="text-xl font-semibold">{{ service.name }}</h3>
        <p class="text-sm text-gray-600 mt-2">{{ service.description }}</p>
        <p class="mt-4 text-lg font-bold text-green-600">Rp {{ service.price }}</p>
        <a :href="service.bookLink"
          class="mt-4 text-center bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition">
          Book Now
        </a>
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

const services = ref([
  {
    name: 'Classic Haircut',
    description: 'A professional cut tailored to your style.',
    price: '50,000',
    icon: 'https://cdn-icons-png.flaticon.com/128/1157/1157075.png',
    bookLink: '#book'
  },
  {
    name: 'Beard Trim',
    description: 'Keep your beard looking sharp and clean.',
    price: '30,000',
    icon: 'https://cdn-icons-png.flaticon.com/128/1157/1157056.png',
    bookLink: '#book'
  },
  {
    name: 'Hair Wash',
    description: 'Relaxing hair wash with premium shampoo.',
    price: '20,000',
    icon: 'https://cdn-icons-png.flaticon.com/128/1157/1157070.png',
    bookLink: '#book'
  },
  {
    name: 'Hair Coloring',
    description: 'Personalized hair coloring for a fresh new look.',
    price: '100,000',
    icon: 'https://cdn-icons-png.flaticon.com/128/1157/1157055.png',
    bookLink: '#book'
  },
  {
    name: 'Facial Treatment',
    description: 'Deep cleansing facial for healthy skin.',
    price: '80,000',
    icon: 'https://cdn-icons-png.flaticon.com/128/1157/1157058.png',
    bookLink: '#book'
  },
  {
    name: 'Head Massage',
    description: 'Relax and rejuvenate with our special head massage.',
    price: '40,000',
    icon: 'https://cdn-icons-png.flaticon.com/128/1157/1157057.png',
    bookLink: '#book'
  }
]);
</script>
