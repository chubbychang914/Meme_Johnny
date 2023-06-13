<template>
  <div id="AboutView">
    <nav class="aboutNav">
      <NavbarLayout />
    </nav>
    <div class="aboutContent">
      <div class="bgMap" ref="bgRef"></div>
      <ScrollPanel />
    </div>
    <footer class="aboutFooter">
      <FooterLayout />
    </footer>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance()
import ScrollPanel from "@/components/about/ScrollPanel.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import NavbarLayout from '@/components/layout/NavbarLayout.vue';


const bgRef = ref(null)
// Flows ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const enterPageAnimationFlow = () => {
  _animateContentEnter()
  _animateFooterEnter()
  _animateNavEnter()
  _animateBgLoop().play()
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 進場動畫
const _animateNavEnter = () => {
  $gsapPack.gsap.from('.aboutNav', {
    y: -window.innerHeight,
    duration: 1,
    ease: "power3.out"
  })
}
const _animateFooterEnter = () => {
  $gsapPack.gsap.from('.aboutFooter', {
    y: window.innerHeight,
    duration: 1,
    ease: "power3.out"
  })
}
const _animateContentEnter = () => {
  $gsapPack.gsap.from('.bgMap', {
    opacity: 0,
    duration: 3
  })
}

const _animateBgLoop = () => {
  const backgroundImageWidth = bgRef.value.clientWidth;
  const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  tl.to(bgRef.value, {
    // backgroundPosition: "10000px 0px",
    backgroundPosition: `${backgroundImageWidth * 10}px 0px`,
    duration: 100,
    ease: "linear"
  })

  return tl
}


onMounted(() => {
  enterPageAnimationFlow()
})

// onUnmounted(() => {
//   $gsapPack.gsap.globalTimeline.clear();
// })
</script>

<style lang="scss" scoped>
// 排版
#AboutView {
  --navHeight: 80px;
  --footerHeight: 75px;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: var(--navHeight) auto var(--footerHeight);
}

// 元件
#AboutView {
  .bgMap {
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
    background-image: url("src/assets/imgs/about/aboutBg.jpeg");
    // background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .aboutNav {
    width: 100%;
    height: var(--navHeight);
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background-color: yellow;
  }

  .aboutFooter {
    width: 100%;
    height: var(--footerHeight);
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
  }

  .aboutContent {
    width: 100%;
    height: 100%;
    @extend .center;
    // 這邊是為了解決 GSAP 的 pin-spacer 問題
    grid-row: 2;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
