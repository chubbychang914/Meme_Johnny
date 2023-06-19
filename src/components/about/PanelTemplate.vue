<template>
  <div id="PanelTemplate">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
// 排版

#PanelTemplate {
  width: 500px;
  height: 500px;
  background-color: red;
  @include mobile-media{
    width: 300px;
    height: 300px;
  }
}

// 元件
#PanelTemplate {}
</style>
