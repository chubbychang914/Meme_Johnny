<template>
  <div id="InfoLayer" ref="InfoLayerRef">
    <div class="planet" ref="planetRef"></div>
    <div class="content">
      <div class="name" ref="nameRef">
        <div class="name-letters" ref="jRef">J</div>
        <div class="name-letters" ref="oRef">O</div>
        <div class="name-letters" ref="hRef">H</div>
        <div class="name-letters" ref="nRef">N</div>
        <div class="name-letters" ref="nRef2">N</div>
        <div class="name-letters" ref="yRef">Y</div>
      </div>
      <div class="job" ref="jobRef">Frontend Developer</div>
    </div>
    <!-- <div class="monitor"></div> -->
    <div class="panel" ref="panelRef">
      <Panel v-show="!mobile" />
      <MobilePanel v-show="mobile" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, getCurrentInstance } from "vue";
import { onBeforeRouteLeave } from "vue-router";
import debounce from 'lodash/debounce';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西
// components
import Panel from "@/components/home/Panel.vue";
import MobilePanel from "@/components/home/MobilePanel.vue";

// set mobile ref to false when screenwidth < 768px
const mobile = ref(false);
const setMobile = debounce(() => {
  if (window.innerWidth < 1024) {
    mobile.value = true;
  } else {
    mobile.value = false;
  }
}, 100)
window.addEventListener("resize", setMobile);

// set refs 給 gsap 指定，因為每次渲染都會抓新的 element
// if not set in onMounted, the element will be bound differently everytime
const InfoLayerRef = ref(null);
const nameRef = ref(null);
const planetRef = ref(null);
const jobRef = ref(null);
const jRef = ref(null);
const oRef = ref(null);
const hRef = ref(null);
const nRef = ref(null);
const nRef2 = ref(null);
const yRef = ref(null);
const panelRef = ref(null)
// 設定 action variable
let PageEnterAnimationFlow = null;
let PageLeaveAnimationFlow = null;
let AnimateOpacityLeave = null;
let AnimateNameEnter = null;
let AnimateNameLeave = null;
let AnimateJobEnter = null;
let AnimateJobLeave = null;
let AnimatePlanetEnlarge = null;
let AnimatePanelEnter = null;
let AnimatePanelLeave = null;

onMounted(() => {
  // 在 mounted 定義動畫，才可以每次進入頁面重新抓 element
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
  AnimateNameEnter = $gsapPack.gsap.from([jRef.value, oRef.value, hRef.value, nRef.value, nRef2.value, yRef.value], {
    opacity: 0,
    duration: 1,
    paused: true,
    stagger: 0.2,
    scale: 2
  })
  AnimateNameLeave = $gsapPack.gsap.to(nameRef.value, {
    opacity: 0,
    duration: 1,
    paused: true
  })
  // ==========
  AnimatePlanetEnlarge = $gsapPack.gsap.to(planetRef.value, {
    scale: 3,
    ease: "power2.in",
    duration: 1.5,
    paused: true,
  })
  // ==========
  AnimateOpacityLeave = $gsapPack.gsap.to(InfoLayerRef.value, {
    opacity: 0,
    duration: 1,
    paused: true
  })
  // ==========
  AnimatePanelEnter = $gsapPack.gsap.from(panelRef.value, {
    yPercent: 150,
    duration: 1,
    ease: "slowMo",
    paused: true
  })
  AnimatePanelLeave = $gsapPack.gsap.fromTo(panelRef.value,
    { y: 0 },
    {
      yPercent: 150,
      duration: 1,
      ease: "slowMo",
      paused: true
    })
  // 設定入場 timeline ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  PageEnterAnimationFlow = $gsapPack.gsap.timeline({ paused: true })
  PageEnterAnimationFlow
    .add(AnimatePanelEnter.play(), "<")
    .add(AnimateNameEnter.play(), "-=0.6")
    .add(AnimateJobEnter.play(), "-=0.6")
  // 設定離場 timeline ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  PageLeaveAnimationFlow = $gsapPack.gsap.timeline({ paused: true })
  PageLeaveAnimationFlow
    .add(AnimateNameLeave.play(), "<")
    .add(AnimateJobLeave.play(), "<")
    .add(AnimatePanelLeave.play(), "<")
    .add(AnimatePlanetEnlarge.play(), "<")
    .add(AnimateOpacityLeave.play())

  // ►►► 執行
  PageEnterAnimationFlow.play()
  setMobile()
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
  @extend .center;
  font-family: 'VT323', monospace;
  user-select: none;
  overflow: hidden;

  .navbar {
    position: absolute;
    top: 0;
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
    background-image: url("@/assets/imgs/home/moon-texture.jpg");
    box-shadow:
      inset -1.5em -1.5em 1.5em #000,
      -0.2em -0.2em 0.5em #ccc;
  }

  .content {
    width: 65%;
    height: 100%;
    @extend .center;
    flex-direction: column;

    .name {
      display: flex;
      justify-content: space-around;
      color: #FAE900;
      // background-color: blue;
      width: 100%; // of .content

      .name-letters {
        border: 10px double #FAE900;
        border-radius: 10px;
        background-color: black;
        padding: 10px 20px;
        font-size: 8rem;
        // transform: skewX(-10deg);

        // &:hover {
        //   background-color: white;
        //   color: black;
        //   border: 10px double black;
        // }
      }
    }

    .job {
      @extend .center;
      font-size: 3rem;
      margin-top: 3vh;
      color: white;
    }
  }

  .monitor {
    position: absolute;
    bottom: 15vh;
    width: 300px;
    height: 100px;
    background-color: yellow;
  }

  .panel {
    position: absolute;
    bottom: 0;
    width: 60%;
    height: 15vh;
    // background-color: red;
  }
}


// RWD ====================================
#InfoLayer {
  @include mobile-media {
    .content {
      width: 100%;

      .name-letters {
        // font-size: 4rem !important;
        padding: 0 !important;
        gap: 0 !important;
        border: none !important;
      }

      .job {
        font-size: 2rem;
      }
    }

    .panel {
      width: 90%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
