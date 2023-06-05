<template>
  <div id="AboutTemplate">
    <div class="header">
      <div class="icon">icon</div>
      <div class="title">
        <div class="title-text">{{ title }}</div>
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
  }
})
</script>

<style lang="scss" scoped>
$themeColor: #E4D00A;
$iconSize: 100px;

// 排版
#AboutTemplate {
  display: grid;
  grid-template-columns: $iconSize 1fr;
  height: 100%;
}

// 元件
#AboutTemplate {
  .header {
    background-color: $themeColor;
    display: grid;
    grid-template-rows: $iconSize 1fr;

    // icon box
    .icon {
      background-color: red;
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
