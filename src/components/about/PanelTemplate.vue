<template>
  <div id="PanelTemplate">
    <slot></slot>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#PanelTemplate {
  width: 55vw; // 設定中間 panel 的寬高
  height: 60vh;
  // background-color: blue; // remove this later

  @include mobile-media {
    width: 90vw;
    height: 70vh;
    // margin-top: 15%;
  }
}
</style>