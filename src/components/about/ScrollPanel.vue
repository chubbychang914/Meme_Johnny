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
        <JobPanel :jobInfoObj="ispanInfoObj" />
      </li>
      <li class="card">
        <JobPanel :jobInfoObj="tyrInfoObj" />
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

// Props ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const ispanInfoObj = {
  companyIcon: "src/assets/svgs/ispanLogo.svg",
  companyName: "iSpan",
  jobPeriod: "2022/09 - 2023/02",
  jobTitle: "FullStack Developer Bootcamp",
  companyDesc: [
    "Learned frontend and backend languages such as JavaScript, PHP, and SQL",
    "Collaborated with a team to build a fully functional e-commerce website",
    "Utilized frontend and backend frameworks such as React and Laravel",
    "Utilized MySQL for database management",
  ],
}
const tyrInfoObj = {
  companyIcon: "src/assets/svgs/tyrLogo.svg",
  companyName: "Tyr Tech",
  jobPeriod: "2023/03 - 2023/06",
  jobTitle: "Frontend Developer",
  companyDesc: [
    "Utilized Vue and Nuxt to create frontend interfaces",
    "Utilized Git Branches for version control",
    "Created and maintained frontend code of website",
    "Collaborated with team members to implement a Line login system",
    "Worked in an agile environment with daily standup meetings"
  ]
}
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
    position: relative;
    width: 100%;
    height: 100%;

    .card {
      position: absolute;
      width: 40%;
      height: 100%;
      box-sizing: border-box;
      list-style-type: none;
      padding-top: var(--panelPaddingTop);
      transform: rotate(-5deg);


      &:nth-child(1) {
        // background-color: #798dc5;
        left: var(--spacing);
        z-index: 1;
      }

      &:nth-child(2) {
        // background-color: green;
        // left: var(--spacing*);
        left: calc(var(--spacing)*2);
        z-index: 2;
      }

      &:nth-child(3) {
        // background-color: red;
        left: calc(var(--spacing)*3);
        z-index: 3;
      }

      &:nth-child(4) {
        // background-color: hotpink;
        left: calc(var(--spacing)*4);
        z-index: 4;
      }

      // next button
      &:nth-child(5) {
        // background-color: hotpink;
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
