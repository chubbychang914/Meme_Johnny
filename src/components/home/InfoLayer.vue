<template>
  <div id="InfoLayer">
    <!-- 左半 -->
    <div class="left-side">
      
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
          <!-- <FooterLayout /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance() // 要引入這包才能使用 gsap 的所有東西

import FooterLayout from "@/components/layout/FooterLayout.vue"

onMounted(() => {

})
</script>

<style lang="scss" scoped>
// 排版
#InfoLayer {
  display: grid;
  grid-template-columns: 5fr 4fr;
  grid-template-areas: "left right";

  .left-side {
    grid-area: left;
    width: 100%; // 5fr
    height: 100vh;
    // background-color: blue;
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
      // background-color: lightcoral;
    }
  }
}

// 元件
#InfoLayer {
  .right-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    // 條整頭像後面的背景正方形
    .square-bg {
      width: 100%;
      height: 90%;
      background-color: cyan;
      // border-radius: 50%;
      background-image: url("src/assets/svgs/bg.svg");
    }

    // 巨大人像
    .img-bg {
      position: absolute;
      bottom: 0;
      height: 90vh;
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


