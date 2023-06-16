<template>
  <div id="ProjectsTemplate">
    <div class="imgBox" :style="{ order: props.infoObj.reverseLayout ? 2 : 1 }">
      <div class="projectPic">
        <img :src=props.infoObj.imgUrl>
      </div>
    </div>
    <div class="txtBox" :style="{ order: props.infoObj.reverseLayout ? 1 : 2 }">
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
import { ref, watchEffect } from "vue";
import DrawButton from "@/components/templates/DrawButton.vue"

const reverseLayoutVal = ref(false)

const props = defineProps({
  infoObj: {
    type: Object,
    default: () => ({})
  }
})


const screenWidth = ref(window.innerWidth);
// q make this change dynamically not on page reload
watchEffect(() => {
  if (screenWidth.value < 1024) {
    props.infoObj.reverseLayout = false;
  } else {
    reverseLayoutVal.value = props.infoObj.reverseLayout;
  }
});

window.addEventListener('resize', () => {
  screenWidth.value = window.innerWidth;
});
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
