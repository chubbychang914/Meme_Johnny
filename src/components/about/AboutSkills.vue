<template>
  <div id="AboutSkills">
    <AboutTemplate title="Skills" iconUrl="src/assets/imgs/experienceIcon.png">
      <template v-slot:content>
        <div class="content-container"></div>
      </template>
    </AboutTemplate>
  </div>
</template>

<script setup>
import AboutTemplate from '@/components/reusable/AboutTemplate.vue';

</script>

<style lang="scss" scoped>
// 排版
#AboutSkills {}

// 元件
#AboutSkills {
  .content-container {
    width: 100%;
    height: 100%;
    background-color: blue;
  }
}
</style>
