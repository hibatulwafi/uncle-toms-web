<script setup>
import { onMounted, ref } from 'vue';
import Loading from '~/components/Loading.vue';
import Navbar from '~/components/Navbar.vue';
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import PricingSection from '~/components/PricingSection.vue';
import LocationsSection from '~/components/LocationsSection.vue';
import CapsterSection from '~/components/CapsterSection.vue';
import FaqSection from '~/components/FaqSection.vue';
import CallActionSection from '~/components/CallActionSection.vue';
import PartnershipSection from '~/components/PartnershipSection.vue';
import Footer from '~/components/Footer.vue';
import ScrollUp from '~/components/ScrollUp.vue';

onMounted(() => {
  "use strict";

  //Web Theme
  const webTheme = document.querySelector("[data-web-trigger=web-theme]");
  const html = document.querySelector("html");

  let theme = localStorage.getItem("My_WebTheme") || "dark";

  if (webTheme) {
    webTheme.innerHTML = theme === "dark"
      ? '<i class="lni lni-moon-half-right-5"></i>'
      : '<i class="lni lni-sun-1"></i>';
  }

  if (html) {
    html.dataset.webTheme = theme;
  }

  localStorage.setItem("My_WebTheme", theme);

  // Web theme click event
  const webThemeButton = document.querySelector("[data-web-trigger=web-theme]");
  const htmlElement = document.querySelector("html");
  webThemeButton?.addEventListener("click", function () {
    let theme = localStorage.getItem("My_WebTheme") === "dark" ? "light" : "dark";
    if (webThemeButton) {
      webThemeButton.innerHTML = theme === "dark"
        ? '<i class="lni lni-moon-half-right-5"></i>'
        : '<i class="lni lni-sun-1"></i>';
    }

    if (htmlElement) {
      htmlElement.dataset.webTheme = theme;
    }
    localStorage.setItem("My_WebTheme", theme);
  });

});

</script>

<template>
  <Loading />
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
    <!-- Capster section -->
    <CapsterSection />
    <!-- FAQ section -->
    <FaqSection />
    <!-- Partnership section -->
    <PartnershipSection />
  </main>
  <!-- Footer -->
  <Footer />
  <ScrollUp />

</template>

<style scoped></style>