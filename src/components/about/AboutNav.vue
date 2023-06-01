<template>
  <div id="AboutNav">
    <h1>This is about nav</h1>
    <button @click="testHome">Home</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const testHome = () => {
  router.push('/')
}

</script>


<style lang="scss" scoped>
// 排版
#AboutNav {
  width: 25%;
  height: 100vh;
  background-color: #E4D00A;
}

// 元件
#AboutNav {}
</style>
