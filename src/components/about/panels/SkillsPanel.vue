<template>
  <div id="SkillsPanel">
    <div class="title">Skills & Tools</div>
    <div class="content">
      <ToolBox v-for="skill in skillList" :key="skill.title" :skillItem="skill" />
    </div>
  </div>
</template>


<script setup>
import ToolBox from '@/components/about/ToolBox.vue';

const skillList = [
  { title: "Vue", imgSrc: "src/assets/svgs/skills/vue.svg" },
  { title: "Nuxt", imgSrc: "src/assets/svgs/skills/nuxt.svg" },
  { title: "React", imgSrc: "src/assets/svgs/skills/react.svg" },
  { title: "Laravel", imgSrc: "src/assets/svgs/skills/laravel.svg" },
  { title: "JavaScript", imgSrc: "src/assets/svgs/skills/javascript.svg" },
  { title: "SCSS", imgSrc: "src/assets/svgs/skills/scss.svg" },
  { title: "MySql", imgSrc: "src/assets/svgs/skills/mysql.svg" },
  { title: "GSAP", imgSrc: "src/assets/svgs/skills/gsap.svg" },
  { title: "Git", imgSrc: "src/assets/svgs/skills/git.svg" }
]
</script>


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
    // background-color: red;
    font-size: 50px;
    @extend .center;
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