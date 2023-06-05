<template>
  <div id="AboutView">
    <NavBar />
    <AboutSummary />
  </div>
</template>

<script setup>
import NavBar from '@/components/reusable/NavBar.vue'
import AboutSummary from '@/components/about/AboutSummary.vue';
</script>

<style lang="scss" scoped>
// 排版
#AboutView {
  display: grid;
  grid-template-rows: 80px 1fr;
  height: 100vh;
}

// 元件
#AboutView {}
</style>
