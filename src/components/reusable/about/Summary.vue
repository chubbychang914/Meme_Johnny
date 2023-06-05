<template>
  <div id="Summary">
    <AboutTemplate title="Experience" iconUrl="src/assets/imgs/experienceIcon.png">
      <template v-slot:content>
        <div class="content-container"></div>
      </template>
    </AboutTemplate>

  </div>
</template>

<script setup>
import AboutTemplate from './AboutTemplate.vue';

</script>

<style lang="scss" scoped>
// 排版
#Summary {}

// 元件
#Summary {
  .content-container {}
}
</style>
