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

    <!-- дальше копируешь еще 19 раз -->

  </div>
</template>

<script setup>
import CancelExample from '../CancelExample.vue'
</script>
