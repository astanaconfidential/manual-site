<template>
  <div class="cancel__reason" :id="id">

    <div class="cancel__title">{{ title }}</div>
    <div class="cancel__descr">{{ description }}</div>

    <Carousel
      :value="images"
      :numVisible="1"
      :numScroll="1"
      circular
      showIndicators
      showNavigators
    >
      <template #item="slotProps">
        <img
          :src="slotProps.data"
          class="carousel-image"
        />
      </template>
    </Carousel>

  </div>
</template>

<script setup>
import Carousel from 'primevue/carousel'

defineProps({
  id: String,
  title: String,
  description: String,
  images: Array
})
</script>

<style scoped>
.carousel-image {
  width: 100%;
  border-radius: 8px;
}
</style>
