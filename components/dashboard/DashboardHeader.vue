<template>
  <header class="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-4 flex justify-between items-center shadow-md">
    <div class="flex items-center">
      <img src="/img/ut-logo.png" alt="Logo" class="h-8 w-8 mr-2" />
      <h1 class="text-xl font-semibold">Uncle Tom's Dashboard</h1>
    </div>
    <div class="flex items-center">
      <button @click="logout"
        class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition duration-300">
        Logout
      </button>
    </div>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  localStorage.removeItem('accessGranted');
  router.push('/'); // Perbaikan: Arahkan ke /login, bukan /dashboard/login
};
</script>