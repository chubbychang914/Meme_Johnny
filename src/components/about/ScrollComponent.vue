<template>
  <div id="ScrollComponent">
    <div class="carousel-base">
      <transition-group class="carousel-container" tag="div" :name="transitionName">
        <div class="carousel-box" v-for="(img, index) of imgList" :key="index"
          v-show="index === show">
          <img :src="img.src">
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// const props = defineProps({
//   imgList: {
//     type: Array,
//     default: () => []
//   }
// })
let transitionName = ref('right-in')
let show = ref(0)

let imgList = [
  { src: "https://picsum.photos/1000/600?1" },
  { src: "https://picsum.photos/1000/600?2" },
  { src: "https://picsum.photos/1000/600?3" },
  { src: "https://picsum.photos/1000/600?4" },
  { src: "https://picsum.photos/1000/600?5" },
  { src: "https://picsum.photos/1000/600?6" },
  { src: "https://picsum.photos/1000/600?7" },
  { src: "https://picsum.photos/1000/600?8" },
]
</script>


<style lang="scss" scoped>
#ScrollComponent {
  width: 100%;
  height: 100%;
  // padding-top: 80px; // 扣除 navbar 高度

  .carousel-base {
    background-color: yellow;
    position: relative;
    width: 1000px;
    height: 500px;

    .carousel-box {
      position: absolute;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

}

// transition animations ========================
.v-enter-from {}

.v-enter-active {}

.v-enter-to {}

.v-leave-from {}

.v-leave-active {}

.v-leave-to {}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>