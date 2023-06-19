<template>
  <NavbarLayout ref="navbarLayoutRef" />
  <RouterView />
</template>

<script setup>
import { onMounted, ref, getCurrentInstance } from 'vue';
import { RouterView } from 'vue-router'
import consoleLog from '@/tools/consoleLog.js'

import NavbarLayout from './components/layout/NavbarLayout.vue';

const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
const navbarLayoutRef = ref(null)

let AnimateNavbarEnter = null;

onMounted(() => {
  consoleLog()
  AnimateNavbarEnter = $gsapPack.gsap.from(navbarLayoutRef.value.$el, {
    yPercent: -100,
    duration: 1.2,
    ease: "power1.out",
    paused: true
  })


  AnimateNavbarEnter.play()
})
</script>

<style lang="scss">
#App {
  margin: 0;
  padding: 0;
}
</style>