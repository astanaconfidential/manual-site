<template>
  <div class="cancel-list">

    <CancelExample
      id="NO_GRNZ"
      title="Не ГРНЗ"
      description="Посторонние надписи, бортовые номера и т.п."
      :images="[
  { src: '/media/cancels/2_NO_GRNZ/1.jpg', caption: 'Надпись на лобовом стекле' },
  { src: '/media/cancels/2_NO_GRNZ/2.jpg', caption: 'Бортовой номер автобуса' },
  { src: '/media/cancels/2_NO_GRNZ/3.jpg', caption: 'Имя водителя на стекле' }
]"
    />

    <CancelExample
      id="VID_ERR"
      title="Битое видео"
      description="Описание к битому видео"
      :images="[
  { src: '/media/cancels/1_VID_ERR/1.mp4', caption: 'Комментарий к битому видео' },
  { src: '/media/cancels/1_VID_ERR/2.mp4', caption: 'Бортовой номер автобуса' },
  { src: '/media/cancels/1_VID_ERR/3.mp4', caption: 'Имя водителя на стекле' },
  { src: '/media/cancels/1_VID_ERR/4.mp4', caption: 'Имя водителя на стекле' },
  { src: '/media/cancels/1_VID_ERR/5.mp4', caption: 'Имя водителя на стекле' }
]"
    />

    <!-- дальше копируешь еще 19 раз -->

  </div>
</template>

<script setup>
import CancelExample from '../CancelExample.vue'
</script>
