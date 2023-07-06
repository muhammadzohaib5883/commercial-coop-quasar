<template>
  <!-- slider section start -->
  <q-responsive :ratio="16/9">
    <q-carousel animated v-model="slide" arrows navigation infinite>
      <q-carousel-slide :name="1" :height="$q.screen.lt.md ? '400px' : '1000px'" width="100%" img-src="/icons/slider-1.webp" />
      <q-carousel-slide :name="2" img-src="/icons/slider-2.webp" />
      <q-carousel-slide :name="3" img-src="/icons/slider-3.webp" />
      <q-carousel-slide :name="4" img-src="/icons/slider-4.webp" />
      <q-carousel-slide :name="5" img-src="/icons/slider-5.webp" />
    </q-carousel>
  </q-responsive>
  <!-- slider section end -->
</template>

<script>
import { ref } from 'vue'

export default {
  data() {
    return {
      slide: ref(1)
    }
  }
}
</script>
