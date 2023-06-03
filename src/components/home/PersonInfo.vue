<template>
  <div id="PersonInfo">
    <div class="bio-left-panel">
      <!-- 實際內容 -->
      <div class="btn-box">
        <div class="redirect">
          <CustomButton class="click-btn" btnContent="Click Me" padding="20px"
            @on-click="btnActivateclick" />
        </div>
        <button @click="testReverse">Click me to reverse</button>
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
            <div class="name-letters letterJ">J</div>
            <div class="name-letters letterO">o</div>
            <div class="name-letters letterH">h</div>
            <div class="name-letters letterN1">n</div>
            <div class="name-letters letterN2">n</div>
            <div class="name-letters letterY">y</div>
          </div>
          <div class="career">Frontend Developer</div>
        </div>
        <div class="click-info"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
import CustomButton from "@/components/reusable/CustomButton.vue"
import debounce from 'lodash/debounce'
const { proxy: { $gsapPack } } = getCurrentInstance() // 把GSAP包引入個別使用
const router = useRouter()

// set variable for timelines that need reverse
const twoWayContactTimeline = ref(null)

const testReverse = () => {
  if (twoWayContactTimeline.value) {
    twoWayContactTimeline.value.reverse()
  }
}
// Methods ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 把 flow 自己設定成一個 timeline，再加入不同時間軸的動畫
const btnActivateclick = debounce(() => {
  twoWayContactTimeline.value = clickInfoAnimationFlow()
  twoWayContactTimeline.value.play()
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
    .add(_animateNameLetters().play(), "<")
  return tl;
}
const clickInfoAnimationFlow = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.add(_animateClickMe().play())
  return tl
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

// when click me is pressed
const _animateClickMe = () => {
  let offsetHeight = document.getElementsByClassName("name-letters")[0].offsetHeight
  const tl = $gsapPack.gsap.timeline({ defaults: { x: -offsetHeight * 2, rotate: -70, duration: 1 } })
  tl.to('.name-letters', { stagger: 0.1 })
  return tl
}
//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 離開頁面前的動畫
let animationComplete = null // this is the resolve function
const animateRouterLeave = () => {
  return new Promise((resolve) => {
    animationComplete = resolve
    $gsapPack.gsap.to(".redirect", {
      xPercent: -100,
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
  enterPageAnimationFlow().play()
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

    .click-btn {}

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
        background-color: black;
      }

      .career {
        font-size: 3.5em;
        transform: skewX(-10deg) rotate(-10deg);
      }
    }

    // phone + email + github link
    .click-info {}
  }
}



.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
