<template>
  <div id="RouterLinkBtn" @click="handleClick">
    <router-link class="router-link" :to="url">
      <div class="urlName">{{ urlName }}</div>
    </router-link>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
// props =======================================
defineProps({
  url: {
    type: String,
    default: "/"
  },
  urlName: {
    type: String,
    default: "Home"
  }
})
// methods =======================================
const emit = defineEmits(['on-click'])

function handleClick() {
  emit('on-click')
}
</script>

<style lang="scss" scoped>
// 變數

// 排版
#RouterLinkBtn {
  display: flex;
}

// 元件
#RouterLinkBtn {
  background-color: white;
  border: 1px solid black;
  padding: 10px 20px;

  .router-link {
    text-decoration: none;
    font-size: 30px;
    color: black;
  }

}
</style>
