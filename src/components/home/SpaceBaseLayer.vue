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
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';
import { ref, onMounted, getCurrentInstance, onUnmounted } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西


const planetRef = ref(null)
// Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
let enterPageTimeline = null;
const enterPageAnimationFlow = () => {
  enterPageTimeline = $gsapPack.gsap.timeline()
  enterPageTimeline.add(_animatePageEnter())
}
// Animation ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animatePageEnter = () => {
  const action = $gsapPack.gsap.from('#SpaceBaseLayer', { opacity: 0, duration: 2 })
  return action
}
// 星球放大
const _animatePlanetEnlarge = () => {
  const action = $gsapPack.gsap.to(planetRef.value, { scale: 8, duration: 2 })
  return action;
}
// 配景淡掉
const _animateShipFade = () => {
  const action = $gsapPack.gsap.to('#SpaceBaseLayer', { opacity: 0, duration: 1, delay: 1 })
  return action
}

// onMount ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  enterPageAnimationFlow()
})
onUnmounted(() => {
  if (enterPageTimeline) {
    enterPageTimeline.kill()
  }
})
// Router Leave ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
let completeAnimation = null; // this is the resolve function
const _animateRouterLeave = () => {
  return new Promise((resolve) => {
    completeAnimation = resolve
    const tl = $gsapPack.gsap.timeline()
    tl.add(_animatePlanetEnlarge())
      .add(_animateShipFade(), "<")
      .eventCallback("onComplete", () => completeAnimation())
  })
}

onBeforeRouteLeave(async (to, from, next) => {
  try {
    await _animateRouterLeave()
    next()
  } catch (error) {
    console.log(error);
    next(false)
  }
})
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
    z-index: 3;
    @extend .center;

    .ship-img {
      width: auto;
      height: 100vh;
    }
  }

  .planet {
    position: absolute;
    top: 40%;
    left: 50%;
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
