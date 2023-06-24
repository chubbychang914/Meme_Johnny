<template>
  <div id="CustomButton" @click="handleClick" :style="btnStyles">
    <div class="btn-content">
      <font-awesome-icon icon="fa-solid fa-angles-right" class="fa" />
      {{ props.btnContent }}
      <font-awesome-icon icon="fa-solid fa-angles-left" class="fa" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
// props ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const props = defineProps({
  btnContent: {
    type: String,
    default: "Custom Btn"
  },
  bgColor: {
    type: String,
    default: "black"
  },
})
// methods ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const emit = defineEmits(['on-click'])

function handleClick() {
  emit('on-click')
}
// hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const btnStyles = computed(() => {
  return {
    backgroundColor: props.bgColor
  }
})
</script>


<style lang="scss" scoped>
// 排版
#CustomButton {}

// 元件
#CustomButton {
  width: 100%;
  height: 100%;
  color: white;
  user-select: none;
  cursor: pointer;
  border-radius: 10px;
  @extend .center;


  .btn-content {
    width: 80%; // 調整方格大小
    height: 70%;
    font-size: 50px;
    // border: 5px double white;
    border-radius: inherit;
    @extend .center;
    gap: 40px;
    transition: ease-in-out 0.2s;

    &:hover {
      background-image: url("src/assets/svgs/bg.svg");
      color: black;
      border: none;
      gap: 10px;
      scale: 1.1;
    }

    .fa {
      color: inherit;
      font-size: 30px;
      @include mobile-media{
        display: none;
      }
    }
  }

  .hover-style {
    display: none;
    position: absolute;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
