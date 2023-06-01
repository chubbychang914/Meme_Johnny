<template>
  <div id="PersonInfo">
    <div class="bio-left-panel">
      <div class="btn-box">
        <CustomButton class="redirect home-btn" btnContent="Click Me" @on-click="btnRedirectHome" />
        <CustomButton class="redirect about-btn" btnContent="About" @on-click="btnRedirectAbout" />
        <CustomButton class="redirect projects-btn" btnContent="Projects"
          @on-click="btnRedirectProjects" />
      </div>
    </div>
    <!--  -->
    <div class="bio-right-panel">
      <!-- 實際內容 -->
      <div class="bio-right-panel-content">
        <div class="personal-info">
          <div class="name">Johnny</div>
          <div class="career">Frontend Developer</div>
        </div>
        <div class="contact-info"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import CustomButton from "@/components/reusable/CustomButton.vue"

const { proxy: { $gsapPack } } = getCurrentInstance() // 把GSAP包引入個別使用
const router = useRouter()
// State ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const isAnimationEnd = ref(false) // 跳轉頁面前動畫是否完成
// Methods ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const btnRedirectHome = () => {
  router.push("/")
}
const btnRedirectAbout = () => {
  router.push("/about")
}
const btnRedirectProjects = () => {
  router.push("/projects")
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 進場動畫
const animateInfoLayer = () => {
  const tl = $gsapPack.gsap.timeline()
  tl.from(".name", { yPercent: 100, opacity: 0, duration: 1, delay: 0.5 })
  tl.from(".redirect", { x: -1000, stagger: 0.1, duration: 1, opacity: 0 }, "<")
}
// 離開頁面前的動畫
let animationEndResolve = null
const animateRouterLeave = () => {
  return new Promise((resolve) => {
    animationEndResolve = resolve

    $gsapPack.gsap.to(".redirect",{
        // x:-window.innerWidth,
        y: -window.innerHeight,
        duration: 1,
        stagger: 0.1,
        onComplete: onAnimationComplete,
      })
  })
}
function onAnimationComplete() {
  isAnimationEnd.value = true
  animationEndResolve()
}

// Hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  animateInfoLayer()
})
onBeforeRouteLeave(async (to, from, next) => {
  await animateRouterLeave()
  next() // must have next to finish the router action
})
</script>

<style lang="scss" scoped>
// 排版
#PersonInfo {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: absolute;
  top: 0;
  left: 0;

  .bio-left-panel {
    width: 50%;
    height: 100vh;
    // background-color: blue;
    display: flex;
    align-items: center;

    .btn-box {
      display: flex;
      flex-direction: column;
      gap: 100px;
    }

    .home-btn {
      // margin-left: 300px;
    }

    .about-btn {
      // margin-left: 200px;
    }

    .projects-btn {
      // margin-left: 100px;
    }

  }

  //  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  .bio-right-panel {
    width: 50%;
    height: 100vh;
    color: white;
    font-family: 'VT323', monospace;

    .bio-right-panel-content {
      height: 100vh;
      display: grid;
      grid-template-rows: 1fr 1fr;
    }

    // name & job description
    .personal-info {
      // background-color: red;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      .name {
        font-size: 300px;
        transform: skewX(-10deg) rotate(-10deg);
        margin-top: 200px;
        margin-left: 100px;
      }

      .career {
        font-size: 50px;
        transform: skewX(-10deg) rotate(-10deg);
        margin-left: 200px;
      }
    }

    // phone + email + github link
    .contact-info {
      // background-color: green;
    }
  }
}

// 元件
#PersonInfo {}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
