<template>
  <div id="ProjectsTemplate">
    <div class="row" :style="{ order: props.infoObj.reverseLayout ? 2 : 1 }">
      <div class="projectPic">
        <img :src=props.infoObj.imgUrl>
      </div>
    </div>
    <div class="row" :style="{ order: props.infoObj.reverseLayout ? 1 : 2 }">
      <div class="projectDesc">
        <div class="title">{{ props.infoObj.title }}</div>
        <div class="text"> {{ props.infoObj.description }}</div>
        <ul class="skills-used">
          <li class="list" v-for="(item, index) in props.infoObj.skillsUsedList" :key="index">
            {{ item }}
          </li>
        </ul>
        <div class="btn">
          <!-- <DrawButton /> -->
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
    default: () => ({
      title: "Title",
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
      description: "Hello world",
      skillsUsedList: ["1", "2", "3"],
      reverseLayout: false
    })
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

  .row {
    // background-color: blue;
    outline: auto;
    @extend .center;
  }
}

// 元件
#ProjectsTemplate {
  --contentWidth: 650px;

  .projectPic {
    width: 100%;
    @extend .center;

    img {
      width: var(--contentWidth);
      height: auto;
      object-fit: contain;
    }
  }

  .projectDesc {
    max-width: var(--contentWidth);
    padding: 30px 50px;
    background-color: white;

    .title {}

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
