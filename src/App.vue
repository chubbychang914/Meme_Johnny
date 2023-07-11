<template>
  <LoadingPage v-if="isLoading" />
  <div v-else>
    <NavbarLayout ref="navbarLayoutRef" />
    <RouterView />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, getCurrentInstance } from 'vue';
import { RouterView } from 'vue-router'

import NavbarLayout from './components/layout/NavbarLayout.vue';
import LoadingPage from './components/layout/LoadingPage.vue';
import consoleLog from '@/tools/consoleLog.js'

const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
const navbarLayoutRef = ref(null)

// state ==================================================
const imgList = ref([])
const isLoading = ref(true)
// functions ==============================================
const loadImages = async () => {
  imgList.value = [

  ]
}

// gsap animations ========================================
let AnimateNavbarEnter = null;
// hooks ==================================================
onMounted(() => {
  // set and play gsap animations
  AnimateNavbarEnter = $gsapPack.gsap.from(navbarLayoutRef.value.$el, {
    yPercent: -100,
    duration: 1.2,
    ease: "power1.out",
    paused: true
  })

  AnimateNavbarEnter.play()
  // other functions
  consoleLog()
})

onUnmounted(() => {
  // kill gsap animations
  AnimateNavbarEnter?.kill()
})

</script>

<style lang="scss">
#App {}
</style>