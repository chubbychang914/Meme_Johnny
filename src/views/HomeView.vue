<template>
  <div id="HomeView">
    <div class="planet-container">
      <div class="planet"></div>
    </div>
    <div class="ship-container"></div>
    <div class="info-layer">
      <InfoLayer />
    </div>
  </div>
</template>

<script setup>
import InfoLayer from "@/components/home/InfoLayer.vue"

</script>

<style lang="scss" scoped>
#HomeView {
  width: 100%;
  height: 100vh;
  overflow: hidden !important;
  background-image: url("src/assets/svgs/space.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  .planet-container {
    width: 100%;
    min-height: 100vh;
    background-color: yellow;
    @extend .center;

    .planet {
      width: 50vh;
      height: 50vh;
      background-color: yellow;
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-image: url("https://img.freepik.com/free-photo/orange-details-moon-texture-concept_23-2149535766.jpg");
      box-shadow:
        inset -1.5em -1.5em 1.5em #000,
        -0.2em -0.2em 0.5em #ccc;
    }
  }

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

    @include mobile-media {
      display: none;
    }
  }

  .info-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    z-index: 100;
    padding-top: 80px; // navbar height
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>