<template>
  <section id="branches" class="section-area">
    <div class="container">
      <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
        <h6 class="mb-2 block text-lg font-semibold text-primary">
          Branches
        </h6>
        <h2 class="mb-6">Our Barber Spots</h2>
        <p>
          There are many variations of passages of Lorem Ipsum available but
          the majority have suffered alteration in some form.
        </p>
      </div>

      <nav class="scroll-revealed portfolio-menu mb-[3.750rem] text-center" aria-label="Portfolio filter">
        <button v-for="category in categories" :key="category.value" type="button"
          class="font-semibold px-5 py-2 rounded-md text-body-light-11 dark:text-body-dark-11 hover:bg-primary hover:text-primary-color focus:bg-primary focus:text-primary-color"
          :class="{ 'active': activeCategory === category.value }" @click="filterItems(category.value)">
          {{ category.label }}
        </button>
      </nav>

      <div class="scroll-revealed portfolio-grid row">
        <div v-for="item in filteredLocations" :key="item.id" class="portfolio col-12 sm:col-6 lg:col-4">
          <article class="group flex flex-col lg:flex-row items-center gap-4" :data-filter="item.category">
            <div class="relative w-full lg:w-1/3 overflow-hidden rounded-xl">
              <img :src="item.image" :alt="item.title" class="w-full h-[100px] object-cover rounded-xl" />
              <div
                class="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-body-light-1/75 scale-[0.15] rounded-xl opacity-0 invisible group-hover:scale-95 group-hover:opacity-100 group-hover:visible">
                <div class="flex flex-wrap gap-2 p-4">
                  <div class="inline-block relative">
                    <a :href="item.image"
                      class="portfolio-box text-[1.75rem] text-primary-color bg-primary z-10 w-[60px] aspect-square rounded-lg text-center inline-flex items-center justify-center">
                      <i class="lni lni-map"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-2/3">
              <h4 class="mb-2">
                <a href="javascript:void(0)" class="text-[1.5rem] leading-tight text-inherit">{{ item.title }}</a>
              </h4>
              <p>{{ item.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCmsStore } from '@/stores/cms';

const cmsStore = useCmsStore();
const categories = ref([]);
const activeCategory = ref('all');
const locations = ref([]);

const filteredLocations = computed(() => {
  if (activeCategory.value === 'all') return locations.value;
  return locations.value.filter(item => item.category === activeCategory.value);
});

const filterItems = (category) => {
  activeCategory.value = category;
};

onMounted(async () => {
  await cmsStore.fetchCmsData('location');
  categories.value = cmsStore.location.categories;
  locations.value = cmsStore.location.locations;
});
</script>

<style>
.active {
  background-color: var(--color-primary);
  color: var(--color-primary-color);
}
</style>
