<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
const redirectUrl = (url) => {
  router.push(url)
}
</script>

<template>
  <div id="MobilePanel" @click="redirectUrl('/about')">
    <font-awesome-icon icon="fa-solid fa-caret-right" class="fa-icon" />
    <h1>Press Start</h1>
  </div>
</template>

<style lang="scss">
#MobilePanel {
  width: 100%;
  height: 10vh;
  background-color: blue;
  border-radius: 10px;
  font-size: 1rem;
  color: white;
  @extend .center;

  .fa-icon {
    font-size: 1.5rem;
    margin-right: 20px;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>