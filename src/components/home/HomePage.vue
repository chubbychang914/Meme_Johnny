<template>
  <div id="HomePage">
    <div class="right-panel"></div>
    <div class="main-content">
      <div class="name">Johnny</div>
      <div class="role">Frontend Developer</div>
      <div class="contact-box"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap_enter } from '@/tools/animations/gsapAnimations.js'

onMounted(() => {
  gsap_enter()
})
</script>

<style lang="scss" scoped>
// 排版
#HomePage {
  overflow: hidden;
  height: 100vh;
  background-color: black;
}

// 元件
#HomePage {

  .right-panel {
    position: absolute;
    right: 0;
    width: 25%;
    height: 100vh;
    background-color: #E4D00A;
  }

  .main-content {
    // background-color:blue;
    position: absolute;
    right: 0;
    transform: translateY(50%);

    .name {
      font-size: 100px;
      color: white;
    }

    .role {
      font-size: 50px;
      color: black;
    }

    .contact-box {
      width: 100px;
      height: 100px;
      background-color: white;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>