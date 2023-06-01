<script setup>
import HomePageBg from "@/components/home/HomePageBg.vue"
import PersonInfo from "../../components/home/PersonInfo.vue";
</script>

<template>
  <HomePageBg />
  <PersonInfo />
</template>

<style lang="scss" scoped>
// 排版
#HomeView {
  overflow: hidden;

  .home-page-bg {}

  .person-info {
    position: absolute;
  }
}

// 元件
#HomeView {}
</style>
