<template>
  <div id="SpaceBaseLayer" ref="SpaceBaseLayerRef">
    <div class="spaceBg"></div>
    <img class="spaceShip" src="@/assets/svgs/spaceship.svg">
    <!-- <div class="planet" ref="planetRef"></div> -->
  </div>
</template>

<script setup>
import { ref, getCurrentInstance, onMounted } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西


</script> 

<style lang="scss" scoped>
#SpaceBaseLayer {
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
    background-image: url("src/assets/svgs/space.svg");
    background-size: cover;
    background-position: center;
    overflow: hidden;
    z-index: 1;
  }

  .spaceShip {
    position: absolute;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 800;
    @extend .center;

    @include mobile-media {
    
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
