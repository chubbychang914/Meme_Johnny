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
import { ref, onMounted, getCurrentInstance } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance()

import NavbarLayout from '@/components/layout/NavbarLayout.vue'
import ProjectsTemplate from '@/components/projects/ProjectsTemplate.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';
// Props ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const SelectGoInfoObj = {
  title: "Select Go",
  imgUrl: "src/assets/imgs/projects/SelectGoScreenShot.png",
  description: "Developed a fully functional e-commerce website using React for the frontend and Laravel for the backend. Implemented features such as user authentication, shopping cart, and product listing.",
  skillsUsedList: ["Utilized React Hooks and React Router", "Created RESTful APIs using Laravel", "Set up MySQL database", "Utilized Git and Sourcetree for version control"],
  reverseLayout: false
}

const ArcaneInfoObj = {
  title: "Arcane",
  imgUrl: "src/assets/imgs/projects/ArcaneScreenShot.png",
  description: "Created a website based on the popular Netflix series Arcane.",
  skillsUsedList: ["Utilized CSS Flexbox for layout design", "Utilized GSAP for animations", "Implemented GSAP Scrolltrigger to achieve on scroll effects and scrolltrigger"],
  reverseLayout: false
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animateBgLoop = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  tl.to('.content', { backgroundPosition: "10000px 0px", duration: 60, ease: "linear" })
  return tl
}

//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  _animateBgLoop().play()
})
</script>

<style lang="scss" scoped>
// 排版
#ProjectsView {
  height: 100vh;
  display: grid;
  grid-template-rows: 80px auto 80px;

  .nav {
    position: sticky;
    top: 0;
    left: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 50px;
    background-image: url("https://rare-gallery.com/uploads/posts/523062-pixels-pixel.jpg");
    background-size: contain;
    // background-repeat: no-repeat;
    background-attachment: fixed;
    // background-position: center;
    background-color: lightskyblue;
  }
}


.change {}

// 元件
#ProjectsView {}
</style>
