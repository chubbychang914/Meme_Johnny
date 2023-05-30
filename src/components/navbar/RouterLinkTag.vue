<template>
  <div id="RouterLinktag">
    <router-link :to="url"></router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  url: {
    type: String,
    default: "/home"
  }
})
</script>

<style lang="scss" scoped>
// 排版
#RouterLinkTag {}

// 元件
#RouterLinkTag {}
</style>
