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
      start: "-=80",
      end: `+=${screenHeight * 5}`,
      scroll: true
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
  // 不用動，是根據外層設定長寬
  width: 100%;
  height: 100%;
}

// 元件
#AboutMe {
  .card-box {
    --spacing: 20vh;
    position: relative;
    outline: auto;
    width: 100%;
    height: 100%;
    background-color: cyan;

    .card {
      list-style-type: none;
      position: absolute;
      width: 75%;
      height: 100%;

      &:nth-child(1) {
        background-color: blue;
        z-index: 1;
      }

      &:nth-child(2) {
        background-color: green;
        left: var(--spacing);
        z-index: 2;
      }

      &:nth-child(3) {
        background-color: red;
        left: calc(var(--spacing)*2);
        // left: var(--spacing);
        z-index: 3;
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
