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
#SpaceBaseLayer {
  $spaceSvg: "src/assets/svgs/space.svg";
  width: 100%;
  height: 100vh;
  background-image: url($spaceSvg);
  background-size: cover;

  .spaceShip {
    @extend .center;

    img {
      // height: 100vh;
      width: 100%;
      object-fit: contain;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
