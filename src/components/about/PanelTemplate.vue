<template>
  <div id="PanelTemplate">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
#PanelTemplate {
  width: 55vw; // 設定中間 panel 的寬高
  height: 60vh;

  @include mobile-media {
    width: 90vw;
    height: 70vh;
  }
}
</style>