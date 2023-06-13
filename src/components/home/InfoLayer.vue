<template>
  <div id="InfoLayer">
    <div class="content">
      <div class="name">
        <!-- <div class="icon-left">
          <font-awesome-icon icon="fa-solid fa-caret-left" />
        </div> -->
        <div class="name-letters">J</div>
        <div class="name-letters">O</div>
        <div class="name-letters">H</div>
        <div class="name-letters">N</div>
        <div class="name-letters">N</div>
        <div class="name-letters">Y</div>
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
  height: 100vh;
  @extend .center;

  .content {
    // background-color: lightslategray;
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
      font-size: 200px;
      color: #FAE900;
      gap: 50px;
      // margin-top: 27vh;

      .name-letters {
        border: 10px double #FAE900;
        border-radius: 10px;
        background-color: black;
        padding: 10px 20px;

        &:hover {
          background-color: white;
          color: black;
          border: 10px double black;
        }
      }
    }

    .job {
      @extend .center;
      font-size: 7vh;
      color: white;
      transform: skewX(-10deg) rotate(-10deg);
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
