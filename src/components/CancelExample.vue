<template>

<div class="main-title">
<h1>Примеры отмен</h1>
</div>


  <div class="cancel__reason" :id="id">

    <div class="cancel__title">{{ title }}</div>
    <div class="cancel__descr">{{ description }}</div>

    <Galleria
      :value="galleryImages"
      class="gallery-wrapper"
      :numVisible="5"
      :showItemNavigators="true"
      :showThumbnails="true"
      :showThumbnailNavigators="false"
      :circular="true"
      :responsiveOptions="responsiveOptions"
    >
      <!-- MAIN ITEM -->
      <template #item="{ item }">
        <div class="gallery-item">

          <video
            v-if="item.isVideo"
            :src="item.src"
            autoplay
            muted
            loop
            playsinline
            class="gallery-main video-player"
            controls
          />

          <img
            v-else
            :src="item.src"
            class="gallery-main"
          />

          <div class="gallery-caption">
            {{ item.caption }}
          </div>

        </div>
      </template>

      <!-- THUMB -->
      <template #thumbnail="{ item }">
        <video
          v-if="item.isVideo"
          :src="item.src"
          muted
          preload="metadata"
          class="gallery-thumb"
        />

        <img
          v-else
          :src="item.src"
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
  props.images.map(item => ({
    src: item.src,
    caption: item.caption,
    isVideo: /\.(mp4|webm)$/i.test(item.src)
  }))
)

const responsiveOptions = [
  { breakpoint: '1024px', numVisible: 4 },
  { breakpoint: '768px', numVisible: 2 },
  { breakpoint: '560px', numVisible: 1 }
]
</script>

<style scoped>
/* ===== MAIN ===== */

.main-title {
  text-align: center;
  background-color: #1f2933;
  padding: 2px 0;
  margin-bottom: 100px;
  
}

.gallery-wrapper {
  max-width: 1000px;
  margin: 40px auto;
}

.gallery-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery-main {
  width: 100%;
  max-height: 450px;
  object-fit: contain;
  border-radius: 12px;
}

.gallery-caption {
  margin-top: 10px;
  text-align: center;
  font-size: 17px;
  color: #878f9b;
  background: rgba(0,0,0,0.04);
  padding: 6px 12px;
  border-radius: 8px;
  max-width: 90%;
}


.cancel__title {
  text-align: center;
  font-size: 29px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #f1f3f6; 
  letter-spacing: 0.3px;
}

.cancel__descr {
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  max-width: 700px;
  margin: 0 auto 20px;
  color: #f1f3f6;
  line-height: 1.5;
}



/* ===== VIDEO UX ===== */

.video-player {
  pointer-events: none;
}

.gallery-wrapper:hover .video-player {
  pointer-events: auto;
}

/* ===== THUMBNAILS ===== */

.gallery-thumb {
  height: 70px;
  width: auto;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;
}

/* ===== PRIMEVUE OVERRIDES ===== */

:deep(.p-galleria-item-container) {
  display: flex !important;
  flex-direction: column !important;
  align-items: center;
}

/* высота блока миниатюр */
:deep(.p-galleria-thumbnail-wrapper) {
  height: 90px !important;
}

:deep(.p-galleria-thumbnails) {
  padding: 6px 0 4px;
}

/* горизонтальный скролл */
:deep(.p-galleria-thumbnail-container) {
  overflow-x: auto;
}

:deep(.p-galleria-thumbnail-container::-webkit-scrollbar) {
  height: 6px;
}

:deep(.p-galleria-thumbnail-container::-webkit-scrollbar-thumb) {
  background: rgba(0,0,0,.3);
  border-radius: 6px;
}

/* расстояние между миниатюрами */
:deep(.p-galleria-thumbnail-items) {
  gap: 6px;
}

/* ===== MOBILE ===== */

@media (max-width: 768px) {
  .gallery-wrapper {
    padding: 0 12px;
  }
}
</style>
