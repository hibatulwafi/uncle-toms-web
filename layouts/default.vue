<script setup>
useHead({
  title: "Uncle tom's",
  meta: [
    { charset: "UTF-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1.0" },
    { name: "author", content: "tom" },
    { name: "description", content: "Uncle tom's - Where Every Style Matters" },
    { property: "og:title", content: "Uncle tom's" },
    { property: "og:description", content: "Uncle tom's - Where Every Style Matters" },
    { property: "og:image", content: "/assets/img/ut-logo.png." },
  ],
  link: [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" },
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css" },
    { rel: "stylesheet", href: "https://cdn.lineicons.com/4.0/lineicons.css" },

    // Favicon menggunakan ut-logo.png
    { rel: "icon", type: "image/png", href: "./assets/img/ut-logo.png" },
    { rel: "apple-touch-icon", href: "./assets/img/ut-logo.png" }
  ]
});
</script>

<template>
  <NuxtPage />
</template>
