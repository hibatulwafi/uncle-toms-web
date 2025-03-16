<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-gray-800 p-8 rounded shadow-md w-96">
      <h2 class="text-2xl font-semibold text-white mb-6 text-center">Login Dashboard</h2>
      <div class="mb-4">
        <label for="accessCode" class="block text-gray-300 text-sm font-bold mb-2">Kode Akses</label>
        <input type="password" id="accessCode" v-model="accessCode"
          class="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-white" />
      </div>
      <button @click="login"
        class="w-full bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700">Login</button>
      <p v-if="loginError" class="text-red-500 mt-2 text-center">Kode akses salah.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const accessCode = ref('');
const loginError = ref(false);
const router = useRouter();

const login = () => {
  if (accessCode.value === 'UNCLETOMS9797') {
    localStorage.setItem('accessGranted', 'true');
    router.push('/dashboard');
  } else {
    loginError.value = true;
  }
};

onMounted(() => {
  if (localStorage.getItem('accessGranted') === 'true') {
    router.push('/dashboard');
  }
});
</script>