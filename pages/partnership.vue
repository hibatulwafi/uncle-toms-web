<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '~/components/Navbar.vue';
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import PricingSection from '~/components/PricingSection.vue';
import LocationsSection from '~/components/LocationsSection.vue';
import CasterSection from '~/components/CapsterSection.vue';
import FaqSection from '~/components/FaqSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import CallActionSection from '~/components/CallActionSection.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
</script>

<template>
  <!-- <div
    class="hover:text-golden fixed top-0 bottom-0 left-0 right-0 z-[99999] flex items-center justify-center bg-primary-light-1 dark:bg-primary-dark-1 opacity-100 visible pointer-events-auto"
    role="status" aria-live="polite" aria-atomic="true" aria-label="Loading...">
    <div class="grid-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div> -->
  <Navbar />
  MITRA
  <main class="main relative">
    <!-- Hero section -->
    <HeroSection />
    <!-- About section -->
    <AboutSection />
    <!-- Pricing section -->
    <PricingSection />
    <!-- Branches section -->
    <LocationsSection />
    <!-- Call action section -->
    <CallActionSection />
    <!-- Capster section -->
    <CasterSection />
    <!-- FAQ section -->
    <FaqSection />
    <!-- Contact section -->
    <!-- <ContactSection /> -->
  </main>
  <!-- Footer -->
  <Footer />
  <ScrollUp />

</template>

<style scoped></style>