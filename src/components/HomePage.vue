<script setup>
import { ref } from 'vue';

</script>

<template lang="pug">
#HomePage
  .left-panel
    .content
  .right-panel
</template>


<style lang="scss" scoped>
// 排版
#HomePage {
  height: 100vh;
  background-color: black;
}

// 元件
#HomePage {
  .left-panel {
    position: absolute;
    left: 0;
    width: 20%;
    height: 0;
    border-top: 100vh solid yellow;
    border-right: 300px solid transparent;
  }

  .right-panel {
    position: absolute;
    right: 0;
    width: 30%;
    height: 0;
    border-bottom: 100vh solid yellow;
    border-left: 300px solid transparent;
  }
}
</style>