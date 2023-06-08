<template>
  <div id="AboutMe">
    <ul class="card-box">
      <li class="card">1</li>
      <li class="card">2</li>
      <li class="card">3</li>
    </ul>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
const { proxy: { $gsapPack } } = getCurrentInstance()
const router = useRouter()

// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animateAboutPanels = () => {
  const screenHeight = window.innerHeight
  $gsapPack.gsap.from(".card", {
    x: window.innerWidth,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".card-box",
      pin: true,
      scrub: true,
      markers: true,
      start: "top top",
      end: `+=${screenHeight * 30}`
    }
  })
}

onMounted(() => {
  _animateAboutPanels()
})
</script>

<style lang="scss" scoped>
// 排版
#AboutMe {
  width: 100%;
  height: 100%;
  // background-color: yellow;
}

// 元件
#AboutMe {
  .card-box {
    position: relative;
    outline: auto;
    width: 100%;
    height: 100%;
    background-color: cyan;

    .card {
      list-style-type: none;
      position: absolute;
      width: 80%;
      height: 100%;
      border: 10px solid black;

      &:nth-child(3) {
        background-color: red;
        left: 300px;
        z-index: 3;
      }

      &:nth-child(2) {
        background-color: green;
        left: 200px;
        z-index: 2;
      }

      &:nth-child(1) {
        background-color: blue;
        left: 100px;
        z-index: 1;
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
