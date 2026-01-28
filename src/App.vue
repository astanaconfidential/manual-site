<template>
  <div class="app">

    <TabMenu
      :model="items"
      v-model:activeIndex="activeIndex"
      class="mb-4"
    />

    <Home v-if="activeIndex === 0" />
    <Examples v-if="activeIndex === 1" />
    <Guides v-if="activeIndex === 2" />

  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabMenu from 'primevue/tabmenu'

import Home from './pages/Home.vue'
import Examples from './pages/Examples.vue'
import Guides from './pages/Guides.vue'

const activeIndex = ref(0)

const items = [
  { label: 'Главная', icon: 'pi pi-home' },
  { label: 'Примеры отмен', icon: 'pi pi-images' },
   { label: 'Гайды', icon: 'pi pi-images' }
]
</script>
