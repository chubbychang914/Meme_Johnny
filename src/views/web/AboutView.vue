<template>
  <div id="AboutView">
    <AboutNav></AboutNav>
    <AboutContent></AboutContent>
  </div>
</template>

<script setup>
import AboutNav from '../../components/about/AboutNav.vue';
import AboutContent from "../../components/about/AboutContent.vue"
</script>

<style lang="scss" scoped>
// 排版
#AboutView {
  display: flex;
}

// 元件
#AboutView {}
</style>
