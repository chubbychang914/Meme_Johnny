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
  width: {
    type: String,
    default: "100px"
  },
  padding: {
    type: String,
    default: "0 24px"
  }
})
// methods ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const emit = defineEmits(['on-click'])

function handleClick() {
  emit('on-click')
}
// hooks ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const btnStyles = computed(() => {
  return {
    width: props.width,
    padding: props.padding
  }
})
</script>


<style lang="scss" scoped>
// 排版
#CustomButton {}

// 元件
#CustomButton {
  display: flex;
  background-color: white;
  padding: 10px 20px;
  @extend .center;

  &:hover {
    background-color: black;
    color: white;
    // display: flex;
  }

  .btn-content {
    text-decoration: none;
    font-size: 30px;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
