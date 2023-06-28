<template>
  <div id="ToolBox">
    <div class="img">
      <img :src="skillItem.imgSrc">
    </div>
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
  grid-template-columns: 1fr 1fr;

  .img {
    background-color: yellow;
    height: 100%;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .title {
    justify-self: center;
    align-self: center;
  }
}
</style>