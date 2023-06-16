<template>
  <div id="InfoLayer">
    <div class="navbar" ref="navbarRef">
      <NavbarLayout />
    </div>
    <div class="planet" ref="planetRef"></div>
    <div class="content">
      <div class="name" ref="nameRef">
        <div class="icon-left">
          <!-- <font-awesome-icon icon="fa-solid fa-caret-right" /> -->
        </div>
        <div class="name-letters" ref="jRef">J</div>
        <div class="name-letters" ref="oRef">O</div>
        <div class="name-letters" ref="hRef">H</div>
        <div class="name-letters" ref="nRef">N</div>
        <div class="name-letters" ref="nRef2">N</div>
        <div class="name-letters" ref="yRef">Y</div>
        <div class="icon-right">
          <!-- <font-awesome-icon icon="fa-solid fa-caret-left" /> -->
        </div>
      </div>
      <div class="job" ref="jobRef">Frontend Developer</div>
    </div>
    <div class="panel">
      <CustomButton @on-click="redirectUrl('/about')" />
      <div class="aim-btn"></div>
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
const nameRef = ref(null);
const planetRef = ref(null);
const jobRef = ref(null);
const jRef = ref(null);
const oRef = ref(null);
const hRef = ref(null);
const nRef = ref(null);
const nRef2 = ref(null);
const yRef = ref(null);
// 設定 action variable
let PageEnterAnimationFlow = null;
let PageLeaveAnimationFlow = null;
let AnimateNavbarEnter = null;
let AnimateNavbarLeave = null;
let AnimateNameEnterLeft = null;
let AnimateNameEnterRight = null;
let AnimateNameLeave = null;
let AnimateJobEnter = null;
let AnimateJobLeave = null;
let AnimatePlanetEnlarge = null;

onMounted(() => {
  // 在 mounted 定義動畫，才可以每次進入頁面重新抓 element
  AnimateNavbarEnter = $gsapPack.gsap.from(navbarRef.value, {
    y: -100,
    duration: 1.2,
    ease: "power1.out",
    paused: true
  })
  AnimateNavbarLeave = $gsapPack.gsap.fromTo(navbarRef.value,
    { y: 0 },
    {
      y: -100,
      duration: 0.5,
      ease: "power1.in",
      paused: true
    })
  // ==========
  AnimateJobEnter = $gsapPack.gsap.from(jobRef.value, {
    opacity: 0,
    duration: 0.5,
    paused: true
  })
  AnimateJobLeave = $gsapPack.gsap.to(jobRef.value, {
    opacity: 0,
    paused: true
  })
  // ==========
  AnimateNameEnterLeft = $gsapPack.gsap.from([jRef.value, oRef.value, hRef.value], {
    xPercent: -1000,
    rotate: -360,
    duration: 1.2,
    paused: true,
    stagger: 0.5,
  })
  AnimateNameEnterRight = $gsapPack.gsap.from([nRef.value, nRef2.value, yRef.value], {
    xPercent: 1000,
    duration: 1.2,
    rotate: 360,
    paused: true,
    stagger: 0.5
  })
  AnimateNameLeave = $gsapPack.gsap.to(nameRef.value, {
    opacity: 0,
    duration: 1,
    paused: true
  })
  // ==========
  AnimatePlanetEnlarge = $gsapPack.gsap.to(planetRef.value, {
    scale: 4.5,
    ease: "power2.in",
    duration: 1.5,
    paused: true,
  })
  // 設定入場 timeline ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  PageEnterAnimationFlow = $gsapPack.gsap.timeline({ paused: true })
  PageEnterAnimationFlow
    .add(AnimateNavbarEnter.play())
    .add(AnimateNameEnterLeft.play(), "<")
    .add(AnimateNameEnterRight.play(), "<")
    .add(AnimateJobEnter.play())
  // 設定離場 timeline ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  PageLeaveAnimationFlow = $gsapPack.gsap.timeline({ paused: true })
  PageLeaveAnimationFlow
    .add(AnimateNavbarLeave.play())
    .add(AnimateNameLeave.play(), "<")
    .add(AnimateJobLeave.play(), "<")
    .add(AnimatePlanetEnlarge.play(), "<")

  // ►►► 執行
  PageEnterAnimationFlow.play()
})

onBeforeRouteLeave(async (to, from, next) => {
  try {
    await PageLeaveAnimationFlow.play()
      .then(() => next())
  } catch (error) {
    console.log(error);
    next(false)
  }
})

onUnmounted(() => {
  // kill timeline to prevent errors
  PageEnterAnimationFlow?.kill();
  PageLeaveAnimationFlow?.kill();
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
    z-index: 999;
  }

  .planet {
    position: absolute;
    top: 40%;
    left: 50%;
    z-index: -1;
    transform: translateX(-50%) scale(0);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-image: url("https://img.freepik.com/free-photo/orange-details-moon-texture-concept_23-2149535766.jpg");
  }

  .content {
    // background-color: lightslategray;
  }

  .button-box {
    position: absolute;
    bottom: 100px;
  }

  .panel {
    width: 50vw;
    min-width: 500px;
    height: 20vh;
    min-height: 150px;
    position: absolute;
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
      gap: 2vw;
      margin-top: 30vh;

      @include pad-media {
        font-size: 10px;
      }

      .name-letters {
        border: 10px double #FAE900;
        border-radius: 10px;
        // background-color: blue;
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
      margin-top: 3vh;
      color: white;
      // transform: skewX(-10deg) rotate(-10deg);
    }

  }

  .panel {
    display: flex;
    justify-content: space-between;
    align-items: center;
    bottom: 0;
    background-color: slategrey;
    border-top-right-radius: 25px;
    border-top-left-radius: 25px;

    .aim-btn {
      width: 100px;
      height: 100px;
      background-color: red;
      border-radius: 50%;
      // background-image: url();
    }
  }
}


.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
