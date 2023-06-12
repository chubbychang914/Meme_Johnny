<template>
  <div id="AboutMe">
    <ul class="card-box">
      <li class="card">
        <JobPanel />
      </li>
      <li class="card">
        <JobPanel />
      </li>
      <li class="card">
        <JobPanel />
      </li>
      <li class="card">
        <JobPanel />
      </li>
      <li class="card">
        <button>Next</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
// import PanelTemplate from "@/components/about/PanelTemplate.vue"
import JobPanel from "@/components/about/panelStyle/JobPanel.vue";


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
    --spacing: 14vw;
    --panelPaddingTop: 10vh;
    --panelPaddingLeft: 50px;
    position: relative;
    width: 100%;
    height: 100%;

    .card {
      box-sizing: border-box;
      list-style-type: none;
      position: absolute;
      width: 40%;
      height: 100%;
      padding-top: var(--panelPaddingTop);
      // @extend .center;


      &:nth-child(1) {
        // padding-top: calc(var(--panelPaddingTop)*2);
        // padding-left: var(--panelPaddingLeft);
        // background-color: #798dc5;
        z-index: 1;
      }

      &:nth-child(2) {
        // padding-top: calc(var(--panelPaddingTop)*4);
        // padding-left: var(--panelPaddingLeft);
        // background-color: green;
        left: var(--spacing);
        z-index: 2;
      }

      &:nth-child(3) {
        // padding-top: calc(var(--panelPaddingTop)*6);
        // padding-left: var(--panelPaddingLeft);
        // background-color: red;
        left: calc(var(--spacing)*2);
        z-index: 3;
      }

      &:nth-child(4) {
        // background-color: hotpink;
        // padding-top: calc(var(--panelPaddingTop)*8);
        // padding-left: var(--panelPaddingLeft);
        left: calc(var(--spacing)*3);
        z-index: 4;
      }

      // next button
      &:nth-child(5) {
        background-color: hotpink;
        left: calc(var(--spacing)*5);
        width: 25%;
        z-index: 5;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
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
