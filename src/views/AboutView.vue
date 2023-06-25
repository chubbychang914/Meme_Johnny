<template>
  <div id="AboutView" ref="aboutViewRef">
    <div class="scroll-component">
      <ScrollComponent />
    </div>
  </div>
</template>


<script setup>
import { onMounted, getCurrentInstance, ref } from 'vue';

// components ========================
import ScrollComponent from '@/components/about/ScrollComponent.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';
const { proxy: { $gsapPack } } = getCurrentInstance();

const aboutViewRef = ref(null);

let AnimateAboutViewBg = null;
onMounted(() => {
  AnimateAboutViewBg = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  AnimateAboutViewBg.to(aboutViewRef.value, {
    duration: 60,
    backgroundPosition: "10000px 0px",
    ease: "linear"
  })

  AnimateAboutViewBg.play()
})


</script>

<style lang="scss" scoped>
#AboutView {
  width: 100%;
  min-height: 100vh;
  @extend .center;

  background-image: url("src/assets/imgs/about/aboutBg.jpeg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;

  .scroll-component {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>