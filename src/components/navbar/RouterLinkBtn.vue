<template>
  <div id="RouterLinkBtn" @click="handleClick">
    <router-link class="router-link" :to="url">{{ urlName }}</router-link>
  </div>
</template>

<script setup>
// props =======================================
defineProps({
  url: {
    type: String,
    default: "/"
  },
  urlName: {
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
#RouterLinkBtn {
  display: flex;
}

// 元件
#RouterLinkBtn {
  .router-link {
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
