<template>
  <RouterView></RouterView>
</template>

<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import consoleLog from '@/tools/consoleLog.js'

onMounted(() => {
  consoleLog()
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>