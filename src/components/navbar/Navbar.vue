<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template lang="pug">
//- 請填寫功能描述👈
#Navbar
  .row
    RouterLink(to="/") {{"Home"}}
    RouterLink(to="/about ") {{"Skills & Experience"}} 
    RouterLink(to="/projects ") {{"Projects"}} 
  RouterView
</template>

<style lang="scss" scoped>
// 排版
#Navbar {}

// 元件
#Navbar {
  width: 500px;
  height: 100vh;
  background-color: lightyellow;
}
</style>
