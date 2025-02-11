<template>
  <section id="home"
    class="relative overflow-hidden bg-primary-dark-1 text-primary-color pt-[120px] md:pt-[130px] lg:pt-[160px] md:px-8">
    <div class="container">
      <div class="flex flex-wrap items-center justify-between lg:flex-row">

        <!-- Kolom Teks -->
        <div class="w-full px-5 lg:w-1/2">
          <div class="scroll-revealed mx-auto max-w-[780px] lg:text-left text-center">
            <h1 class="mb-6 text-3xl font-bold leading-snug sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-tight 
         bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
              {{ cmsStore.hero?.title || 'Loading...' }}
            </h1>

            <p v-for="(desc, index) in cmsStore.hero?.description" :key="index"
              class="mb-6 max-w-[600px] text-base text-primary-color sm:text-lg sm:leading-normal">
              {{ desc }}
            </p>

            <ul class="mb-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-5">
              <!-- Tombol Download Play Store -->
              <li>
                <a :href="cmsStore.hero?.download_links.playstore" target="_blank">
                  <img src="/assets/img/download-playstore.svg" alt="Google Play"
                    class="h-36 mr-2 transition-opacity duration-300 hover:opacity-75">
                </a>
              </li>

              <!-- Tombol Download App Store -->
              <li>
                <a :href="cmsStore.hero?.download_links.appstore" target="_blank">
                  <img src="/assets/img/download-appstore.svg" alt="App Store"
                    class="h-36 mr-2 transition-opacity duration-300 hover:opacity-75">
                </a>
              </li>
            </ul>

          </div>
        </div>

        <!-- Kolom Gambar -->
        <div class="relative w-full px-5 lg:w-1/2">
          <div class="relative mx-auto max-w-[845px] h-[500px] z-0">
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

        <!-- Booking Section -->
        <div
          class="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black bg-opacity-75 shadow-lg rounded-xl p-3 md:w-[500px] w-2/4 flex items-end gap-3 z-10">
          <div class="flex-1">
            <p class="text-gray-500 text-sm mb-1">{{ cmsStore.hero?.booking.placeholder }}</p>
            <input type="datetime-local" v-model="selectedDateTime"
              class="w-full p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none" />
          </div>

          <button
            class="px-6 py-2.5 font-semibold rounded-lg text-primary-dark-1 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 transition duration-300"
            @click="bookNow">
            {{ cmsStore.hero?.booking.label }}
          </button>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCmsStore } from "@/stores/cms";

const cmsStore = useCmsStore();
const currentIndex = ref(0);
const selectedDateTime = ref("");

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

const bookNow = () => {
  if (!selectedDateTime.value) {
    alert("Please select a date and time first!");
  } else {
    alert(`Booking confirmed for: ${selectedDateTime.value}`);
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
