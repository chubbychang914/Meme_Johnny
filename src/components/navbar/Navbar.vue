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

onMounted(() => {
  gsapAnimations.lPanelEnter()
})
</script>

<style lang="scss" scoped>
// 排版
#Navbar {
  background-color: #E4D00A;
  position: absolute;
  height: 100vh;
  width: 25%;
}

// 元件
#Navbar {
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
