<script setup>
import { ref, onMounted } from 'vue'
import Navbar from '~/components/Navbar.vue';
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import PricingSection from '~/components/PricingSection.vue';
import LocationsSection from '~/components/LocationsSection.vue';
import CasterSection from '~/components/CasterSection.vue';
import FaqSection from '~/components/FaqSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import CallActionSection from '~/components/CallActionSection.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';
</script>

<template>
  <Navbar />
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
    <!-- Caster section -->
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