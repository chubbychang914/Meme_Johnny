<script setup>
import { onMounted, getCurrentInstance, ref } from 'vue';
import ScrollComponent from '@/components/about/ScrollComponent.vue';
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

<template>
  <div id="AboutView" ref="aboutViewRef">
    <ScrollComponent />
  </div>
</template>

<style lang="scss" scoped>
#AboutView {
  width: 100%;
  height: 100vh;
  @extend .center;

  background-image: url("@/assets/imgs/about/aboutBg.jpeg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  overflow: hidden;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>