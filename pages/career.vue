<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center"
    style="background-image: url('https://source.unsplash.com/1600x900/?barbershop,work')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Join Our Team</h1>
        <p class="text-lg mt-2">Be part of the best barbershop in town!</p>
      </div>
    </div>
  </section>

  <section id="career-content" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Current Job Openings</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      <div v-for="(job, index) in jobs" :key="index" class="border rounded-lg shadow-lg overflow-hidden">
        <img :src="job.image" :alt="job.title" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-semibold">{{ job.title }}</h3>
          <p class="text-sm text-gray-600">{{ job.location }}</p>
          <p class="mt-2 text-sm">{{ job.description }}</p>
          <a :href="job.link"
            class="block mt-4 text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            Apply Now
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

const jobs = ref([
  {
    title: 'Senior Barber',
    location: 'Jakarta, Indonesia',
    description: 'Looking for experienced barbers with excellent skills in cutting, styling, and beard grooming.',
    image: 'https://source.unsplash.com/400x300/?barber,haircut',
    link: '#apply'
  },
  {
    title: 'Junior Barber',
    location: 'Bandung, Indonesia',
    description: 'Entry-level position for those passionate about hairstyling and learning from professionals.',
    image: 'https://source.unsplash.com/400x300/?barbershop,work',
    link: '#apply'
  },
  {
    title: 'Front Desk Receptionist',
    location: 'Surabaya, Indonesia',
    description: 'We need a friendly and organized receptionist to handle appointments and customer inquiries.',
    image: 'https://source.unsplash.com/400x300/?receptionist,work',
    link: '#apply'
  }
]);
</script>
