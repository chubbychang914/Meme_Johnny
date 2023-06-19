<template>
  <NavbarLayout /> 
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import consoleLog from '@/tools/consoleLog.js'
import { getCurrentInstance } from 'vue';

import NavbarLayout from './components/layout/NavbarLayout.vue';

const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西

onMounted(() => {
  consoleLog()
})
</script>

<style lang="scss">
#App{
  margin: 0;
  padding: 0;
}
</style>