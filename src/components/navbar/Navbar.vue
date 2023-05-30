<template>
  <div id="Navbar">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/projects">Projects</router-link>
    </nav>
  </div>
  <router-view></router-view>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
// 排版
#Navbar {
  background-color: blue;
}

// 元件
#Navbar {}
</style>
