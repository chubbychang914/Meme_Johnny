<template>
  <div id="InfoLayer">
    <div class="content">
      <div class="name">
        <div class="icon-left">
          <font-awesome-icon icon="fa-solid fa-caret-left" />
        </div>
        <div class="name-letters">J</div>
        <div class="name-letters">o</div>
        <div class="name-letters">h</div>
        <div class="name-letters">n</div>
        <div class="name-letters">n</div>
        <div class="name-letters">y</div>
        <div class="icon-right">
          <font-awesome-icon icon="fa-solid fa-caret-right" />
        </div>
      </div>
      <div class="job">Frontend Developer</div>
    </div>
    <div class="button-box">
      <CustomButton />
      <CustomButton />
      <CustomButton />
    </div>
  </div>
</template>

<script setup>
import CustomButton from "@/components/templates/CustomButton.vue"


</script>

<style lang="scss" scoped>
// 排版
#InfoLayer {
  @extend .center;

  .content {
    width: 50%;
    height: 100%;
    background-color: white;
  }

  .button-box {
    position: absolute;
    bottom: 0;
  }
}

// 元件
#InfoLayer {}


.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
