<template>
  <div id="PersonInfo">
    <div class="bio-left-panel">Hello</div>
    <div class="bio-right-panel"></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#PersonInfo {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;

  .bio-left-panel {
    width: 50%;
    height: 100vh;
    // background-color: blue;

  }

  .bio-right-panel {
    width: 50%;
    height: 100vh;
    background-color: blueviolet;
  }
}

// 元件
#PersonInfo {}
</style>
