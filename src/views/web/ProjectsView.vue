<template>
  <div id="ProjectsView">
    <ProjectsContent />
    <ProjectsNav />
  </div>
</template>

<script setup>
import ProjectsNav from '../../components/projects/ProjectsNav.vue';
import ProjectsContent from '../../components/projects/ProjectsContent.vue';
</script>

<style lang="scss" scoped>
// 排版
#ProjectsView {
  display: flex;
}

// 元件
#ProjectsView {}
</style>
