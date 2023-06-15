<template>
  <div id="ProjectsView">
    <nav class="nav">
      <NavbarLayout />
    </nav>
    <div class="content" ref="contentRef">
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
// State ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const contentRef = ref(null)
// Props ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const SelectGoInfoObj = {
  title: "Select Go",
  imgUrl: "src/assets/imgs/projects/SelectGoScreenShot.png",
  description: "Developed a fully functional e-commerce website using React and Larave. Implemented features such as user authentication, shopping cart, and product listing.",
  // skillsUsedList: ["Utilized React Hooks and React Router", "Created RESTful APIs using Laravel", "Set up MySQL database", "Utilized Git and Sourcetree for version control"],
  reverseLayout: true
}

const ArcaneInfoObj = {
  title: "Arcane",
  imgUrl: "src/assets/imgs/projects/ArcaneScreenShot.png",
  description: "Created a website based on the popular Netflix series Arcane.",
  // skillsUsedList: ["Utilized CSS Flexbox for layout design", "Utilized GSAP for animations", "Implemented GSAP Scrolltrigger to achieve on scroll effects and scrolltrigger"],
  reverseLayout: false
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animateBgLoop = () => {
  const backgroundImageWidth = contentRef.value.clientWidth;
  const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  tl.to(contentRef.value, {
    // backgroundPosition: "10000px 0px",
    backgroundPosition: `${backgroundImageWidth * 10}px 0px`,
    duration: 100,
    ease: "linear"
  })

  return tl
}



// onMounted ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  _animateBgLoop().play();
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
    z-index: 999;
  }

  .content {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    padding-bottom: 80px;
    // gap: 50px;
    background-image: url("https://rare-gallery.com/uploads/posts/523062-pixels-pixel.jpg");
    background-size: cover;
    background-attachment: fixed;
  }
}


.change {}

// 元件
#ProjectsView {}
</style>
