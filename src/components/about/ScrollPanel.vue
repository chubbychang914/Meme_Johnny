<template>
  <div id="AboutMe">
    <ul class="card-box">
      <li class="card">Summary
      </li>
      <li class="card">Skills
      </li>
      <li class="card">iSpan
      </li>
      <li class="card">Tyr
      </li>
    </ul>
  </div>
</template>

<script setup>
import PanelTemplate from "@/components/about/PanelTemplate.vue"


import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import debounce from 'lodash/debounce';
const { proxy: { $gsapPack } } = getCurrentInstance()
const router = useRouter()

// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _scrollAboutPanels = () => {
  // 根據螢幕大小去設定元件的寬度跟高度
  let screenHeight = window.innerHeight;
  let screenWidth = window.innerWidth
  const updateScrollTrigger = debounce(() => {
    screenHeight = window.innerHeight;
    screenWidth = window.innerWidth
    $gsapPack.ScrollTrigger.refresh();
  }, 500);
  window.addEventListener('resize', updateScrollTrigger);

  // scrolltrigger action
  $gsapPack.gsap.from(".card", {
    x: screenWidth,
    stagger: 0.5,
    scrollTrigger: {
      trigger: ".card-box",
      pin: true,
      scrub: 0.5,
      // markers: true,
      start: "-=80", // 從trigger的-80px開始執行
      end: `+=${screenHeight * 4.5}`, // 調整滾動速度
    }
  })
}

onMounted(() => {
  _scrollAboutPanels()
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
    --spacing: 10vw;
    position: relative;
    // outline: auto;
    width: 100%;
    height: 100%;
    // background-color: black;
    // background-image: url('src/assets/svgs/bg.svg');
    background-image: url("https://w.forfun.com/fetch/6e/6eddbe3a57d332ce35985449ac0320d3.jpeg");
    background-repeat: no-repeat;
    background-size: cover;


    .card {
      box-sizing: border-box;
      list-style-type: none;
      position: absolute;
      width: 50%;
      height: 100%;
      // border-left: 10px solid darkblue;
      // border-radius: 10px;

      &:nth-child(1) {
        background-color: #798dc5;
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
        z-index: 3;
      }

      &:nth-child(4) {
        background-color: hotpink;
        left: calc(var(--spacing)*3);
        width: 70%;
        z-index: 4;
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
