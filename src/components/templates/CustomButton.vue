<template>
  <div id="CustomButton" @click="handleClick" :style="btnStyles">
    <div class="btn-content">{{ props.btnContent }}</div>
    <!-- <div class="hover-style">
      <img style="object-fit: contain;width: 50px;height: 50px;"
        src="https://freepngimg.com/download/pacman/21623-6-pac-man-ghost-file.png" alt="">
    </div> -->
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
    default: "30px 60px"
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
#CustomButton {
  &:hover {
    background-image: url("src/assets/svgs/bg.svg");
  }
}

// 元件
#CustomButton {
  // width: 100%;
  min-width: 150px;
  background-color: #102336;
  color: white;
  display: flex;
  border-radius: 10px;
  user-select: none;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: centerf;

  &:active {
    color: black;
    background-color: white;
    box-shadow: 0 5px rgba(0, 0, 0, 0.5);
    transform: scale(0.95);
    user-select: none;
  }

  &:hover {
    background-color: white;
    // color: black;
  }

  .btn-content {
    text-decoration: none;
    font-size: 60px;
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
