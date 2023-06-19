<template>
  <div id="InfoLayer">
    <div class="name" ref="nameRef">
      <!-- <div class="icon-left" ref="iconLeftRef">
        <font-awesome-icon icon="fa-solid fa-angles-right" />
      </div> -->
      <div class="name-letters" ref="jRef">J</div>
      <div class="name-letters" ref="oRef">O</div>
      <div class="name-letters" ref="hRef">H</div>
      <div class="name-letters" ref="nRef">N</div>
      <div class="name-letters" ref="nRef2">N</div>
      <div class="name-letters" ref="yRef">Y</div>
      <!-- <div class="icon-right" ref="iconRightRef">
        <font-awesome-icon icon="fa-solid fa-angles-left" />
      </div> -->
    </div>
    <div class="nav-panel" ref="navPanelRef">
      <Panel />
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from "vue";

import Panel from "@/components/layout/Panel.vue";

const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
// ref
const navPanelRef = ref(null)
// animations
let AnimateNavPanelEnter = null;
onMounted(() => {
  AnimateNavPanelEnter = $gsapPack.gsap.from(navPanelRef.value, {
    y: 100,
    duration: 2,
    opacity: 0,
    ease: "power4.out",
    paused: true,
  });

  AnimateNavPanelEnter.play();
})

</script>

<style lang="scss" scoped>
#InfoLayer {
  width: 100%;
  height: 100vh;
  color: yellow;
  @extend .center;

  font-family: 'VT323', monospace;
  user-select: none;
  overflow: hidden;

  .name {
    display: flex;

    .name-letters {
      font-size: 200px;
      letter-spacing: 25px;
      // border: 1px solid yellow;
    }
  }

  .nav-panel {
    position: absolute;
    bottom: 0;
    width: 60%;
    height: 15vh;
    min-height: 80px;
    // background-color: yellow;
    transform-style: preserve-3d;
    @include mobile-media{
      width: 100%;
    }
  }

}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>