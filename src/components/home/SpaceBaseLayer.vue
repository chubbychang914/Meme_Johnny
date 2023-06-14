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
import { ref, onMounted, getCurrentInstance, onUnmounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西

import NavbarLayout from "@/components/layout/NavbarLayout.vue"
// state ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const planetRef = ref(null)

// let AnimatePlanetEnlarge = null;
// let PageLeaveAnimationFlow = null;

// hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  // AnimatePlanetEnlarge = $gsapPack.gsap.to(planetRef.value, {
  //   scale: 10,
  //   ease: "power2.in",
  //   duration: 1.5,
  //   paused: true
  // })

  // PageLeaveAnimationFlow = $gsapPack.gsap.timeline({ paused: true })
  // PageLeaveAnimationFlow.add(AnimatePlanetEnlarge.play())
})

// onBeforeRouteLeave(async (to, from, next) => {
// try {
//   await PageLeaveAnimationFlow.play()
//     .then(() => next())
// } catch (error) {
//   console.log(error);
//   next(false)
// }
// })

// onUnmounted(() => {
  // PageLeaveAnimationFlow?.kill()
// })
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
