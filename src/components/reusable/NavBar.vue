<template>
  <nav id="Navbar">
    <button @click="redirectHome">Home Page</button>
    <button @click="redirectAbout">About Page</button>
  </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const redirectHome = () => {
  router.push("./")
}
const redirectAbout = () => {
  router.push("./about")
}
</script>

<style lang="scss" scoped>
// 排版
#Navbar {
  width: 100vw;
  height: 80px;
  background-color: black;
  color: yellow;
}

// 元件
#Navbar {}
</style>
