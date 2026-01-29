<template>
  <div class="cancel__reason" :id="id">

    <div class="cancel__title">{{ title }}</div>
    <div class="cancel__descr">{{ description }}</div>

    <Galleria
       :value="galleryImages"
  :numVisible="5"
  :showItemNavigators="true"
  :showThumbnails="true"
  :circular="true"
  containerStyle="max-width: 700px"
  :responsiveOptions="responsiveOptions"
    >
      <template #item="slotProps">
  <div class="gallery-wrapper">
    <img :src="slotProps.item.src" class="gallery-main" />
    <div class="gallery-caption">
      {{ slotProps.item.caption }}
    </div>
  </div>
</template>


      <template #thumbnail="slotProps">
        <img
          :src="slotProps.item.src"
          class="gallery-thumb"
        />
      </template>
    </Galleria>

  </div>
</template>
<script setup>
import { computed } from 'vue'

const props = defineProps({
  id: String,
  title: String,
  description: String,
  images: {
    type: Array,
    default: () => []
  }
})

const galleryImages = computed(() =>
  props.images.map(img => ({
    src: img.src,
    caption: img.caption
  }))
)


const responsiveOptions = [
  { breakpoint: '1024px', numVisible: 4 },
  { breakpoint: '768px', numVisible: 2 },
  { breakpoint: '560px', numVisible: 1 }
]
</script>


<style scoped>
.gallery-main {
  width: 100%;
  border-radius: 10px;
}

.gallery-thumb {
  width: 100%;
  border-radius: 6px;
}
</style>
