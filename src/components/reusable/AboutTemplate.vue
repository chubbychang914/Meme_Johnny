<template>
  <div id="AboutTemplate">
    <div class="header"><slot name="header"></slot></div>
    <div class="content"><slot name="content"></slot></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$themeColor: #E4D00A;

// 排版
#AboutTemplate {
  display: grid;
  grid-template-columns: 100px 1fr;
  height: 100%;
}

// 元件
#AboutTemplate {


  .header {
    background-color: $themeColor;

    .title {
      background-color: black;
    }
  }
}
</style>
