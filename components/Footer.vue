<template>
  <footer class="bg-primary-dark-2 text-white px-8">
    <div class="container py-8 lg:py-8">
      <div class="row">
        <!-- Logo dan Deskripsi -->
        <div class="col-12 order-first lg:col-4">
          <div class="w-full">
            <a href="/" class="inline-block mb-2">
              <img :src="footerData.logo" class="h-28" alt="Barbershop Logo" />
            </a>
            <p class="mb-4 text-body-dark-11">{{ footerData.description }}</p>
            <div class="-mx-3 flex items-center">
              <a v-for="social in footerData.socials" :key="social.platform" :href="social.link"
                class="px-3 text-body-dark-11 hover:text-black text-[22px]">
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Menu -->
        <div v-for="menu in footerData.menus" :key="menu.title" class="col-12 lg:col-2">
          <div class="w-full">
            <h4 class="mb-9 text-lg font-semibold custom-text-gold">{{ menu.title }}</h4>
            <ul>
              <li v-for="link in menu.links" :key="link.text">
                <a :href="link.url" class="mb-3 inline-block text-body-dark-11 hover:text-golden">
                  <i v-if="link.icon" :class="link.icon + ' mr-2'"></i> {{ link.text }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Garis Pemisah -->
    <div class="w-full border-t border-solid border-alpha-dark"></div>

    <!-- Copyright dan Legal -->
    <div class="container py-8">
      <div class="flex flex-wrap md:mx-8">
        <div class="w-full md:w-1/2">
          <div class="my-1 flex flex-wrap justify-center gap-x-3 md:justify-start">
            <a v-for="link in footerData.legal" :key="link.text" :href="link.url"
              class="text-body-dark-11 hover:text-body-dark-12">
              {{ link.text }}
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2">
          <div class="my-1 flex justify-center md:justify-end">
            <p class="text-body-dark-11">{{ footerData.copyright }}</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCmsStore } from '@/stores/cms';

const cmsStore = useCmsStore();
const footerData = ref({});

onMounted(async () => {
  await cmsStore.fetchCmsData('footer');
  footerData.value = cmsStore.footer;
});
</script>
