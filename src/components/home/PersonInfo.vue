<template>
  <div id="PersonInfo">
    <div class="bio-left-panel">
      <!-- 實際內容 -->
      <div class="btn-box">
        <div class="redirect">
          <CustomButton class="home-btn" btnContent="Contact Me" padding="20px"
            @on-click="btnRedirectHome" />
        </div>
        <div class="redirect">
          <CustomButton class="about-btn" btnContent="About" @on-click="btnRedirectAbout" />
        </div>
        <div class="redirect">
          <CustomButton class="projects-btn" btnContent="Projects" @on-click="btnRedirectProjects" />
        </div>
      </div>
    </div>
    <!-- ---------- -->
    <div class="bio-right-panel">
      <!-- 實際內容 -->
      <div class="bio-right-panel-content">
        <div class="personal-info">
          <div class="name">
            <div class="name-letters">J</div>
            <div class="name-letters">o</div>
            <div class="name-letters">h</div>
            <div class="name-letters">n</div>
            <div class="name-letters">n</div>
            <div class="name-letters">y</div>
          </div>
          <div class="career">Frontend Developer</div>
        </div>
        <div class="contact-info"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import CustomButton from "@/components/reusable/CustomButton.vue"
import debounce from 'lodash/debounce'
import { Bounce } from 'gsap';
const { proxy: { $gsapPack } } = getCurrentInstance() // 把GSAP包引入個別使用
const router = useRouter()

// Methods ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const btnRedirectHome = debounce(() => {
  router.push("/")
}, 400)
const btnRedirectAbout = debounce(() => {
  router.push("/about")
}, 400)
const btnRedirectProjects = debounce(() => {
  router.push("/projects")
}, 400)
// Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
let EnterPageAnimationFlow = null
const _EnterPageAnimationFlow = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.add(_animateNavBtns().play())
    .add(_animateNameLetters().play(), "<")
  return tl;
}

// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 導覽按鈕進場
const _animateNavBtns = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.from(".redirect", {
    x: -window.innerWidth,
    duration: 1,
    opacity: 0,
    stagger: 0.1
  })
  return tl
}
// 名字進場
const _animateNameLetters = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.from(".name-letters", {
    xPercent: window.innerWidth,
    opacity: 0,
    duration: 1.2,
    stagger: 0.1,
    ease: "power.in",
    delay: 0.8
  })
  return tl
}
// 職稱進場

//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 離開頁面前的動畫
let animationComplete = null

const animateRouterLeave = () => {
  return new Promise((resolve) => {
    animationComplete = resolve
    $gsapPack.gsap.to(".redirect", {
      y: -window.innerHeight,
      duration: 1,
      stagger: 0.1,
      onComplete: () => {
        animationComplete()
      },
    })
  })
}
// Hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  EnterPageAnimationFlow = _EnterPageAnimationFlow()
  EnterPageAnimationFlow.play()
})
onBeforeRouteLeave(async (to, from, next) => {
  await animateRouterLeave()
  next() // must have next to finish the router action
})
</script>

<style lang="scss" scoped>
// 排版
#PersonInfo {
  position: absolute;
  z-index: 100; // 這樣才能蓋過底層的圖片
}

// 元件
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

    .redirect {
      width: 200px; // set button width
    }

    .btn-box {
      display: flex;
      flex-direction: column;
      gap: 100px;
    }

    .home-btn {}

    .about-btn {}

    .projects-btn {}

  }

  //  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  .bio-right-panel {
    height: 100vh;
    font-family: 'VT323', monospace;

    .bio-right-panel-content {
      height: 100vh;
      display: grid;
      grid-template-rows: 1fr 1fr;
    }

    // name & job description
    .personal-info {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding-right: 40px;


      .name {
        display: flex;
        gap: 10px;
        font-size: 10em;
        color: white;
        transform: skewX(-10deg) rotate(-10deg);
        margin-top: 1.2em;
      }

      .name-letters {
        border: 10px double white;
        border-radius: 10px;
      }

      .career {
        font-size: 3.5em;
        transform: skewX(-10deg) rotate(-10deg);
      }
    }

    // phone + email + github link
    .contact-info {}
  }
}



.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
