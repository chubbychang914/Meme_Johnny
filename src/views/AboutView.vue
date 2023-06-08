<template>
  <div id="AboutView">
    <nav class="aboutNav">
      <NavbarLayout />
    </nav>
    <div class="aboutContent">
      <AboutMe />
    </div>
    <footer class="aboutFooter">
      <FooterLayout />
    </footer>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref, toHandlerKey } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance()
import AboutMe from "@/components/about/AboutMe.vue";
import FooterLayout from "@/components/layout/FooterLayout.vue";
import NavbarLayout from '../components/layout/NavbarLayout.vue';

// Flows ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const enterPageAnimationFlow = () => {
  _animateContentEnter()
  _animateFooterEnter()
  _animateNavEnter()
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
  $gsapPack.gsap.from('.aboutContent', {
    opacity: 0,
    duration: 3
  })
}


onMounted(() => {
  enterPageAnimationFlow()
})

</script>

<style lang="scss" scoped>
// 排版
#AboutView {
  width: 100%;
  height: 100vh;
  // background-color: black;
  display: grid;
  grid-template-rows: 80px 1fr 80px;

  .aboutNav {
    width: 100%;
    height: 80px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: yellow;
  }

  .aboutContent {
    width: 100%;
    height: 100%;
    @extend .center;
    // 這邊是為了解決 GSAP 的 pin-spacer 問題
    grid-row: 2;
  }

  .aboutFooter {
    width: 100%;
    height: 80px;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}

// 元件
#AboutView {}

.center {
  display: flex;
  justify-aboutContent: center;
  align-items: center;
}
</style>
