<template>
  <section id="caster" class="section-area">
    <div class="container">
      <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
        <h6 class="mb-2 block text-lg font-semibold text-primary">Caster</h6>
        <h2 class="mb-6">Our Caster</h2>
        <p>
          Meet our talented barbers who are ready to give you the best haircut experience.
        </p>
      </div>

      <div class="row">
        <div v-for="caster in casters" :key="caster.id" class="scroll-revealed col-12 sm:col-6 md:col-4 lg:col-3">
          <figure
            class="group rounded-xl bg-body-light-1 dark:bg-body-dark-12/10 px-5 pb-10 pt-12 shadow-card-2 hover:shadow-lg hover:-translate-y-1">
            <div class="relative z-10 mx-auto mb-5 h-[120px] w-[120px]">
              <img :src="caster.image" :alt="caster.name" class="h-full w-full rounded-full object-cover" />
            </div>
            <figcaption class="text-center block">
              <h4 class="mb-1 text-lg font-semibold text-body-light-12 dark:text-body-dark-12">
                {{ caster.name }}
              </h4>
              <p class="mb-5 text-sm text-body-light-11 dark:text-body-dark-11">
                {{ caster.role }}
              </p>
              <div class="flex items-center justify-center gap-5">
                <a v-for="social in caster.socials" :key="social.platform" :href="social.link" target="_blank"
                  class="text-body-light-10 dark:text-body-dark-10 hover:text-primary">
                  <i :class="social.icon"></i>
                </a>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCmsStore } from '@/stores/cms';

const cmsStore = useCmsStore();
const casters = ref([]);

onMounted(async () => {
  await cmsStore.fetchCmsData('caster');
  casters.value = cmsStore.caster.casters;
});
</script>

<style></style>
