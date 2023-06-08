<template>
  <div id="AboutMe">
    <ul class="card-box">
      <li class="card">
      </li>
      <li class="card">
      </li>
      <li class="card">
      </li>
    </ul>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import debounce from 'lodash/debounce';
const { proxy: { $gsapPack } } = getCurrentInstance()
const router = useRouter()


// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animateAboutPanels = () => {
  // 根據螢幕大小去設定元件的寬度跟高度
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth
  const updateScrollTrigger = debounce(() => {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth
    $gsapPack.ScrollTrigger.refresh();
  }, 500);
  window.addEventListener('resize', updateScrollTrigger);
  // action
  $gsapPack.gsap.from(".card", {
    x: screenWidth,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".card-box",
      pin: true,
      scrub: 0.5,
      // markers: true,
      start: "-=80", // 從trigger的-80px開始執行
      end: `+=${screenHeight * 3}`, // 調整滾動速度
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
    --spacing: 15vh;
    position: relative;
    // outline: auto;
    width: 100%;
    height: 100%;
    background-color: black;
    // background-image: url('src/assets/svgs/bg.svg');
    background-repeat: no-repeat;
    background-size: cover;


    .card {
      list-style-type: none;
      position: absolute;
      width: 86%;
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
