<template>
  <div id="AboutSummary">
    <AboutTemplate title="Experience" iconUrl="src/assets/imgs/experienceIcon.png">
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
#AboutSummary {}

// 元件
#AboutSummary {
  .content-container {}
}
</style>
