<template>
  <div id="CustomButton" @click="handleClick" :style="btnStyles">
    <div class="btn-content">{{ props.btnContent }}</div>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from 'vue';
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
  @extend .center;

  &:hover {
    background-image: url("src/assets/svgs/bg.svg");
  }

  .btn-content {
    font-size: 30px;
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
