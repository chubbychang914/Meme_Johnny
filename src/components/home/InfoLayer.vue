<template>
  <div id="PersonInfo">
    <div class="bio-left-panel">
      <!-- nav and links -->
      <div class="btn-box">
        <div class="redirect startLabel">
          <DrawButton btnText="Start" />
        </div>
        <div class="redirect aboutLabel">
          <DrawButton btnText="About" @on-click="btnRedirectAbout" />
        </div>
        <div class="redirect projectsLabel">
          <DrawButton btnText="Projects" @on-click="btnRedirectProjects" />
        </div>
      </div>
    </div>
    <!-- name and job -->
    <div class="bio-right-panel">
      <!-- 實際內容 -->
      <div class="personal-info">
        <div class="name">
          <div class="name-letters" ref="letterJRef">J</div>
          <div class="name-letters">o</div>
          <div class="name-letters">h</div>
          <div class="name-letters">n</div>
          <div class="name-letters">n</div>
          <div class="name-letters">y</div>
        </div>
        <div class="career">Frontend Developer</div>
      </div>
    </div>
    <!-- footer -->
    <!-- <div class="footer">
      <FooterLayout />
    </div> -->
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, onUnmounted } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import DrawButton from "@/components/templates/DrawButton.vue"
import debounce from 'lodash/debounce'
const { proxy: { $gsapPack } } = getCurrentInstance() // 把GSAP包引入個別使用
const router = useRouter()
// 所有的 timeline 陣列
const tlArr = []
// Methods ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 把 flow 自己設定成一個 timeline，再加入不同時間軸的動畫
const btnActivateClickMe = debounce(() => {

}, 400)
const btnRedirectAbout = debounce(() => {
  router.push("/about")
}, 400)
const btnRedirectProjects = debounce(() => {
  router.push("/projects")
}, 400)
// Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const enterPageAnimationFlow = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.add(_animateNavBtns().play())
    .add(_animateNameLettersEnter().play(), "<")
    .add(_animateCareerEnter().play(), "<")
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
const _animateNameLettersEnter = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.from(".name-letters", {
    xPercent: window.innerWidth,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power1.out",
    delay: 0.5,
  })
  return tl
}

// 職稱進場
const _animateCareerEnter = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.from('.career', { y: window.innerHeight, duration: 1, opacity: 0 })
  return tl
}
// btn leave
const _animateButtonsLeave = () => {
  const action = $gsapPack.gsap.to('.redirect', {
    y: -window.innerHeight,
    duration: 1,
    stagger: 0.1,
    paused: true
  })
  return action
}
//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 離開頁面前的動畫
let animationComplete = null // this is the resolve function
const animateRouterLeave = () => {
  return new Promise((resolve) => {
    animationComplete = resolve
    const tl = $gsapPack.gsap.timeline()
    tl.add(_animateButtonsLeave().play())
      .eventCallback("onComplete", () => animationComplete())
  })
}
// Hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  enterPageAnimationFlow().play()
})
onBeforeRouteLeave(async (to, from, next) => {
  await animateRouterLeave()
  next() // must have next to finish the router action
})

onUnmounted(() => {
  //
})
</script>

<style lang="scss" scoped>
// 排版
#PersonInfo {
  position: absolute;
  z-index: 100; // 這樣才能蓋過底層的圖片
  font-family: 'VT323', monospace;
}

// 元件
#PersonInfo {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 3fr; // 調整寬度
  position: absolute;
  top: 0;
  left: 0;

  .bio-left-panel {
    width: 100%;
    height: 100vh;
    // background-color: blue;
    @extend .center;

    .btn-box {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      gap: 100px;
      // outline: auto;
    }

    .redirect {
      // width: 200px; // set button width
    }

    .startLabel {
      font-size: 150px;
      // background-color: blue;
      color: yellow;
    }

    .aboutLabel,
    .projectsLabel {
      font-size: 100px;
      color: white;
    }



    .click-btn {}

    .about-btn {}

    .projects-btn {}

  }

  //  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  .bio-right-panel {
    height: 100vh;

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
        font-size: 20vh;
        color: #FAE900;
        margin-top: 25vh;
        transform: skewX(-10deg) rotate(-10deg);
      }

      .name-letters {
        border: 10px double #FAE900;
        border-radius: 10px;
        background-color: black;

        &:hover {
          background-color: white;
          color: black;
          border: 10px double black;
        }
      }

      .career {
        font-size: 7vh;
        // color: #9999FF;
        color: white;
        transform: skewX(-10deg) rotate(-10deg);
      }
    }

    // phone + email + github link
    .click-info {
      .contact-platform {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 100px;
        height: 100vh;
        background-color: white;
      }
    }
  }

  //  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  .footer {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 100%;
  }
}



.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
