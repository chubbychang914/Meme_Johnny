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
          <h1>{{ props.infoObj.title }}</h1>
        </div>
        <div class="text">
          <p>{{ props.infoObj.description }}</p>
        </div>
        <div class="btn">
          <DrawButton />
          <DrawButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DrawButton from "@/components/templates/DrawButton.vue"

const props = defineProps({
  infoObj: {
    type: Object,
    default: () => ({})
  }
})

</script>

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
  padding: 0 10vw;
  font-family: 'VT323', monospace;

  // background-color: blue;
  @include mobile-media {
    padding: 0;
  }

  .projectPic {
    width: 600px;
    @extend .center;

    @include mobile-media {
      width: 100%;

    }

    img {
      width: 100%;
      height: auto;
      border-radius: 15px;
    }
  }

  .projectDesc {
    width: 600px;
    min-width: 500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
    color: white;
    // background-color: #2b2e63;
    box-sizing: border-box;
    border-radius: 15px;

    @include mobile-media {
      width: 500px;
      padding: 30px;
    }

    .title {
      font-size: 40px;
      letter-spacing: 15px;
      background-color: #2b2e63;

      @include mobile-media {
        font-size: 30px;
      }
    }

    .text {
      font-size: 25px;
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
