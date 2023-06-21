<template>
  <div id="Panel">
    <CustomButton btn-content="About" bgColor="gray" @on-click="redirectUrl('/about')" />
    <div class="aim-btn" @click="redirectUrl('/about')"><font-awesome-icon
        icon="fa-solid fa-power-off" size="2xl" /></div>
    <CustomButton btn-content="Projects" bgColor="blue" @on-click="redirectUrl('/projects')" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import CustomButton from "@/components/templates/CustomButton.vue";

const router = useRouter();
const redirectUrl = (url) => {
  router.push(url)
}
</script>

<style lang="scss" scoped>
#Panel {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: slategray;
  border-radius: 25px;
  overflow: hidden;
  transform: perspective(1000px) rotateX(30deg);


  .aim-btn {
    position: absolute;
    width: 90px;
    height: 90px;
    // styles
    transform-style: preserve-3d;
    background-color: red;
    @extend .center;
    color: white;
    perspective: 800px;
    transform: rotateX(45deg);

    &:active {
      scale: 0.95;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>