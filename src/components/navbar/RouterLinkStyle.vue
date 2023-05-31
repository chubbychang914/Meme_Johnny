<template>
  <div id="RouterLinkStyle">
    <router-link :to="url">{{ urlName }}</router-link>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  url: {
    type: String,
    default: "/"
  },
  urlName: {
    type: String,
    default: ""
  }
})
</script>

<style lang="scss" scoped>
// 排版
#RouterLinkStyle {}

// 元件
#RouterLinkStyle {
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  border: 5px double white;
  background-color: black;
}
</style>
