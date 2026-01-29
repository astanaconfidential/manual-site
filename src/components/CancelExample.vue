<template>
  <div class="cancel__reason" :id="id">

    <div class="cancel__title">{{ title }}</div>
    <div class="cancel__descr">{{ description }}</div>

    <Galleria
       :value="galleryImages"
  :numVisible="5"
  :showItemNavigators="true"
  :showThumbnails="true"
  :showThumbnailNavigators="false"
  :circular="true"
  containerStyle="max-width: 700px"
  :responsiveOptions="responsiveOptions"
    >
    <template #item="slotProps">
  <div class="gallery-wrapper">

    <video
      v-if="slotProps.item.isVideo"
  :src="slotProps.item.src"
  autoplay
  muted
  loop
  playsinline
  class="gallery-main video-player"
  controls
    />

    <img
      v-else
      :src="slotProps.item.src"
      class="gallery-main"
    />

    <div class="gallery-caption">
      {{ slotProps.item.caption }}
    </div>

  </div>
</template>



      <template #thumbnail="slotProps">
        
<video
    v-if="slotProps.item.isVideo"
    :src="slotProps.item.src"
    muted
    preload="metadata"
    class="gallery-thumb"
  />

  <img
    v-else
    :src="slotProps.item.src"
    class="gallery-thumb"
  />

      </template>
    </Galleria>

  </div>
</template>
<script setup>
import { computed } from 'vue'
import { onMounted } from 'vue'


onMounted(() => {
  document.querySelectorAll('.video-player').forEach(v => {
    v.playbackRate = 1.5
  })
})


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
  props.images.map(item => ({
    src: item.src,
    caption: item.caption,
    isVideo: item.src.endsWith('.mp4') || item.src.endsWith('.webm')
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
  max-height: 450px;
  object-fit: contain;
  border-radius: 10px;
}


.gallery-thumb {
  width: 70px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
}

.gallery-caption {
  margin-top: 8px;
  text-align: center;
  font-size: 14px;
  color: #555;
}

.video-player {
  pointer-events: none;
}

.gallery-wrapper:hover .video-player {
  pointer-events: auto;
}

</style>
