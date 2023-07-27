<script setup>
import DrawButton from "@/components/templates/DrawButton.vue"

const props = defineProps({
  infoObj: {
    type: Object,
    default: () => ({})
  }
})

const redirectUrl = () => {
  window.open(props.infoObj.url)
}
</script>

<template>
  <div id="ProjectsTemplate">
    <div class="imgBox">
      <div class="projectPic">
        <img :src="props.infoObj.imgUrl" />
      </div>
    </div>
    <div class="txtBox">
      <div class="projectDesc">
        <div class="title">
          <DrawButton :btnText="props.infoObj.title" @on-draw-click=redirectUrl(props.infoObj.url) />
        </div>
        <div class=" text">
          <p>{{ props.infoObj.description }}</p>
        </div>
        <div class="btn">
          <!-- <DrawButton btnText="Visit Site" @on-draw-click=redirectUrl(props.infoObj.url) /> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 排版
#ProjectsTemplate {
  * {
    object-fit: contain;
  }

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @include mobile-media {
    display: flex;
    flex-direction: column;
  }

  &:nth-of-type(even) {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;

    @include mobile-media {
      display: flex;
      flex-direction: column;
    }
  }

  .imgBox {
    @extend .center;
  }

  .txtBox {
    @extend .center;
  }
}

// 元件
#ProjectsTemplate {
  box-sizing: border-box;
  font-family: 'VT323', monospace;

  @include mobile-media {
    padding: 0;

    &:nth-child(1) {
      padding-top: 80px;
    }
  }

  .projectPic {
    width: 40vw;
    @extend .center;

    @include mobile-media {
      width: 90%;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
      border: 1px solid white;
    }
  }

  .projectDesc {
    width: 40vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    color: white;
    // background-color: #2b2e63;
    box-sizing: border-box;
    border-radius: 15px;

    @include mobile-media {
      width: 80%;
      padding: 30px;
    }

    .title {
      font-size: 35px;
      letter-spacing: 10px;
      padding: 10px 20px;
      // background-color: #CED1DA;

      @include mobile-media {
        font-size: 30px;
      }
    }

    .text {
      font-size: 20px;
      text-align: center;

      @include mobile-media {
        font-size: 20px;
      }
    }

    .skills-used {

      .list {
        list-style-type: square;
        word-wrap: break-word;
        font-size: 18px;
      }
    }

    .btn {}
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
