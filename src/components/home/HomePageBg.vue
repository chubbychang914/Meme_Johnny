<template>
  <div id="HomePageBg">
    <!-- left side -->
    <div class="left-panel">
      <div class="content-section">
      </div>
      <div class="triangle-section">
        <img class="triangleSvg" src="@/assets/svgs/homeTriangle.svg" alt="triangle" />
      </div>
    </div>
    <!-- middle -->
    <div class="middle-panel">
      <img src="@/assets/svgs/personBg.png">
    </div>
    <!-- right side -->
    <div class="right-panel">
      <div class="triangle-section">
        <img class="triangleSvg" src="@/assets/svgs/homeTriangle.svg" alt="triangle" />
      </div>
      <div class="content-section"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
let animateBgLayer = null;
const _animateBgLayer = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { duration: 1, ease: "power1.out" } })
  tl.from(".left-panel", { xPercent: -100 })
  tl.from(".right-panel", { xPercent: 100 }, "<")
  return tl
}
// Hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  animateBgLayer = _animateBgLayer()
  animateBgLayer.play()

})
</script>

<style lang="scss" scoped>
// 變數
$themeColor: #E4D00A;
$contentWidthPercent: 55%;
$triangleWidthPercent: 100% - $contentWidthPercent;

// 排版
#HomePageBg {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

// 元件
#HomePageBg {
  .left-panel {
    display: flex;

    .content-section {
      width: $contentWidthPercent;
      height: 100vh;
      background-color: $themeColor;
    }

    .triangle-section {
      position: relative;
      width: $triangleWidthPercent;
      height: 100vh;

      .triangleSvg {
        position: absolute;
        left: -1px;
        height: 100vh;
      }
    }
  }

  .middle-panel {
    position: absolute;
    z-index: 2;
    left: 50%;
    transform: translateX(-70%);
    bottom: 0;
    overflow: hidden;

    img {
      height: 100vh;
    }
  }

  .right-panel {
    display: flex;
    justify-content: flex-end;

    .content-section {
      width: $contentWidthPercent;
      height: 100vh;
      background-color: $themeColor;
      display: flex;
    }

    .triangle-section {
      position: relative;
      width: $triangleWidthPercent;
      height: 100vh;

      .triangleSvg {
        position: absolute;
        right: -1px;
        height: 100vh;
        transform: rotate(180deg);
      }
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>