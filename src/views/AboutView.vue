<template>
  <div id="AboutView">
    <nav style="background-color: white;"></nav>
    <div class="aboutMeComponent">
      <AboutMe />
    </div>
    <footer>
      <FooterLayout />
    </footer>
  </div>
</template>

<script setup>
import AboutMe from "../components/about/AboutMe.vue";
import FooterLayout from "../components/templates/FooterLayout.vue";
</script>

<style lang="scss" scoped>
// 排版
#AboutView {
  width: 100%;
  height: 100vh;
  // background-color: black;
  display: grid;
  grid-template-rows: 80px 1fr 80px;

  .aboutMeComponent {
    width: 100%;
    height: 100%;
    @extend .center;
  }

  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
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
