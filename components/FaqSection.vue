<template>
  <section id="faq" class="section-area relative">
    <div class="container">
      <div class="scroll-revealed text-center max-w-[550px] mx-auto mb-12">
        <h6 class="mb-2 block text-lg font-semibold">FAQ</h6>
        <h2 class="mb-6 custom-text-gold">Any Questions? Look Here</h2>
        <p>
          Here are some frequently asked questions about our barbershop. If you have other questions, feel free to
          contact us.
        </p>
      </div>

      <div class="grid gap-x-8 gap-y-12 grid-cols-1 lg:grid-cols-2 mx-8">
        <div v-for="(faq, index) in faqs" :key="index" class="scroll-revealed flex">
          <div
            class="mr-4 flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-xl bg-gold text-primary-color text-[28px] sm:mr-6 sm:h-[60px] sm:max-w-[60px] sm:text-[32px]">
            <i class="lni lni-question-circle"></i>
          </div>
          <div class="w-full">
            <h3
              class="mb-2 text-xl font-semibold text-body-light-12 dark:text-body-dark-12 sm:text-2xl lg:text-xl xl:text-2xl">
              {{ faq.question }}
            </h3>
            <p class="text-body-light-11 dark:text-body-dark-11">
              {{ faq.answer }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useCmsStore } from '@/stores/cms';

const cmsStore = useCmsStore();
const faqs = ref([]);

onMounted(async () => {
  await cmsStore.fetchCmsData('faq');
  faqs.value = cmsStore.faq.faqs;
});
</script>

<style></style>
