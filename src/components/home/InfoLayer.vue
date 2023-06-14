<template>
  <div id="InfoLayer">
    <div class="navbar" ref="navbarRef">
      <NavbarLayout />
    </div>
    <div class="content">
      <div class="name" ref="nameRef">
        <div class="icon-left">
          <font-awesome-icon icon="fa-solid fa-caret-right" />
        </div>
        <div class="name-letters">J</div>
        <div class="name-letters">O</div>
        <div class="name-letters">H</div>
        <div class="name-letters">N</div>
        <div class="name-letters">N</div>
        <div class="name-letters">Y</div>
        <div class="icon-right">
          <font-awesome-icon icon="fa-solid fa-caret-left" />
        </div>
      </div>
      <div class="job">Frontend Developer</div>
    </div>
    <div class="button-box" style="display: flex;">
      <CustomButton @on-click="redirectUrl('/about')" />
      <CustomButton @on-click="redirectUrl('/about')" />
      <CustomButton @on-click="redirectUrl('/projects')" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from "vue";
import { useRouter, onBeforeRouteLeave } from "vue-router";
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
const router = useRouter()

import CustomButton from "@/components/templates/CustomButton.vue"
import NavbarLayout from "@/components/layout/NavbarLayout.vue"
// 跳轉
const redirectUrl = (url) => {
  router.push(url)
}
// set refs 給 gsap 指定，因為每次渲染都會抓新的 element
// if not set in onMounted, the element will be bound differently everytime
const navbarRef = ref(null);
const nameRef = ref(null)
// 設定 action variable
let PageEnterAnimationFlow = null;
let PageLeaveAnimationFlow = null;
let AnimateNavbarEnter = null;
let AnimateNavbarLeave = null;
let AnimateNameEnter = null;

onMounted(() => {
  // 在 mounted 定義動畫，才可以每次進入頁面重新抓 element
  AnimateNavbarEnter = $gsapPack.gsap.from(navbarRef.value, {
    y: -100,
    duration: 0.5,
    ease: "power1.out",
    paused: true
  })
  AnimateNavbarLeave = $gsapPack.gsap.fromTo(navbarRef.value,
    { y: 0 },
    {
      y: -100,
      duration: 0.5,
      paused: true
    })
  AnimateNameEnter = $gsapPack.gsap.from(nameRef.value, {
    y: -window.innerHeight,
    duration: 1,
    paused: true
  })
  // 設定入場 timeline
  PageEnterAnimationFlow = $gsapPack.gsap.timeline({ paused: true })
  PageEnterAnimationFlow
    .add(AnimateNavbarEnter.play())
    .add(AnimateNameEnter.play())
  // 設定離場 timeline
  PageLeaveAnimationFlow = $gsapPack.gsap.timeline({ paused: true })
  PageLeaveAnimationFlow
    .add(AnimateNavbarLeave.play())

  // ►►► 執行
  PageEnterAnimationFlow.play()
})

onBeforeRouteLeave(async (to, from, next) => {
  await PageLeaveAnimationFlow.play()
    .then(() => next())
})


onUnmounted(() => {
  // kill timeline to prevent errors
  PageEnterAnimationFlow?.kill();
  PageLeaveAnimationFlow?.kill();
})


// Router Leave ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// let completeAnimation = null; // this is the resolve function
// const _animateRouterLeave = () => {
//   return new Promise((resolve) => {
//     completeAnimation = resolve
//     const tl = $gsapPack.gsap.timeline()
//     tl.add(PageLeaveAnimationFlow.play())
//       .eventCallback("onComplete", () => completeAnimation())
//   })
// }

// onBeforeRouteLeave(async (to, from, next) => {
//   try {
//     await _animateRouterLeave()
//     next()
//   } catch (error) {
//     console.log(error);
//     next(false)
//   }

// })
</script>

<style lang="scss" scoped>
// 排版
#InfoLayer {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  .navbar {
    position: absolute;
    width: 100%;
  }

  .content {
    // background-color: lightslategray;
  }

  .button-box {
    position: absolute;
    bottom: 100px;
  }
}

// 元件
#InfoLayer {
  font-family: 'VT323', monospace;

  .content {
    .name {
      @extend .center;
      font-size: 18vh;
      color: #FAE900;
      gap: 20px;
      margin-top: 27vh;

      @include pad-media {
        font-size: 10px;
      }

      .name-letters {
        border: 10px double #FAE900;
        border-radius: 10px;
        background-color: black;
        padding: 10px 20px;
        // transform: skewX(-15deg);

        &:hover {
          background-color: white;
          color: black;
          border: 10px double black;
        }
      }
    }

    .job {
      @extend .center;
      font-size: 7vh;
      color: white;
      // transform: skewX(-10deg) rotate(-10deg);
    }
  }

  .button-box {}
}


.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
