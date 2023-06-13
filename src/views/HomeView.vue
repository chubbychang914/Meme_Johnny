<template>
  <div id="HomeView">
    <div class="baseLayer">
      <SpaceBaseLayer />
    </div>
    <div class="infoLayer">
      <!-- <InfoLayer /> -->
    </div>
  </div>
</template>

<script setup>
import SpaceBaseLayer from "@/components/home/SpaceBaseLayer.vue";
import InfoLayer from "@/components/home/InfoLayer.vue";
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
