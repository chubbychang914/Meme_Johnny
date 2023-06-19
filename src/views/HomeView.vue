<template>
  <div id="HomeView">
    <div class="ship-container">
      <img src="" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
#HomeView {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: url("src/assets/svgs/space.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  .ship-container{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: red;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>