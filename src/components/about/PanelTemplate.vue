<template>
  <div id="PanelTemplate">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#PanelTemplate {
  width: 55%; // 設定中間 panel 的寬高
  height: 60%;
  // background-color: blue; // remove this later

  @include mobile-media{
    width: 90%;
    height: 65%;
    margin-top: 80px; // 扣掉 navbar 的高度
  }
}
</style>