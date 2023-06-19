<template>
  <div id="InfoLayer">
    <div class="name" ref="nameRef">
      <div class="icon-left" ref="iconLeftRef">
        <font-awesome-icon icon="fa-solid fa-angles-right" />
      </div>
      <div class="name-letters" ref="jRef">J</div>
      <div class="name-letters" ref="oRef">O</div>
      <div class="name-letters" ref="hRef">H</div>
      <div class="name-letters" ref="nRef">N</div>
      <div class="name-letters" ref="nRef2">N</div>
      <div class="name-letters" ref="yRef">Y</div>
      <div class="icon-right" ref="iconRightRef">
        <font-awesome-icon icon="fa-solid fa-angles-left" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
#InfoLayer {
  width: 100%;
  height: calc(100vh - 80px);
  color: yellow;
  @extend .center;
  .name{
    display: flex;
  }
  
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>