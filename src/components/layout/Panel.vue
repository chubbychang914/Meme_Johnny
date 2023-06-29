<template>
  <div id="Panel">
    <CustomButton btn-content="About" bgColor="gray" @on-click="redirectUrl('/about')" />
    <div class="aim-btn" @click="redirectUrl('/about')"><font-awesome-icon
        icon="fa-solid fa-power-off" size="2xl" class="fa" /></div>
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
  gap: 10vw;
  align-items: center;
  transform: perspective(1000px) rotateX(30deg);

  .aim-btn {
    position: absolute;
    top: -15px;
    width: 90px;
    height: 90px;
    z-index: 999;
    // styles
    transform-style: preserve-3d;
    background-color: red;
    @extend .center;
    // perspective: 800px;
    border-radius: 20px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      transform: translate3d(0, 15px, -10px);
      border-radius: 20px;
    }

    &:active {
      scale: 0.95;
    }


    &:hover .fa {
      color: yellow;
    }

    .fa {
      // color: white;
      transition: ease-in-out 0.2s;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>