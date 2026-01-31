<template>
  <div class="cancel-list">

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
      id="WRONG_GRNZ"
      title="Неверное определение ГРНЗ"
      description="Посторонние надписи, бортовые номера и т.п."
      :images="[
  { src: '/media/cancels/3_WRONG_GRNZ/1.jpg', caption: 'Надпись на лобовом стекле' },
  { src: '/media/cancels/3_WRONG_GRNZ/2.jpeg', caption: 'Бортовой номер автобуса' },
  { src: '/media/cancels/3_WRONG_GRNZ/3.jpeg', caption: 'Имя водителя на стекле' },
  { src: '/media/cancels/3_WRONG_GRNZ/4.jpg', caption: 'Имя водителя на стекле' },
  { src: '/media/cancels/3_WRONG_GRNZ/5.jpg', caption: 'Имя водителя на стекле' }
]"
    />

    <CancelExample
      id="CTRL_ERR"
      title="Некорректные данные контроллера"
      description="Посторонние надписи, бортовые номера и т.п."
      :images="[
  { src: '/media/cancels/4_CTRL_ERR/1.webm', caption: 'Надпись на лобовом стекле' },
  { src: '/media/cancels/4_CTRL_ERR/2.webm', caption: 'Бортовой номер автобуса' },
  { src: '/media/cancels/4_CTRL_ERR/3.webm', caption: 'Имя водителя на стекле' }
  ]"
    />

    <!-- дальше копируешь еще 19 раз -->

  </div>
</template>

<script setup>
import CancelExample from '../CancelExample.vue'
</script>
