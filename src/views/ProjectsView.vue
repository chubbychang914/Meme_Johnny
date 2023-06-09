<template>
  <div id="ProjectsView">
    <nav style="background-color: black;">asdfasd</nav>
    <div class="content">
      <ProjectsTemplate />
      <ProjectsTemplate :infoObj="testDataObj" :style="bgStyle" />
      <button @click="handleClick">CLick to changeBg</button>
      <ProjectsTemplate />
      <ProjectsTemplate />
    </div>
    <footer>
      <FooterLayout />
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProjectsTemplate from '@/components/projects/ProjectsTemplate.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';

let showStyle = ref(false)

const bgStyle = computed(() => {
  if (!showStyle.value) return {}
  return {
    backgroundColor: 'red',
    color: 'white'
  }
})

const handleClick = () => {
  showStyle.value = true
}


const testDataObj = {
  title: "Testing title",
  description: "alskdjfhaslkdjfhalkdjhfakjhalkjehf",
  reverseLayout: true
}

</script>

<style lang="scss" scoped>
// 排版
#ProjectsView {
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 80px;

  .content {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}


.change {}

// 元件
#ProjectsView {}
</style>
