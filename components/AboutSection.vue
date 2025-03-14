<template>
  <section id="about" class="section-area bg-body-light-12 dark:bg-body-dark-1">
    <div class="container">
      <div class="grid grid-cols-1 gap-14 lg:grid-cols-2">
        <div class="w-full">
          <figure class="scroll-revealed max-w-[400px] mx-auto">
            <img :src="about?.image" alt="About image" class="rounded-xl max-h-96 w-full min-h-80 object-cover" />
          </figure>
        </div>

        <div class="w-full">
          <div class="scroll-revealed">
            <h6 class="mb-2 block text-lg font-semibold">
              {{ about?.title }}
            </h6>
            <h2 class="mb-6 custom-text-gold">
              {{ about?.subtitle }}
            </h2>
          </div>

          <div class="tabs scroll-revealed">
            <nav class="tabs-nav flex flex-wrap gap-4 my-8" role="tablist" aria-label="About us tabs">
              <button @click="activeTab = 'profile'" :class="{ 'bg-gold text-primary-dark-1': activeTab === 'profile' }"
                class="tabs-link inline-block py-2 px-4 rounded-md bg-body-light-12/10 dark:bg-body-dark-12/10 font-medium hover:bg-gold hover:text-golden">
                Our Profile
              </button>
              <button @click="activeTab = 'vision'" :class="{ 'bg-gold text-primary-dark-1': activeTab === 'vision' }"
                class="tabs-link inline-block py-2 px-4 rounded-md bg-body-light-12/10 dark:bg-body-dark-12/10 font-medium hover:bg-gold hover:text-golden">
                Our Vision
              </button>
              <button @click="activeTab = 'history'" :class="{ 'bg-gold text-primary-dark-1': activeTab === 'history' }"
                class="tabs-link inline-block py-2 px-4 rounded-md bg-body-light-12/10 dark:bg-body-dark-12/10 font-medium hover:bg-gold hover:text-golden">
                Our History
              </button>
            </nav>

            <div v-if="activeTab === 'profile'" class="tabs-content mt-4">
              <p>{{ about?.profile }}</p>
            </div>

            <div v-if="activeTab === 'vision'" class="tabs-content mt-4">
              <p>{{ about?.vision.description }}</p>
              <ul class="list-disc ml-5 mt-2">
                <li v-for="goal in about?.vision.goals" :key="goal">{{ goal }}</li>
              </ul>
            </div>

            <div v-if="activeTab === 'history'" class="tabs-content mt-4">
              <p><strong>Founded in {{ about?.history.founded }}</strong></p>
              <p>{{ about?.history.description }}</p>
              <p>{{ about?.history.growth }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { useCmsStore } from '@/stores/cms'
import { onMounted, ref } from 'vue'

const cmsStore = useCmsStore()
const about = ref(null)
const activeTab = ref('profile')

onMounted(async () => {
  await cmsStore.fetchCmsData('about')
  about.value = cmsStore.about
})
</script>
