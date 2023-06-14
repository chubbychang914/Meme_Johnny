<template>
  <div id="SpaceBaseLayer">
    <div class="spaceBg"></div>
    <div class="spaceShip">
      <img class="ship-img" src="@/assets/svgs/spaceship.svg">
    </div>
    <!-- <div class="planet" ref="planetRef"></div> -->
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西


</script> 

<style lang="scss" scoped>
#SpaceBaseLayer {
  $spaceSvg: "src/assets/svgs/space.svg";
  width: 100%;
  height: 100vh;
  background-color: black;
  overflow: hidden;

  .spaceBg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url($spaceSvg);
    background-size: cover;
    background-position: center;
    overflow: hidden;
    z-index: 1;
  }

  .spaceShip {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    @extend .center;

    .ship-img {
      width: auto;
      height: 100vh;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
