<template>
  <div id="SpaceBaseLayer">
    <div class="spaceBg"></div>
    <div class="spaceShip">
      <img class="ship-img" src="@/assets/svgs/spaceship.svg">
    </div>
    <div class="planet" ref="planetRef"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西


const planetRef = ref(null)
// Animation ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 星球放大
const _animatePlanetEnlarge = () => {
  const action = $gsapPack.gsap.to(planetRef.value, { scale: 3.5, duration: 2, delay: 0.1 })
  return action;
}
// 背景旋轉
const _animateRotateBg = () => {
  const action = $gsapPack.gsap.to(".spaceBg", {
    rotate: "-30",
    duration: 1.5
  })
  return action
}

// onMount ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  // _animateRotateBg()
})

// Router Leave ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
let completeAnimation = null; // this is the resolve function
const _animateRouterLeave = () => {
  return new Promise((resolve) => {
    completeAnimation = resolve
    const tl = $gsapPack.gsap.timeline()
    tl.add(_animateRotateBg())
      .add(_animatePlanetEnlarge(), "<")
      .eventCallback("onComplete", () => completeAnimation())
  })
}

onBeforeRouteLeave(async (to, from, next) => {
  await _animateRouterLeave()
  next()
})
</script> 

<style lang="scss" scoped>
#SpaceBaseLayer {
  $spaceSvg: "src/assets/svgs/space.svg";
  width: 100%;
  height: 100vh;
  background-color: black;
  // background-image: url($spaceSvg);
  // background-size: cover;
  // overflow: hidden;

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
    z-index: 3;
    @extend .center;

    .ship-img {
      width: auto;
      height: 100vh;
    }
  }

  .planet {
    position: absolute;
    top: 35%;
    left: 75%;
    z-index: 2;
    transform: translateX(-50%) scale(0);
    width: 100px;
    height: 100px;
    // background-color: yellow;
    border-radius: 50%;
    background-image: url("https://img.freepik.com/free-photo/orange-details-moon-texture-concept_23-2149535766.jpg");
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
