<template>
  <div class="flex">
    <DashboardSidebar />
    <div class="flex-1">
      <DashboardHeader />
      <div class="p-4">
        <DashboardBooking />
      </div>
    </div>
  </div>
</template>

<script setup>
import DashboardSidebar from '@/components/dashboard/DashboardSidebar.vue';
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue';
import DashboardBooking from '@/components/dashboard/DashboardBooking.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

onMounted(() => {
  if (localStorage.getItem('accessGranted') !== 'true') {
    router.push('/login');
  }
});
</script>