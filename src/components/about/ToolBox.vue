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

<template>
  <div id="ToolBox">
    <div class="img">
      <img :src="skillItem.imgSrc">
    </div>
    <div class="title">{{ props.skillItem.title }}</div>
  </div>
</template>

<style lang="scss" scoped>
#ToolBox {
  width: 100%;
  height: 100%;
  background-color: black;
  border-radius: 20px;
  color: white;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @include mobile-media {
    grid-template-columns: 1fr;

    .title{
      display: none;
    }
  }

  .img {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 50%;
      height: auto;
      object-fit: contain;
    }
  }

  .title {
    justify-self: self-start;
    align-self: center;
    font-size: 1.5rem;
  }
}
</style>