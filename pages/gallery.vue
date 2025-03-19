<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center"
    style="background-image: url('https://source.unsplash.com/1600x900/?barbershop')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Gallery</h1>
        <p class="text-lg mt-2">Discover our best cuts & styles.</p>
      </div>
    </div>
  </section>

  <section id="gallery-content" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Our Work</h2>

    <!-- Masonry Grid -->
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-8">
      <div v-for="(image, index) in images" :key="index" class="mb-4 overflow-hidden rounded-lg shadow-lg">
        <img :src="image.src" :alt="image.alt"
          class="w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105" loading="lazy" />
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

const images = ref([
  { src: 'https://source.unsplash.com/random/400x600/?haircut', alt: 'Haircut Style 1' },
  { src: 'https://source.unsplash.com/random/400x500/?barber', alt: 'Haircut Style 2' },
  { src: 'https://source.unsplash.com/random/400x700/?hairstyle', alt: 'Haircut Style 3' },
  { src: 'https://source.unsplash.com/random/400x550/?grooming', alt: 'Haircut Style 4' },
  { src: 'https://source.unsplash.com/random/400x650/?fadecut', alt: 'Haircut Style 5' },
  { src: 'https://source.unsplash.com/random/400x750/?beard', alt: 'Haircut Style 6' },
  { src: 'https://source.unsplash.com/random/400x580/?scissors', alt: 'Haircut Style 7' },
  { src: 'https://source.unsplash.com/random/400x720/?styling', alt: 'Haircut Style 8' },
]);
</script>
