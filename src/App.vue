<template>
  <NavbarLayout />
  <RouterView />
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import consoleLog from '@/tools/consoleLog.js'
import NavbarLayout from './components/layout/NavbarLayout.vue';

onMounted(() => {
  consoleLog()
})
</script>

<style lang="scss"></style>