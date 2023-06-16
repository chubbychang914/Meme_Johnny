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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  @include mobile-media {
    display: flex;
    flex-direction: column;
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
  .projectPic {
    width: 600px;
    @extend .center;

    @include mobile-media {
      width: 500px;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 15px;
    }
  }

  .projectDesc {
    width: 600px;
    min-width: 500px;
    padding: 20px 30px;
    color: white;
    // background-color: #2b2e63;
    box-sizing: border-box;
    border-radius: 15px;

    @include mobile-media {
      width: 500px;
    }

    .title {
      // font-size: 50px;
      // border: 10px ridge black;
      text-align: center;
    }

    .text {
      font-size: 18px;
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
