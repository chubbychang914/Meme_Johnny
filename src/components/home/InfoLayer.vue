<template>
  <div id="InfoLayer">
    <!-- 左半 -->
    <div class="left-side">
      <div class="left-content">
        <div class="name">
          <div class="icon-left">
            <font-awesome-icon icon="fa-solid fa-caret-left" />
          </div>
          <div class="name-letters">J</div>
          <div class="name-letters">o</div>
          <div class="name-letters">h</div>
          <div class="name-letters">n</div>
          <div class="name-letters">n</div>
          <div class="name-letters">y</div>
          <div class="icon-right">
            <font-awesome-icon icon="fa-solid fa-caret-right" />
          </div>
        </div>
        <div class="job">Frontend Developer</div>
        <div class="menu">
          <div class="btn-group">
            <CustomButton btnContent="Start" />
            <CustomButton btnContent="About" />
            <CustomButton btnContent="Projects" />
          </div>
        </div>
      </div>
    </div>
    <!-- 右半 -->
    <div class="right-side">
      <div class="right-content">
        <!-- 背景 -->
        <div class="square-bg"></div>
        <!-- 圖片 -->
        <img src="@/assets/imgs/home/personBg.png" alt="" class="img-bg">
        <!-- 連結 -->
        <div class="link">
          <FooterLayout />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西

import CustomButton from "@/components/templates/CustomButton.vue"
import DrawButton from "@/components/templates/DrawButton.vue"
import FooterLayout from "@/components/layout/FooterLayout.vue"

onMounted(() => {

})
</script>

<style lang="scss" scoped>
// 排版
#InfoLayer {
  font-family: 'VT323', monospace;
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-areas: "left right";
  overflow: hidden;

  .left-side {
    grid-area: left;
    width: 100%; // 5fr
    height: 100vh;
    // background-color: blue;
    @extend .center;

    .left-content {
      width: 80%;
      min-width: 800px;
      height: 90%;
      display: grid;
      grid-template-rows: 2fr 1fr 4fr;

      .name,
      .job,
      .menu,
      .btn-group {
        // outline: auto;
      }
    }
  }

  .right-side {
    grid-area: right;
    width: 100%; // 4fr
    height: 100vh;
    @extend .center;
    // background-color: white;

    .right-content {
      width: 85%; // 調整內容寬度
      height: 90%;
      min-width: 450px;
      min-height: 600px;
      // background-color: lightcoral;
    }
  }
}

// 元件
#InfoLayer {
  .left-content {
    // transform: rotate(-10deg);

    .name {
      display: flex;
      gap: 10px;
      @extend .center;
      color: #FAE900;

      .icon-left {
        font-size: 150px;
      }

      .icon-right {
        font-size: 150px;
      }

      .name-letters {
        font-size: 250px;
        // border: 10px double #FAE900;
      }
    }

    .job {
      color: white;
      font-size: 60px;
      @extend .center;

    }

    .menu {
      // background-color: green;
      @extend .center;
      color: white;

      h1 {
        font-size: 100px;
      }
    }
  }

  //  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    // 條整頭像後面的背景正方形
    .square-bg {
      width: 700px;
      height: 700px;
      background-color: cyan;
      border-radius: 50%;
      background-image: url("src/assets/svgs/bg.svg");
    }

    // 巨大人像
    .img-bg {
      position: absolute;
      bottom: 0;
      height: 90vh;
      min-height: 600px;
      object-fit: contain;

    }

    .link {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100px;
      background-color: yellow;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


