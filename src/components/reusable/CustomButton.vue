<template>
  <div id="CustomButton" @click="handleClick">
    <div class="btn-content">{{ btnContent }}</div>
  </div>
</template>

<script setup>
// props =======================================
defineProps({
  btnContent: {
    type: String,
    default: ""
  }
})
// methods =======================================
const emit = defineEmits(['on-click'])

function handleClick() {
  emit('on-click')
}
</script>

<style lang="scss" scoped>
// 排版
#CustomButton {
  display: flex;
}

// 元件
#CustomButton {
  .btn-content {
    display: flex;
    background-color: white;
    border: 1px solid black;
    padding: 10px 20px;
    text-decoration: none;
    font-size: 30px;
    // color: white;
  }
}
</style>
