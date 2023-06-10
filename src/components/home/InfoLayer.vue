<template>
  <div id="InfoLayer">
    <div class="left-side"></div>
    <div class="right-side"></div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西


onMounted(() => {

})
</script>

<style lang="scss" scoped>
// 排版
#InfoLayer {
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-areas: "left right";

  .left-side {
    grid-area: left;
    width: 100%;
    height: 100vh;
    background-color: blue;
  }

  .right-side {
    grid-area: right;
    width: 100%;
    height: 100vh;
  }
}

// 元件
#InfoLayer {}
</style>


