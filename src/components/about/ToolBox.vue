<template>
  <div id="ToolBox">
    <img class="img" src="" alt="">
    <div class="title">{{ props.skillItem.title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  skillItem: {
    type: Object,
    default: () => ({
      // title ""
      // imgSrc ""
    })
  }
})
</script>


<style lang="scss" scoped>
#ToolBox {
  width: 100%;
  height: 100%;
  background-color: black;
  color: white;

  display: grid;
  grid-template-columns: 1fr 1.2fr;

  .img {
    background-color: yellow;
  }

  .title {
    justify-self: center;
    align-self: center;
  }
}
</style>