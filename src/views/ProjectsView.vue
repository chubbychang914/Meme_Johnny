<template>
  <div id="ProjectsView">
    <nav style="background-color: black;">asdfasd</nav>
    <div class="content">
      <ProjectsTemplate />
    </div>
    <footer>
      <FooterLayout />
    </footer>
  </div>
</template>

<script setup>
import ProjectsTemplate from '@/components/projects/ProjectsTemplate.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';
</script>

<style lang="scss" scoped>
// 排版
#ProjectsView {
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 80px;
}

// 元件
#ProjectsView {}
</style>
