<template>
  <div id="ProjectsView" ref="projectsViewRef">
    <div class="content" ref="contentRef">
      <ProjectsTemplate :infoObj="JohnnyInfoObj" reactive />
      <ProjectsTemplate :infoObj="SelectGoInfoObj" />
      <ProjectsTemplate :infoObj="ArcaneInfoObj" />
    </div>
    <FooterLayout />
  </div>
</template >

<script setup >
import { ref, onMounted, getCurrentInstance } from 'vue';
// components
import ProjectsTemplate from '@/components/projects/ProjectsTemplate.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue';
// images need to be imported
import MemeImg from '@/assets/imgs/projects/PortFolioScreenShot.png';
import SelectGoImg from '@/assets/imgs/projects/SelectGoScreenShot.png';
import ArcaneImg from '@/assets/imgs/projects/ArcaneScreenShot.png'
const { proxy: { $gsapPack } } = getCurrentInstance()


// State ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const projectsViewRef = ref(null);
const contentRef = ref(null);

let AnimateProjectsViewBg = null;
// Props ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const JohnnyInfoObj = {
  title: "Portfolio",
  imgUrl: MemeImg,
  description: "Built a personal website using Vue 3 Composition API and GSAP. Implemented features such as scroll-triggered animations and responsive design.",
  reverseLayout: false,
  url: "https://github.com/chubbychang914/Meme_Johnny"
}
const SelectGoInfoObj = {
  title: "Select Go",
  imgUrl: SelectGoImg,
  description: "Developed a fully functional e-commerce website using React and Laravel. Implemented features such as user authentication, shopping cart, and product listing.",
  reverseLayout: true,
  url: "https://github.com/chubbychang914/Select-Go-Final"
}

const ArcaneInfoObj = {
  title: "Arcane",
  imgUrl: ArcaneImg,
  description: "Created a website based on the popular Netflix series Arcane using HTML, CSS and JavaScript. Utilized GSAP to trigger scroll-related animations.",
  reverseLayout: false,
  url: "https://chubbychang914.github.io/Arcane/"
}
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡



// onMounted ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
onMounted(() => {
  // const backgroundImageWidth = aboutViewRef.value.clientWidth;
  AnimateProjectsViewBg = $gsapPack.gsap.timeline({ paused: true, defaults: { repeat: -1 } })
  AnimateProjectsViewBg.to(projectsViewRef.value, {
    duration: 60,
    // backgroundPosition: `${backgroundImageWidth * 100}px 0px`,
    backgroundPosition: "10000px 0px",
    ease: "linear"
  })

  AnimateProjectsViewBg.play()
})

</script>

<style lang="scss" scoped>
// 排版
#ProjectsView {
  width: 100%;
  min-height: 100vh;
  display: grid;
  background-image: url("@/assets/imgs/projects/projectsBg.jpg");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;

  .content {
    overflow: hidden;
  }

  .content {
    padding: calc(80px + 25vh) 5vw 25vh 5vw; // 元件間的距離
    display: flex;
    flex-direction: column;
    gap: 250px;
  }
}

// RWD ========================================
#ProjectsView {
  @include mobile-media {
    .content {
      padding: 50px 0;
      gap: 30px;
    }
  }
}
</style>
