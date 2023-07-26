<template>
  <div id="Panel">
    <CustomButton v-show="!mobile" btn-content="About" bgColor="gray"
      @on-click="redirectUrl('/about')" />
    <!-- <div class="aim-btn" @click="redirectUrl('/about')"><font-awesome-icon
        icon="fa-solid fa-power-off" size="2xl" class="fa" /></div> -->
    <CustomButton v-show="!mobile" btn-content="Projects" bgColor="blue"
      @on-click="redirectUrl('/projects')" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CustomButton from "@/components/templates/CustomButton.vue";

const router = useRouter();
const redirectUrl = (url) => {
  router.push(url)
}


const mobile = ref(false);
</script>

<style lang="scss" scoped>
#Panel {
  width: 100%;
  height: 15vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  transform: perspective(1000px) rotateX(40deg);

  .aim-btn {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 90px;
    height: 90px;
    z-index: 999;
    // styles
    transform-style: preserve-3d;
    @extend .center;
    border-radius: 20px;
    background-color: red;

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
      transition: ease-in-out 0.2s;
    }
  }

}

#Panel {
  @include mobile-media {}
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>