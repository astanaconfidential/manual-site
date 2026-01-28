<template>
  <div class="cancel-list">

    <CancelExample
      id="NO_GRNZ"
      title="Не ГРНЗ"
      description="Посторонние надписи, бортовые номера и т.п."
      :images="[
        'img/cancels/2_NO_GRNZ/1.jpg',
        'img/cancels/2_NO_GRNZ/2.jpg',
        'img/cancels/2_NO_GRNZ/3.jpg',
        'img/cancels/2_NO_GRNZ/4.jpg'
      ]"
    />

    <!-- дальше копируешь еще 19 раз -->

  </div>
</template>

<script setup>
import CancelExample from '../CancelExample.vue'
</script>
