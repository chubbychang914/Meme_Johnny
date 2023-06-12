<template>
  <div id="ProjectsView">
    <nav class="nav">
      <NavbarLayout />
    </nav>
    <div class="content">
      <ProjectsTemplate />
      <ProjectsTemplate :infoObj="SelectGoInfoObj" />
      <ProjectsTemplate :infoObj="ArcaneInfoObj" />
    </div>
    <footer>
      <FooterLayout />
    </footer>
  </div>
</template >

<script setup >
// import { ref, computed } from 'vue';
import NavbarLayout from '@/components/layout/NavbarLayout.vue'
import ProjectsTemplate from '@/components/projects/ProjectsTemplate.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';

// let showStyle = ref(false)

// const bgStyle = computed(() => {
//   if (!showStyle.value) return {}
//   return {
//     backgroundColor: 'red',
//     color: 'white'
//   }
// })

// const handleClick = () => {
//   showStyle.value = true
// }


const SelectGoInfoObj = {
  title: "Select Go",
  imgUrl: "src/assets/imgs/projects/SelectGoScreenShot.png",
  description: "E-commerce website built with React and LaravelL",
  reverseLayout: true
}

const ArcaneInfoObj = {
  title: "Arcane",
  imgUrl: "src/assets/imgs/projects/ArcaneScreenShot.png",
  description: "Website",
  reverseLayout: false
}

</script>

<style lang="scss" scoped>
// 排版
#ProjectsView {
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 80px;
  background-color: blue;

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
