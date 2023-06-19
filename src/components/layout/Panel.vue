<template>
  <div id="Panel">
    <CustomButton btn-content="About" bgColor="red" @on-click="redirectUrl('/about')" />
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
  bottom: 0;
  background-color: slategray;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  border-radius: 25px;
  overflow: hidden;

  .aim-btn {
    position: absolute;
    width: 90px;
    height: 90px;
    background-color: darkgray;
    border-radius: 50%;
    @extend .center;
    color: white;
    box-shadow:
      inset -1em -1em 1em #000,
      -0.2em -0.2em 0.5em #CCC;

    &:active {
      scale: 0.95;
    }
  }
}

.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>