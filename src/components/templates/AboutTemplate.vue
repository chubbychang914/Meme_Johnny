<template>
  <div id="AboutTemplate">
    <div class="header">
      <div class="icon">
        <img :src="iconUrl">
      </div>
      <div class="title">
        <div class="title-text">{{ props.title }}</div>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    default: "title"
  },
  iconUrl: {
    type: String,
    default: ""
  }
})
</script>

<style lang="scss" scoped>
$themeColor: #E4D00A;
$iconDivSize: 100px;
// 排版

#AboutTemplate {
  display: grid;
  grid-template-columns: $iconDivSize 1fr;
  height: 100%;
}

// 元件
#AboutTemplate {
  .header {
    background-color: $themeColor;
    display: grid;
    grid-template-rows: $iconDivSize 1fr;

    // icon box
    .icon {
      // background-color: red;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: contain;
        width: calc($iconDivSize - 20px);
      }
    }

    // title box
    .title {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 20px;

      .title-text {
        // background-color: red;
        font-size: 80px;
        font-family: 'VT323', monospace;
        transform: rotate(180deg);
        writing-mode: vertical-lr;
        text-orientation: mixed;

      }
    }
  }
}
</style>
