<script setup>
import { ref } from 'vue';

</script>

<template lang="pug">
#HomePage
  .right-panel
  .main-content
    .name {{ "Johnny" }}
    .role {{ "Frontend Developer" }}
    .contact-box

</template>


<style lang="scss" scoped>
// 排版
#HomePage {
  height: 100vh;
  background-color: black;
}

// 元件
#HomePage {

  .right-panel {
    position: absolute;
    right: 0;
    width: 30%;
    height: 0;
    border-bottom: 100vh solid yellow;
    border-left: 300px solid transparent;
  }

  .main-content {
    // background-color:blue;
    position: absolute;
    right: 0;
    transform: translateY(50%);

    .name {
      font-size: 100px;
      color: white;
    }

    .role {
      font-size: 50px;
      color: black;
    }

    .contact-box {
      width: 100px;
      height: 100px;
      background-color: white;
    }
  }
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>