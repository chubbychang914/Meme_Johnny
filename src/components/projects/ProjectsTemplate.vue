<template>
  <div id="ProjectsTemplate">
    <div class="row" :style="{ order: props.infoObj.reverseLayout ? 2 : 1 }">
      <div class="projectPic">
        <img :src=props.infoObj.imgUrl>
      </div>
    </div>
    <div class="row" :style="{ order: props.infoObj.reverseLayout ? 1 : 2 }">
      <div class="projectDesc">
        <h1>{{ props.infoObj.title }}</h1>
        <div class="text"> {{ props.infoObj.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  infoObj: {
    type: Object,
    default: () => ({
      title: "",
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
      description: "Hello world",
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
  .projectPic {
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .projectDesc {}
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
