<template>
  <div id="AboutTemplate">
    <h1 class="title">title</h1>
    <p class="content">content</p>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
$themeColor: #E4D00A;
// 排版

#AboutTemplate {
  display: grid;
  grid-template-columns: 80px auto;
}

// 元件
#AboutTemplate {


  .title {
    background-color: $themeColor;
  }
}
</style>
