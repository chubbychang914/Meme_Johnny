<template>
  <!-- <LoadingPage v-if="isLoading" /> -->
  <!-- <div v-else> -->
    <NavbarLayout ref="navbarLayoutRef" />
    <RouterView />
  <!-- </div> -->
</template>

<script setup>
import { onMounted, onUnmounted, ref, getCurrentInstance } from 'vue';
import { RouterView } from 'vue-router'

import NavbarLayout from './components/layout/NavbarLayout.vue';
// import LoadingPage from './components/layout/LoadingPage.vue';
import consoleLog from '@/tools/consoleLog.js'

const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
const navbarLayoutRef = ref(null)

// state ==================================================
// const imgList = ref([])
// const isLoading = ref(true)
// functions ==============================================
// const loadImages = async () => {
//   const images = [
//     require('@/assets/img/image1.jpg').default,
//     require('@/assets/img/image2.jpg').default,
//     require('@/assets/img/image3.jpg').default,
//   ];

//   const imagePromises = images.map((image) => {
//     return new Promise((resolve) => {
//       const img = new Image();
//       img.onload = resolve;
//       img.src = image;
//     });
//   });

//   await Promise.all(imagePromises);

//   imgList.value = images.map((image) => {
//     return {
//       src: image,
//       alt: 'Image description',
//     };
//   });

//   isLoading.value = false;
// };


// gsap animations ========================================
let AnimateNavbarEnter = null;
// hooks ==================================================
onMounted(() => {
  // set and play gsap animations
  // there is a slight problem here with .value.$el
  AnimateNavbarEnter = $gsapPack.gsap.from(navbarLayoutRef.value.$el, {
    yPercent: -100,
    duration: 1.2,
    ease: "power1.out",
    paused: true
  })

  AnimateNavbarEnter.play()
  // other functions
  consoleLog()
  // loadImages()
})

onUnmounted(() => {
  // kill gsap animations
  AnimateNavbarEnter?.kill()
})

</script>

<style lang="scss">
#App {}
</style>