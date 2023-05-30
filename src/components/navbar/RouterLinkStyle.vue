<template>
  <div id="RouterLinkStyle">
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
#RouterLinkStyle {}

// 元件
#RouterLinkStyle {}
</style>
