<script setup>
import { ref, onMounted } from 'vue';
import { useCmsStore } from '@/stores/cms';
const cmsStore = useCmsStore();

import Navbar from '~/components/NavbarPartnership.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
</script>

<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center" style="background-image: url('/img/haircut.jpg')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Privacy Policy</h1>
        <p class="text-lg mt-2">How Uncle Tom's handles your data.</p>
      </div>
    </div>
  </section>

  <section id="call-action" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Our Commitment to Your Privacy</h2>

    <div class="flex flex-col space-y-6 mt-6">
      <p class="text-base leading-relaxed">
        This Privacy Policy describes how Uncle Tom's collects, uses, and protects your personal information through our
        website.
      </p>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Information We Collect</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>Contact Information: Name, email address, phone number, and address.</li>
          <li>Demographic Information: Age, gender, and hairstyle preferences.</li>
          <li>Transaction Information: History of services used and payment details.</li>
          <li>Website Usage Information: IP address, browser type, pages visited, and visit time.</li>
        </ul>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Use of Information</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>Provide and improve our services.</li>
          <li>Manage bookings and payments.</li>
          <li>Send information about promotions and special offers.</li>
          <li>Analyze website usage to enhance user experience.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Information Protection</h3>
        <p class="mt-2">
          We take reasonable security measures to protect your personal information from unauthorized access, use, or
          disclosure.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Information Disclosure</h3>
        <p class="mt-2">
          We will not sell, rent, or exchange your personal information with third parties unless required by law.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Changes to Privacy Policy</h3>
        <p class="mt-2">
          We may update this Privacy Policy from time to time. Changes will be posted on this page.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Contact</h3>
        <p class="mt-2">
          If you have any questions about this Privacy Policy, please contact us at [Your Email Address or Phone
          Number].
        </p>
      </div>
    </div>
  </section>

  <Footer />
  <ScrollUp />
</template>
