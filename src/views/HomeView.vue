<script setup>
import InfoLayer from "@/components/home/InfoLayer.vue"
</script>

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

<style lang="scss" scoped>
#HomeView {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("@/assets/svgs/space.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  // this fixes the overflow issue of panel when animation enter
  .planet-container,
  .ship-container,
  .info-layer {
    overflow: hidden;
  }

  .planet-container {
    width: 100%;
    height: 100vh;
    // background-color: yellow;
    @extend .center;

    .planet {
      width: 50vh;
      height: 50vh;
      // background-color: yellow;
      transform: scale(0);
      width: 100px;
      height: 100px;
      border-radius: 50%;
      background-image: url("@/assets/imgs/home/moon-texture.jpg");
      box-shadow:
        inset -1.5em -1.5em 1.5em #000,
        -0.2em -0.2em 0.5em #ccc;
    }
  }

  .ship-container {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("@/assets/svgs/spaceship2.svg");
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
    height: 100vh;
    z-index: 100;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>