<template>
  <div id="HomePage">
    <!-- left side -->
    <div class="left-panel">
      <div class="content-section">
        <RouterLinkBtn url="/" urlName="Home" />
        <RouterLinkBtn url="/about" urlName="About" />
        <RouterLinkBtn url="/projects" urlName="Projects" />
      </div>
      <div class="triangle-section">
        <img class="triangleSvg" src="@/assets/svgs/homeTriangle.svg" alt="triangle" />
      </div>
    </div>
    <!-- right side -->
    <div class="right-panel">
      <div class="triangle-section">
        <img class="triangleSvg" src="@/assets/svgs/homeTriangle.svg" alt="triangle" />
      </div>
      <div class="content-section"></div>
    </div>
    <div class="person-info">
      <!-- <PersonInfo /> -->
    </div>

  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import gsapAnimations from '@/tools/animations/gsapAnimations.js' // 將動畫包引入
const $gsapAnimations = gsapAnimations() // 因為是包js function，執行就可以取得return值
import RouterLinkBtn from '../navbar/RouterLinkBtn.vue';

onMounted(() => {
  $gsapAnimations.onPageLoadAnimation()
})
</script>

<style lang="scss" scoped>
// 變數
$themeColor: #E4D00A;
$contentWidthPercent: 55%;
$triangleWidthPercent: 100% - $contentWidthPercent;

// 排版
#HomePage {
  height: 100vh;
  overflow: hidden;
  background-color: black;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

// 元件
#HomePage {
  .left-panel {
    display: flex;

    .content-section {
      width: $contentWidthPercent;
      height: 100vh;
      background-color: $themeColor;
    }

    .triangle-section {
      position: relative;
      width: $triangleWidthPercent;
      height: 100vh;

      .triangleSvg {
        position: absolute;
        left: -1px;
        height: 100vh;
      }
    }
  }

  .right-panel {
    display: flex;
    justify-content: flex-end;

    .content-section {
      width: $contentWidthPercent;
      height: 100vh;
      background-color: $themeColor;
    }

    .triangle-section {
      position: relative;
      width: $triangleWidthPercent;
      height: 100vh;

      .triangleSvg {
        position: absolute;
        right: -1px;
        height: 100vh;
        transform: rotate(180deg);
      }
    }
  }

  .person-info {
    position: absolute;
    right: 0;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>