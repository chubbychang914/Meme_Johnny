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
import { onBeforeRouteLeave } from "vue-router";
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西

import SpaceBaseLayer from "@/components/home/SpaceBaseLayer.vue";
import InfoLayer from "@/components/home/InfoLayer.vue";
// state ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const baseLayerRef = ref(null)
const infoLayerRef = ref(null)

let AnimateEnterOpacity = null;
// hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// onMounted(() => {
//   AnimateEnterOpacity = $gsapPack.gsap.from([baseLayerRef.value, infoLayerRef.value], {
//     opacity: 0,
//     duration: 2.5,
//     paused: true
//   })
//   // ► 執行
//   AnimateEnterOpacity.play()
// })

// onBeforeRouteLeave((to, from, next) => {
//   AnimateEnterOpacity.reverse();
//   next();
// })
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
