<template>
  <div id="BaseLayer">
    <div class="left-panel"></div>
    <div class="right-panel"></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#BaseLayer {
  display: grid;
  grid-template-areas: "left right";
}

// 元件
#BaseLayer {
    width: 100%;
    height: 100vh;
  .right-panel {
    grid-area: right;
  }

  .left-panel {
    grid-area: left;
    background-color: black;
  }
}
</style>


