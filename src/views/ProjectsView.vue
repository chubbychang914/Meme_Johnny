<template>
  <div id="ProjectsView">
    <nav class="nav">
      <NavbarLayout />
    </nav>
    <div class="content" ref="contentRef">
      <ProjectsTemplate :infoObj="JohnnyInfoObj" reactive />
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

import NavbarLayout from '@/components/layout/NavbarLayout.vue'
import ProjectsTemplate from '@/components/projects/ProjectsTemplate.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';
const { proxy: { $gsapPack } } = getCurrentInstance()


// State ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const contentRef = ref(null)
// Props ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const JohnnyInfoObj = {
  title: "Johnny",
  imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/009/956/040/small/pixel-art-desert-game-scene-with-pyramid-bridge-palm-tree-cactuses-direction-board-8bit-background-vector.jpg",
  description: "Built a personal website using Vue 3 Composition API and GSAP. Implemented features such as scroll-triggered animations and responsive design.",
  reverseLayout: false,
}
const SelectGoInfoObj = {
  title: "Select Go",
  imgUrl: "src/assets/imgs/projects/SelectGoScreenShot.png",
  description: "Developed a fully functional e-commerce website using React and Laravel. Implemented features such as user authentication, shopping cart, and product listing.",
  reverseLayout: true,
  url: "https://github.com/chubbychang914/Select-Go-Final"
}

const ArcaneInfoObj = {
  title: "Arcane",
  imgUrl: "src/assets/imgs/projects/ArcaneScreenShot.png",
  description: "Created a website based on the popular Netflix series Arcane using HTML, CSS and JavaScript. Utilized GSAP to trigger scroll-related animations.",
  reverseLayout: false,
  url: "https://chubbychang914.github.io/Arcane/"
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animateBgLoop = () => {
  const backgroundImageWidth = contentRef.value.clientWidth;
  const tl = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  tl.to(contentRef.value, {
    backgroundPosition: `${backgroundImageWidth * 100}px 0px`,
    // backgroundPosition: "10000px 0px",
    duration: 1000,
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
    padding: 200px 0;
    display: flex;
    flex-direction: column;
    gap: 250px;
    background-color: black;

    background-image: url("https://c4.wallpaperflare.com/wallpaper/53/889/264/pixel-art-stars-moon-clouds-wallpaper-preview.jpg");
    background-size: cover;
    background-attachment: fixed;
    
    @include mobile-media {
      padding: 50px 0;
      gap: 30px;
    }
  }
}


.change {}

// 元件
#ProjectsView {}
</style>
