<template>
  <div id="Navbar">
    <nav class="nav-links">
      <div class="test">
        <router-link to="/">Home</router-link>
      </div>
      <div class="test">
        <router-link to="/about">About</router-link>
      </div>
      <div class="test">
        <router-link to="/projects">Projects</router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue'
import gsapAnimations from '../../tools/animations/gsapAnimations';

const $gsapAnimations = gsapAnimations()

onMounted(() => {
  $gsapAnimations.homeNavEnter()
})
</script>

<style lang="scss" scoped>
// 變數
$themeColor: #E4D00A;

// 排版
#Navbar {}

// 元件
#Navbar {
  position: absolute;
  height: 100vh;
  min-width: 450px;
  width: 25%;
  background-color: $themeColor;

  // &::after {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   right: -500px;
  //   width: 500px;
  //   height: 100vh;
  //   background-color: blue;
  // }

  .nav-links {
    text-decoration: none;
  }

  .test {
    padding: 10px 20px;
    background-color: white;
    margin: 10px;
  }
}
</style>
