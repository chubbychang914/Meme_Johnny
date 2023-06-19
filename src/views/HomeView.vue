<template>
  <div id="HomeView">
    <div class="ship-container"></div>
  </div>
</template>

<style lang="scss" scoped>
#HomeView {
  width: 100%;
  height: 100vh;
  overflow: hidden !important;
  background-image: url("src/assets/svgs/space.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .ship-container {
    width: 100%;
    min-height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("src/assets/svgs/spaceship2.svg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>