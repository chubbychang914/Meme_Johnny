<template>
  <div id="AboutView">
    <nav style="background-color: white;"></nav>
    <div class="aboutMeComponent">
      <AboutMe />
    </div>
  </div>
</template>

<script setup>
import AboutMe from "../components/about/AboutMe.vue";
</script>

<style lang="scss" scoped>
// 排版
#AboutView {
  width: 100%;
  height: 100vh;
  // background-color: black;
  display: grid;
  grid-template-rows: 80px 1fr;

  .aboutMeComponent {
    width: 100%;
    height: 100%;
    @extend .center;
  }

}

// 元件
#AboutView {}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
