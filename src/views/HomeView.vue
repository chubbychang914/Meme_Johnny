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
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西

import SpaceBaseLayer from "@/components/home/SpaceBaseLayer.vue";
import InfoLayer from "@/components/home/InfoLayer.vue";


const baseLayerRef = ref(null)
const infoLayerRef = ref(null)

let AnimateEnterOpacity = null;

onMounted(() => {
  AnimateEnterOpacity = $gsapPack.gsap.from(baseLayerRef.value, {
    opacity: 0,
    duration: 2,
    paused: true
  })

  AnimateEnterOpacity.play()
})
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
    z-index: 100;
  }
}

// 元件
#HomeView {}
</style>
