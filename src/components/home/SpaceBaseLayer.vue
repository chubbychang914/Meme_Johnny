<template>
  <div id="SpaceBaseLayer">
    <div class="spaceShip">
      <img src="@/assets/svgs/spaceship.svg">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版

#SpaceBaseLayer {
  $spaceSvg: "src/assets/svgs/space.svg";
  width: 100%;
  height: 100vh;
  background-image: url($spaceSvg);

  .spaceShip {
    @extend .center;

    img {
      // width: 100%;
      height: 100vh;
      object-fit: contain;
    }
  }
}

// 元件
#SpaceBaseLayer {}


.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
