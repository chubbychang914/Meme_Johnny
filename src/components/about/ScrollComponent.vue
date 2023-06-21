<template>
  <div id="ScrollComponent">
    <ul class="card-box">
      <li class="card">1</li>
      <li class="card">2</li>
      <li class="card">3</li>
      <li class="card">4</li>
    </ul>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance()


onMounted(() => {
  const testAnimate = () => {
    let screenHeight = window.innerHeight;
    $gsapPack.gsap.set('.card', { position: 'absolute' })
    $gsapPack.gsap.to('.card', {
      yPercent: -100,
      stagger: 0.5,
      scrollTrigger: {
        trigger: '.card-box',
        markers: true,
        // start: 'top top',
        end: `+=${screenHeight * 15}`, // 調整滾動速度
        scrub: true,
        pin: true
      }
    })
  }

  testAnimate()
})
</script>


<style lang="scss" scoped>
#ScrollComponent {
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: yellow;
  display: flex;
  justify-content: center;

  .card-box {
    position: relative;
    width: 50%;
    height: 100%;
    min-height: 100vh;
    background-color: blue;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .card {
      --spacing: 10vh;
      width: 200px;
      height: 200px;
      background-color: red;

      @include mobile-media {
        position: relative;
      }

      &:nth-child(1) {
        top: 180px;
        z-index: 10;
      }

      &:nth-child(2) {
        background-color: green;
        top: 280px;
        z-index: 9;
      }

      &:nth-child(3) {
        background-color: yellow;
        top: 380px;
        z-index: 8;
      }

      &:nth-child(4) {
        background-color: hotpink;
        top: 480px;
        z-index: 7;
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