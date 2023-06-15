<template>
  <div id="ProjectsTemplate">
    <div class="row" :style="{ order: props.infoObj.reverseLayout ? 2 : 1 }">
      <div class="projectPic">
        <img :src=props.infoObj.imgUrl>
      </div>
    </div>
    <div class="row" :style="{ order: props.infoObj.reverseLayout ? 1 : 2 }">
      <div class="projectDesc">
        <div class="title">
          <h1>{{ props.infoObj.title }}</h1>
        </div>
        <div class="text">
          <p>{{ props.infoObj.description }}</p>
        </div>
        <!-- optional -->
        <ul class="skills-used">
          <li class="list" v-for="(item, index) in props.infoObj.skillsUsedList" :key="index">
            {{ item }}
          </li>
        </ul>
        <!-- ======== -->
        <div class="btn">
          <DrawButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import DrawButton from "@/components/templates/DrawButton.vue"
import { onMounted } from "vue";

const props = defineProps({
  infoObj: {
    type: Object,
    default: () => ({
      title: "Title",
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
      description: "Hello world",
      skillsUsedList: ["1", "2", "3"],
      reverseLayout: false
    })
  }
})

onMounted(() => {
  if (window.innerWidth <= 1024) {
    props.infoObj.reverseLayout = false;
    console.log("j");
  }
})

</script>

<style lang="scss" scoped>
// 排版
#ProjectsTemplate {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @include mobile-media {
    display: flex;
    flex-direction: column;
  }

  .row {
    outline: auto;
    @extend .center;
  }
}

// 元件
#ProjectsTemplate {
  .projectPic {
    width: 100%;
    @extend .center;

    img {
      width: 30vw;
      min-width: 500px;
      height: auto;
      object-fit: contain;
      border-radius: 15px;

      @include mobile-media {
        // width: 100vw;
      }
    }
  }

  .projectDesc {
    width: 30vw;
    min-width: 400px;
    // padding: 30px;
    color: white;
    // background-color: #57ADBF;
    box-sizing: border-box;

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
