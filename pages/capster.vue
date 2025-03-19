<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center"
    style="background-image: url('https://source.unsplash.com/1600x900/?barbershop')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Our Capsters</h1>
        <p class="text-lg mt-2">Meet our professional barbers</p>
      </div>
    </div>
  </section>

  <section id="capster-content" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Meet Our Barbers</h2>

    <!-- Grid Capster -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      <div v-for="(capster, index) in capsters" :key="index"
        class="relative group overflow-hidden rounded-lg shadow-lg">
        <img :src="capster.image" :alt="capster.name"
          class="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 class="text-xl font-semibold">{{ capster.name }}</h3>
          <p class="text-sm">{{ capster.specialty }}</p>
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

const capsters = ref([
  { name: 'John Doe', specialty: 'Fade & Classic Cut', image: 'https://source.unsplash.com/400x600/?barber' },
  { name: 'Mike Smith', specialty: 'Beard Trim & Styling', image: 'https://source.unsplash.com/400x600/?barbershop' },
  { name: 'Emma Brown', specialty: 'Modern Haircuts', image: 'https://source.unsplash.com/400x600/?hairdresser' },
  { name: 'James Wilson', specialty: 'Scissor Cut & Styling', image: 'https://source.unsplash.com/400x600/?haircut' },
  { name: 'Sarah Johnson', specialty: 'Classic & Buzz Cut', image: 'https://source.unsplash.com/400x600/?hairstyle' },
  { name: 'Chris Evans', specialty: 'Beard Grooming', image: 'https://source.unsplash.com/400x600/?grooming' },
]);
</script>
