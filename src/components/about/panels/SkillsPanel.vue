<script setup>
import ToolBox from '@/components/about/ToolBox.vue';
import vueImg from '@/assets/svgs/skills/vue.svg';
import nuxtImg from '@/assets/svgs/skills/nuxt.svg';
import reactImg from '@/assets/svgs/skills/react.svg';
import laravelImg from '@/assets/svgs/skills/laravel.svg';
import jsImg from '@/assets/svgs/skills/javascript.svg';
import scssImg from '@/assets/svgs/skills/scss.svg';
import mysqlImg from '@/assets/svgs/skills/mysql.svg';
import gsapImg from '@/assets/svgs/skills/gsap.svg';
import gitImg from '@/assets/svgs/skills/git.svg';

const skillList = [
  { title: "Vue", imgSrc: vueImg },
  { title: "Nuxt", imgSrc: nuxtImg },
  { title: "React", imgSrc: reactImg },
  { title: "Laravel", imgSrc: laravelImg },
  { title: "JavaScript", imgSrc: jsImg },
  { title: "SCSS", imgSrc: scssImg },
  { title: "MySql", imgSrc: mysqlImg },
  { title: "GSAP", imgSrc: gsapImg },
  { title: "Git", imgSrc: gitImg }
]
</script>

<template>
  <div id="SkillsPanel">
    <div class="title">Skills & Tools</div>
    <div class="content">
      <ToolBox v-for="skill in skillList" :key="skill.title" :skillItem="skill" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#SkillsPanel {
  font-family: 'VT323', monospace;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  border: 5px double black;
  user-select: none;
  // ================================
  display: flex;
  flex-direction: column;

  .title {
    height: 20%;
    font-size: 50px;
    @extend .center;
    gap: 15px;
  }

  .content {
    height: 80%;
    padding: 30px;
    gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    .tool-box {
      background-color: green;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>