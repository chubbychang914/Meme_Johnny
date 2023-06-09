<template>
  <div id="AboutView">
    <nav class="aboutNav">
      <NavbarLayout />
    </nav>
    <div class="aboutContent">
      <div class="bgMap"></div>
      <ScrollPanel />
    </div>
    <footer class="aboutFooter">
      <FooterLayout />
    </footer>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance()
import ScrollPanel from "@/components/about/ScrollPanel.vue";
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
  $gsapPack.gsap.from('.bgMap', {
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
    background-image: url("https://w.forfun.com/fetch/6e/6eddbe3a57d332ce35985449ac0320d3.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .aboutNav {
    width: 100%;
    height: var(--navHeight);
    position: fixed;
    top: 0;
    left: 0;
    background-color: yellow;
  }

  .aboutFooter {
    width: 100%;
    height: var(--footerHeight);
    position: fixed;
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
