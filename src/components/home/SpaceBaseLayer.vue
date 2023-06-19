<template>
  <div id="SpaceBaseLayer" ref="SpaceBaseLayerRef">
    <div class="spaceBg"></div>
    <div class="spaceShip-container">
      <img class="spaceShip" src="@/assets/svgs/spaceship.svg">
    </div>
    <!-- <div class="planet" ref="planetRef"></div> -->
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西


</script> 

<style lang="scss" scoped>
#SpaceBaseLayer {
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow-y: hidden !important;

  .spaceBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url("src/assets/svgs/space.svg");
    background-size: cover;
    background-position: center;
  }


  .spaceShip {
    position: absolute;
    width: auto;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 800;
    @extend .center;

    @include mobile-media {
      display: none !important;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
