<template>
  <div id="InfoLayer">
    <div class="content">
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
      <div class="job" ref="jobRef">Frontend Developer</div>
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

  .content {
    // background-color: blue;
    @extend .center;
    flex-direction: column;
    width: 70%; // 設定文字寬度，讓文字不會太靠近邊緣
    background-color: white;

    // rwd
    @include mobile-media {
      width: 100%;
    }

    .name {
      width: 100%; // .content同寬
      display: flex;
      justify-content: space-between;
      background-color: blue;

      .name-letters {
        border: 10px double #FAE900;
        border-radius: 10px;
        background-color: black;
        padding: 10px 20px;
        font-size: 150px;

        // rwd
        @include mobile-media {
          font-size: 70px;
          padding: 10px;
        }

        &:hover {
          background-color: white;
          color: black;
          border: 10px double black;
          transform: skewX(-10deg);
        }
      }
    }

    .job {
      font-size: 50px;
      color: white;

      // rwd
      include mobile-media {
        font-size: 30px;
      }
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

    @include mobile-media {
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