<template>
  <div id="PanelLayer">
    <div class="bg-image">
      <img src="@/assets/svgs/bg.svg" alt="">
    </div>
    <!-- left side -->
    <div class="left-panel">
      <img class="trapezoidSvg" src="@/assets/svgs/trapezoidNew.png" alt="triangle" />
    </div>
    <!-- middle -->
    <div class="middle-panel">
      <img class="person-img" src="@/assets/imgs/personBg.png">
    </div>
    <!-- right side -->
    <div class="right-panel">
      <img class="trapezoidSvg" src="@/assets/svgs/trapezoidNew.png" alt="triangle" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
// Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const EnterPageAnimationFlow = () => {
  const tl = $gsapPack.gsap.timeline()
  tl.add(_animatePanel().play())
  // .add(_animateBgLoop().play(), "<")
  return tl
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// const _animateBgLoop = () => {
//   const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
//   tl.to('.middle-panel', { backgroundPosition: "-5000px 0px", duration: 25, ease: "linear" })
//   return tl
// }

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
// $contentWidthPercent: 50%;
// $triangleWidthPercent: 100% - $contentWidthPercent;

// 排版
#PanelLayer {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

// 元件
#PanelLayer {
  .bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  //   .space {
  //     image-rendering: pixelated;
  //     background: url("@/assets/imgs/spacebg.jpg") no-repeat 0 0 transparent;
  //     background-repeat: repeat;
  //     background-size: cover;
  //     transform: rotate(-75deg);
  //     width: 100%;
  //     height: 100%;
  //   }
  // }
  // 左
  .left-panel {
    .trapezoidSvg {
      position: absolute;
      height: 100vh;
    }
  }

  // 人物
  .middle-panel {
    position: absolute;
    z-index: 2;
    left: 50%;
    transform: translateX(-60%);
    bottom: 0;
    overflow: hidden;

    img {
      height: 100vh;
    }
  }

  // 右
  .right-panel {
    .trapezoidSvg {
      position: absolute;
      right: 0;
      height: 100vh;
      transform: rotate(180deg);
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>