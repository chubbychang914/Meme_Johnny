<template>
  <div id="HomeView">
    <div class="baseLayer" ref="baseLayerRef">
      <SpaceBaseLayer />
    </div>
    <div class="infoLayer" ref="infoLayerRef">
      <InfoLayer />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
// import { onBeforeRouteLeave } from "vue-router";
// const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西

import SpaceBaseLayer from "@/components/home/SpaceBaseLayer.vue";
import InfoLayer from "@/components/home/InfoLayer.vue";
// state ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const baseLayerRef = ref(null)
const infoLayerRef = ref(null)
</script>

<style lang="scss" scoped>
// 排版
#HomeView {
  width: 100%;
  height: 100vh;
  overflow: hidden;

  .baseLayer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoLayer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }
}

// 元件
#HomeView {}
</style>
