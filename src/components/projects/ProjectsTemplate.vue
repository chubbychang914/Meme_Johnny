<template>
  <div id="ProjectsTemplate" :class="{ reverse: props.infoObj.reverseLayout }">
    <div class="row">
      <div class="projectPic">
        <img :src=props.infoObj.imgUrl>
      </div>
    </div>
    <div class="row">
      <div class="projectDesc">
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
      description: "Hello world",
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg",
      reverseLayout: false
    })
  }
})

</script>

<style lang="scss" scoped>
// 排版
#ProjectsTemplate {
  width: 1000px;
  height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .row {
    background-color: blue;
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

.reverse {}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
