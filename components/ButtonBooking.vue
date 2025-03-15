<template>
  <div
    class="relative z-[11] md:absolute bottom-3 md:left-1/2 md:-translate-x-1/2 bg-black md:bg-opacity-75 shadow-lg rounded-xl p-3 w-full md:w-[500px] flex flex-col md:flex-row items-stretch md:items-end gap-3 ">
    <div class="flex-1">
      <p class="text-gray-500 text-sm mb-1">{{ cmsStore.hero?.booking.placeholder }}</p>
      <input type="datetime-local" v-model="selectedDateTime"
        class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
    </div>

    <button
      class="px-4 md:px-6 py-2.5 font-semibold rounded-lg text-primary-dark-1 bg-gold hover:brightness-110 transition duration-300">
      {{ cmsStore.hero?.booking.label }}
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCmsStore } from "@/stores/cms";

const cmsStore = useCmsStore();
const selectedDateTime = ref("");
</script>

<style></style>