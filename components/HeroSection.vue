<template>
  <section id="home"
    class="relative overflow-hidden bg-primary-dark-1 text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px] md:px-8">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between lg:flex-row">

        <!-- Kolom Teks -->
        <div class="w-full px-5 lg:w-1/2">
          <div class="scroll-revealed mx-auto max-w-[780px] lg:text-left text-center">
            <h1
              class="mb-6 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight custom-text-gold">
              {{ cmsStore.hero?.title || 'Loading...' }}
            </h1>

            <p v-for="(desc, index) in cmsStore.hero?.description" :key="index"
              class="md:mb-6 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
              {{ desc }}
            </p>

            <ul class="md:mb-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-5">
              <!-- Tombol Download Play Store -->
              <li>
                <a :href="cmsStore.hero?.download_links.playstore" target="_blank">
                  <img src="/assets/img/download-playstore.svg" alt="Google Play"
                    class="h-24 md:h-36 w-36 mr-2 transition-opacity duration-300 hover:opacity-75 object-cover" />
                </a>
              </li>

              <!-- Tombol Download App Store -->
              <li>
                <a :href="cmsStore.hero?.download_links.appstore" target="_blank">
                  <img src="/assets/img/download-appstore.svg" alt="App Store"
                    class="h-24 md:h-36 w-36 mr-2 transition-opacity duration-300 hover:opacity-75 object-cover" />
                </a>
              </li>
            </ul>

          </div>
        </div>

        <!-- Kolom Gambar -->
        <div class="relative w-full md:px-5 lg:w-1/2">
          <div class="relative mx-auto max-w-[845px] h-[300px] md:h-[500px] z-0">
            <!-- Dots Background -->
            <div class="absolute left-[10%] bottom-[15%] z-[-1]">
              <img src="/assets/img/dots.svg" alt="" class="w-[120px]" />
            </div>
            <div class="absolute right-[10%] z-[-1]">
              <img src="/assets/img/dots.svg" alt="" class="w-[120px]" />
            </div>

            <!-- Hero Figure -->
            <figure class="absolute inset-0 w-full h-full flex justify-center items-center z-[10]">
              <transition name="slide" mode="out-in">
                <img :key="currentIndex" :src="cmsStore.hero?.images[currentIndex]"
                  class="absolute mx-auto max-w-full rounded-xl" alt="Hero Image" />
              </transition>
            </figure>
          </div>
        </div>
      </div>

      <!-- Booking Section -->
      <ButtonBooking />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCmsStore } from "@/stores/cms";
import ButtonBooking from '~/components/ButtonBooking.vue';

const cmsStore = useCmsStore();
const currentIndex = ref(0);

// Fetch data CMS (Hero)
onMounted(async () => {
  await cmsStore.fetchCmsData("hero");
  setInterval(nextImage, 5000);
});

const nextImage = () => {
  if (cmsStore.hero?.images) {
    currentIndex.value = (currentIndex.value + 1) % cmsStore.hero.images.length;
  }
};

</script>

<style scoped>
/* Perbaikan Transisi */
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.7s ease-in-out, transform 0.7s ease-in-out;
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
