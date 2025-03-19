<script setup>
import { ref, onMounted } from 'vue';
import Navbar from '~/components/NavbarPartnership.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
</script>

<template>
  <Navbar />

  <section class="relative h-72 bg-cover bg-center" style="background-image: url('/img/legal.jpg')">
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="absolute inset-0 flex items-center justify-center text-center text-white">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold">Legal Notice</h1>
        <p class="text-lg mt-2">Understand the legal terms of using our services.</p>
      </div>
    </div>
  </section>

  <section id="legal-content" class="md:px-32 px-6 mx-auto py-12">
    <h2 class="text-lg md:text-4xl text-center font-semibold">Legal Terms & Conditions</h2>

    <div class="flex flex-col space-y-6 mt-6">
      <p class="text-base leading-relaxed">
        This Legal Notice governs the use of the website and services provided by Uncle Tom's Barbershop. By accessing
        our website, you agree to comply with these terms.
      </p>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Intellectual Property</h3>
        <p class="mt-2">
          All content on this website, including text, images, logos, and trademarks, is the property of Uncle Tom's
          Barbershop and protected by copyright laws. Unauthorized use of any content is strictly prohibited.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">User Responsibilities</h3>
        <ul class="list-disc list-inside space-y-2 mt-2">
          <li>Do not use our website for illegal activities.</li>
          <li>Do not copy, distribute, or modify any content without permission.</li>
          <li>Provide accurate information when using our services.</li>
          <li>Respect other users and avoid harmful behavior.</li>
        </ul>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Service Limitations</h3>
        <p class="mt-2">
          We reserve the right to modify, suspend, or discontinue any part of our services without prior notice. We are
          not liable for any disruptions or losses resulting from service interruptions.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Liability Disclaimer</h3>
        <p class="mt-2">
          While we strive to provide accurate information, we do not guarantee the completeness or reliability of any
          content on our website. Uncle Tom's Barbershop is not responsible for any damages arising from the use of our
          services.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Third-Party Links</h3>
        <p class="mt-2">
          Our website may contain links to third-party websites. We are not responsible for the content or policies of
          these external sites and encourage users to review their terms and privacy policies.
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Governing Law</h3>
        <p class="mt-2">
          These terms are governed by the laws of [Your Country/State]. Any disputes shall be resolved in the courts of
          [Your Legal Jurisdiction].
        </p>
      </div>

      <div class="text-base">
        <h3 class="font-semibold text-xl">Contact</h3>
        <p class="mt-2">
          If you have any questions about our legal terms, please contact us at [Your Email Address or Phone Number].
        </p>
      </div>
    </div>
  </section>

  <Footer />
  <ScrollUp />
</template>
