<template>
  <div id="InfoLayer">
    <div class="navbar" ref="navbarRef">
      <NavbarLayout />
    </div>
    <div class="content">
      <div class="name">
        <div class="icon-left">
          <!-- <font-awesome-icon icon="fa-solid fa-caret-left" /> -->
        </div>
        <div class="name-letters">J</div>
        <div class="name-letters">O</div>
        <div class="name-letters">H</div>
        <div class="name-letters">N</div>
        <div class="name-letters">N</div>
        <div class="name-letters">Y</div>
        <div class="icon-right">
          <!-- <font-awesome-icon icon="fa-solid fa-caret-right" /> -->
        </div>
      </div>
      <div class="job">Frontend Developer</div>
    </div>
    <div class="button-box">
      <CustomButton @on-click="redirectUrl('/about')" />
      <!-- <CustomButton @on-click="redirectUrl('/about')" /> -->
      <!-- <CustomButton @on-click="redirectUrl('/projects')" /> -->
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

// State ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const navbarRef = ref(null);

let NavbarAction = null;


const redirectUrl = (url) => {
  router.push(url)
}
// 設定 ref 指定 element, set a gsap action, 在 mounted 的時候才去執行 action, 全部 pause
// mounted hooks
onMounted(() => {
  NavbarAction = $gsapPack.gsap.from(navbarRef.value, { y: -window.innerHeight })
})

onUnmounted(() => {
  NavbarAction?.kill();
})


// Flow ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
let enterPageTimeline = null
const enterPageAnimationFlow = () => {
  enterPageTimeline = $gsapPack.gsap.timeline()
  enterPageTimeline.add(_animateNameEnter())
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
// 名字進場
const _animateNameEnter = () => {
  const action = $gsapPack.gsap.from('.name-letters', {
    scale: 0,
    stagger: 0.2
  })
  return action;
}
// 名字離開
const _animateNameLeave = () => {
  const action = $gsapPack.gsap.to('.name', {
    y: -window.innerHeight,
    duration: 1
  })
  return action;
}


// Router Leave ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
let completeAnimation = null; // this is the resolve function
const _animateRouterLeave = () => {
  return new Promise((resolve) => {
    completeAnimation = resolve
    const tl = $gsapPack.gsap.timeline()
    tl.add(_animateNameLeave())
      .eventCallback("onComplete", () => completeAnimation())
  })
}

onBeforeRouteLeave(async (to, from, next) => {
  try {
    await _animateRouterLeave()
    next()
  } catch (error) {
    console.log(error);
    next(false)
  }

})
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

      .name-letters {
        border: 10px double #FAE900;
        border-radius: 10px;
        background-color: black;
        padding: 10px 20px;

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
      transform: skewX(-10deg) rotate(-10deg);
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
