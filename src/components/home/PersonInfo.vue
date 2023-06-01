<template>
  <div id="PersonInfo">
    <div class="bio-left-panel">
      <div class="btn-box">
        <CustomButton btnContent="Home" @on-click="btnRedirectHome" />
        <CustomButton btnContent="About" @on-click="btnRedirectAbout" />
        <CustomButton btnContent="Projects" @on-click="btnRedirectProjects" />
        <CustomButton />
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
import { getCurrentInstance, onMounted } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 把GSAP包引入個別使用
import { useRouter } from 'vue-router';
const router = useRouter()


import CustomButton from "@/components/reusable/CustomButton.vue"
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
const animateInfoLayer = () => {
  const tl = $gsapPack.gsap.timeline()
  tl.from(".name", { yPercent: 100, opacity: 0, duration: 3 })
}
// Hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  animateInfoLayer()
})
</script>

<style lang="scss" scoped>
// 排版
#PersonInfo {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
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
    justify-content: flex-start;
    align-items: center;

    .btn-box {
      // width: 200px;
    }

  }
//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  .bio-right-panel {
    width: 50%;
    height: 100vh;
    color: white;
    ;
    font-family: 'VT323', monospace;
    // @extend .center;

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
        font-size: 250px;
        transform: skewX(-10deg) rotate(-10deg);
        margin-top: 120px;
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
