<template>
  <div id="AboutView">
    <nav>
      <!-- <NavbarLayout /> -->
    </nav>
    <div class="content">
      <AboutMe />
    </div>
    <footer>
      <!-- <FooterLayout /> -->
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
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.add(_animateFooterEnter().play())
  return tl
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 進場動畫
const _animateFooterEnter = () => {
  const action = $gsapPack.gsap.from('footer', {
    x: window.innerWidth,
    duration: 1,
    paused: true
  })
  return action
}
onMounted(() => {
  enterPageAnimationFlow().play()
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

  nav {
    background-color: yellow;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
  }

  .content {
    width: 100%;
    height: 100%;
    @extend .center;
    grid-row: 2;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
  }
}

// 元件
#AboutView {}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
