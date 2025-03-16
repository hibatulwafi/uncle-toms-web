<template>
  <aside :class="{
    'w-64': isExpanded,
    'w-20': !isExpanded,
    'transition-all duration-300': true,
    'bg-gray-800 text-white min-h-screen': true,
  }">
    <div class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h2 :class="{ 'text-xl font-semibold text-white': true, 'text-xs': !isExpanded }">
          Tom's Admin
        </h2>
        <button @click="toggleSidebar" class="focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              :d="isExpanded ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'" />
          </svg>
        </button>
      </div>

      <div class="flex justify-center mb-4" v-if="isExpanded">
        <div class="w-16 h-16 rounded-full bg-gray-600 flex items-center justify-center">
          <span class="text-2xl text-white">TA</span>
        </div>
      </div>

      <hr class="border-gray-700 my-4" v-if="isExpanded" />

      <ul>
        <li class="mb-2">
          <NuxtLink to="/dashboard/home" class="flex items-center p-2 hover:bg-gray-700 text-white">
            <span class="mr-2">
              <i class="lni lni-home-2 text-white"></i>
            </span>
            <span v-if="isExpanded"> Home </span>
          </NuxtLink>
        </li>

        <li class="mb-2">
          <NuxtLink to="/dashboard/booking" class="flex items-center p-2 hover:bg-gray-700 text-white">
            <span class="mr-2">
              <i class="lni lni-wallet-1 text-white"></i>
            </span>
            <span v-if="isExpanded">Booking</span>
          </NuxtLink>
        </li>
        <li class="mb-2">
          <NuxtLink to="/dashboard/partnership" class="flex items-center p-2 hover:bg-gray-700 text-white">
            <span class="mr-2">
              <i class="lni lni-hand-shake text-white"></i>
            </span>
            <span v-if="isExpanded">Partnership</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup>
import { ref } from 'vue';

const isExpanded = ref(true);

const toggleSidebar = () => {
  isExpanded.value = !isExpanded.value;
};
</script>