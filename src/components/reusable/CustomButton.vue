<template>
  <div id="CustomButton" @click="handleClick" :style="btnStyles">
    <div class="btn-content">{{ props.btnContent }}</div>
    <div class="hover-style">
      <img style="object-fit: contain;width: 50px;height: 50px;"
        src="https://freepngimg.com/download/pacman/21623-6-pac-man-ghost-file.png" alt="">
    </div>
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
  padding: {
    type: String,
    default: "10px 20px"
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
    padding: props.padding,
    backgroundColor: props.bgColor
  }
})
</script>


<style lang="scss" scoped>
// 排版
#CustomButton {}

// 元件
#CustomButton {
  background-color: black;
  color: white;
  display: flex;
  border-radius: 10px;
  @extend .center;

  &:active {
    color: black;
    background-color: white;
    box-shadow: 0 5px rgba(0, 0, 0, 0.5);
    transform: scale(0.95);
  }

  &:hover {
    background-color: white;
    color: black;
  }

  .btn-content {
    text-decoration: none;
    font-size: 30px;
  }

  .hover-style {
    display: none;
    position: absolute;
  }


  &:hover .hover-style {
    display: block;
  }

  &:hover .btn-content {
    z-index: 2;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
