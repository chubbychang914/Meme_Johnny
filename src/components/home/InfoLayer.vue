<template>
  <div id="InfoLayer">
    <div class="content">
      <div class="name">
        <!-- <div class="icon-left">
          <font-awesome-icon icon="fa-solid fa-caret-left" />
        </div> -->
        <div class="name-letters">J</div>
        <div class="name-letters">o</div>
        <div class="name-letters">h</div>
        <div class="name-letters">n</div>
        <div class="name-letters">n</div>
        <div class="name-letters">y</div>
        <!-- <div class="icon-right">
          <font-awesome-icon icon="fa-solid fa-caret-right" />
        </div> -->
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
  width: 100%;
  @extend .center;

  .content {
    width: 50vw;
    height: 100%;
    background-color: lightslategray;
  }

  .button-box {
    position: absolute;
    bottom: 0;
  }
}

// 元件
#InfoLayer {
  font-family: 'VT323', monospace;

  .content {
    .name {
      @extend .center;
      font-size: 250px;
      color: yellow;
    }

    .job {
      @extend .center;
    }
  }

  .button-box {}
}


.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
