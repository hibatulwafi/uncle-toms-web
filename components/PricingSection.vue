<template>
  <section id="price" class="py-16 bg-body-dark-2">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <h6 class="text-lg font-semibold text-primary">Daftar Layanan</h6>
        <h2 class="text-3xl font-bold">Layanan & Harga</h2>
        <p class="text-gray-600 mt-2">
          Pilih layanan terbaik untuk perawatan rambut dan wajah Anda.
        </p>
      </div>

      <swiper :modules="[SwiperAutoplay, SwiperPagination]" :slides-per-view="1" :space-between="20" :loop="true"
        :autoplay="{ delay: 3000, disableOnInteraction: false }" :pagination="{ clickable: true }" :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }" class="pb-10">
        <swiper-slide v-for="(service, index) in pricing" :key="index">
          <div
            class="rounded-lg border-2 border-dashed border-gold p-4 text-center transition hover:shadow-lg h-full flex flex-col">
            <img :src="service.image" :alt="service.name" class="w-full h-52 object-cover rounded-t-lg" />
            <div class="p-4 flex-grow flex flex-col justify-between">
              <div>
                <h3 class="text-xl font-semibold text-gold">{{ service.name }}</h3>
                <p class="text-gray-400 text-sm mt-2">{{ service.description }}</p>
              </div>
              <p class="text-gold text-lg font-bold mt-4">Rp {{ formatPrice(service.price) }}</p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCmsStore } from "@/stores/cms";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay as SwiperAutoplay, Pagination as SwiperPagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cmsStore = useCmsStore();
const pricing = ref(null);

const formatPrice = (value) => {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value).replace(",00", "");
};

onMounted(async () => {
  await cmsStore.fetchCmsData("pricing");
  pricing.value = cmsStore.pricing;
});
</script>

<style>
/* Warna Swiper Pagination */
.swiper-pagination-bullet {
  background: #d4a373 !important;
}

/* Custom Gold Theme */
.text-gold {
  color: #d4a373;
}

.border-gold {
  border-color: #d4a373;
}
</style>
