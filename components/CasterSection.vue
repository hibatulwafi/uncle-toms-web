<template>
  <section id="caster" class="section-area">
    <div class="container">
      <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
        <h6 class="mb-2 block text-lg font-semibold">Caster</h6>
        <h2 class="mb-6 custom-text-gold">Our Caster</h2>
        <p>
          Meet our talented barbers who are ready to give you the best haircut experience.
        </p>
      </div>

      <!-- Marquee Tanpa Jeda -->
      <div class="relative w-full overflow-hidden bg-black py-5">
        <div class="marquee-container">
          <div class="marquee-content" :style="{ transform: `translateX(${translateX}px)` }">
            <figure v-for="(caster, index) in duplicatedCasters" :key="index" class="h-[220px] w-[220px]">
              <img :src="caster.image" :alt="caster.name"
                class="h-full w-full object-cover grayscale hover:grayscale-0 transition duration-300" />
            </figure>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useCmsStore } from "@/stores/cms";

const cmsStore = useCmsStore();
const casters = ref([]);
const translateX = ref(0);
const speed = 1; // Kecepatan marquee
let interval;

onMounted(async () => {
  await cmsStore.fetchCmsData("caster");
  casters.value = cmsStore.caster.casters || [];

  startMarquee();
});

const duplicatedCasters = computed(() => [...casters.value, ...casters.value]); // Gandakan daftar gambar

const startMarquee = () => {
  const contentWidth = casters.value.length * 140; // Lebar total gambar (120px + 20px gap)
  translateX.value = 0; // Mulai dari awal

  interval = setInterval(() => {
    translateX.value -= speed;
    if (translateX.value <= -contentWidth) {
      translateX.value = 0; // Reset posisi tanpa jeda
    }
  }, 20); // Interval pergerakan marquee
};
</script>

<style scoped>
.marquee-container {
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
}

.marquee-content {
  display: flex;
  gap: 20px;
  transition: transform 0.02s linear;
  will-change: transform;
}

.marquee-content figure {
  margin: 0;
  padding: 0;
  flex-shrink: 0;
}
</style>
