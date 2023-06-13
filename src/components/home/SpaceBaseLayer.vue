<template>
  <div id="SpaceBaseLayer">
    <div class="spaceShip">
      <img class="ship-img" src="@/assets/svgs/spaceship.svg">
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#SpaceBaseLayer {
  $spaceSvg: "src/assets/svgs/space.svg";
  width: 100%;
  height: 100vh;
  background-image: url($spaceSvg);
  background-size: cover;
  overflow: hidden;

  .spaceShip {
    @extend .center;

    .ship-img {
      width: auto;
      height: 100vh;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
