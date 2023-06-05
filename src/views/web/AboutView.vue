<template>
  <div id="AboutView">
    <NavBar />
    <Summary />
  </div>
</template>

<script setup>
import NavBar from '@/components/reusable/NavBar.vue'
import Summary from '@/components/reusable/about/Summary.vue';
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
