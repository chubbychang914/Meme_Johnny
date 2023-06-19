<template>
  <div id="AboutView" ref="aboutViewRef">
    <!-- <h1>fist</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1>
    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, autem.</h1> -->
  </div>
</template>


<script setup>
import { onMounted, getCurrentInstance, ref } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance();

const aboutViewRef = ref(null);

let AnimateAboutViewBg = null;
onMounted(() => {
  // const backgroundImageWidth = aboutViewRef.value.clientWidth;
  AnimateAboutViewBg = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  AnimateAboutViewBg.to(aboutViewRef.value, {
    duration: 60,
    // backgroundPosition: `${backgroundImageWidth * 100}px 0px`,
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
  background-color: yellow;
  background-image: url("src/assets/imgs/about/aboutBg.jpeg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
</style>