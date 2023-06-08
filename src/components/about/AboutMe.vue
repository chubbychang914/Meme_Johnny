<template>
  <div id="AboutMe">
    <ul class="card-box">
      <li class="card">1</li>
      <li class="card">2</li>
      <li class="card">3</li>
    </ul>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
const { proxy: { $gsapPack } } = getCurrentInstance()
const router = useRouter()

onMounted(() => {
})
</script>

<style lang="scss" scoped>
// 排版
#AboutMe {
  width: 100%;
  height: 100%;
  // background-color: yellow;
}

// 元件
#AboutMe {
  .card-box {
    position: relative;
    outline: auto;
    width: 100%;
    height: 100%;
    background-color: cyan;

    .card {
      list-style-type: none;
      position: absolute;
      width: 50%;
      height: 50%;
      border: 10px solid black;

      &:nth-child(3) {
        background-color: blue;
        left: 100px;
        z-index: 1;
      }

      &:nth-child(2) {
        background-color: green;
        left: 200px;
        z-index: 2;
      }

      &:nth-child(1) {
        background-color: red;
        left: 300px;
        z-index: 3;
      }
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
