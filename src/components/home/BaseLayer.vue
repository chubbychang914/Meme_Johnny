<template>
  <div id="BaseLayer">
    <div class="left-panel"></div>
    <div class="right-panel">
      <img src="@/assets/svgs/trapezoid.svg" alt="">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#BaseLayer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "left right";
  background-color: black;
}

// 元件
#BaseLayer {
  width: 100%;
  height: 100vh;


  .left-panel {
    grid-area: left;
  }

  .right-panel {
    grid-area: right;

    img {
      width: auto;
      height: 100%;
      object-fit: contain;
      position: absolute;
      right: 0;
      top: 0;
      background-color: black;
    }
  }

}
</style>


