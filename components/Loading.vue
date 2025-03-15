<template>
  <div v-if="cmsStore.loading"
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
  </div>
  <div v-else>
  </div>
</template>

<script setup>
import { useCmsStore } from '@/stores/cms';
const cmsStore = useCmsStore();
</script>

<style scoped>
/* Tambahkan gaya grid-loader Anda di sini */
</style>