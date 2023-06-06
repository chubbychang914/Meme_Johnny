<template>
  <div id="HomePageBg">
    <div class="bg-image">
      <img
        src="https://marketplace.canva.com/EAE6ROnD0JQ/1/0/1600w/canva-pixel-art-illustration-wallpaper-desktop-eaH9vinM_Xw.jpg"
        alt="">
    </div>
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
      <img class="person-img" src="@/assets/svgs/personBg.png">
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
import { onMounted, getCurrentInstance, Teleport } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
// Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const EnterPageAnimationFlow = () => {
  const tl = $gsapPack.gsap.timeline()
  tl.add(_animatePanel().play())
  // .add(_animateBgLoop().play())
  return tl
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animateBgLoop = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  tl.to('.bg-image', { x: "100vw" })
  return tl
}

const _animatePanel = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { duration: 1, ease: "power1.out" } })
  tl.from(".left-panel", { xPercent: -100 })
    .from(".right-panel", { xPercent: 100 }, "<")
    .from(".person-img", { y: window.innerHeight, delay: 0.4 }, "<")
  return tl
}
// Hooks ≡≡≡≡≡≡≡≡ ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  EnterPageAnimationFlow()
})
</script>

<style lang="scss" scoped>
// 變數
$themeColor: #E4D00A;
$contentWidthPercent: 35%;
$triangleWidthPercent: 100% - $contentWidthPercent;

// 排版
#HomePageBg {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  // background-color: black;
  // background-image: url("https://marketplace.canva.com/EAE6ROnD0JQ/1/0/1600w/canva-pixel-art-illustration-wallpaper-desktop-eaH9vinM_Xw.jpg");
  display: grid;
  grid-template-columns: 1fr 1fr;
}

// 元件
#HomePageBg {
  .bg-image {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

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