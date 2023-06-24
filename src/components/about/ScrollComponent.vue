<template>
  <div id="ScrollComponent">
    <div class="carousel-base">
      <transition-group class="carousel-container" tag="div" :name="transitionName">
        <div class="carousel-box" v-for="(img, index) of imgList" :key="index"
          v-show="index === showPanel">
          <img :src="img.src">
        </div>
      </transition-group>
      <button class="button right" @click="goRight">Go Right</button>
      <button class="button left" @click="goLeft">Go Left</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import debounce from 'lodash/debounce';
// const props = defineProps({
//   imgList: {
//     type: Array,
//     default: () => []
//   }
// })
let transitionName = ref('')
let showPanel = ref(0)

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


const goRight = debounce(() => {
  transitionName.value = 'rightIn'
  if (showPanel.value >= imgList.length - 1) {
    showPanel.value = 0
    return
  }
  showPanel.value++
}, 300)

const goLeft = debounce(() => {
  transitionName.value = 'leftIn'
  if (showPanel.value < 1) {
    showPanel.value = imgList.length - 1
    return
  }
  showPanel.value--
})
</script>


<style lang="scss" scoped>
#ScrollComponent {
  .carousel-base {
    position: relative;
    width: 1000px;
    height: 500px;
    border: 10px solid black;
    background-color: yellow;
    overflow: hidden;


    .carousel-box {
      position: absolute;
      width: 100%;
      height: 100%;
      @extend .center;

      img {
        width: auto;
        height: 100%;
        object-fit: contain;
      }
    }
  }

}

// transition animations ========================
.rightIn-enter-from {
  left: 100%; // 從左邊的 100% 進來
}

.rightIn-enter-active,
.rightIn-leave-active {
  transition: left 0.7s ease-in-out;
}

.rightIn-enter-to,
.rightIn-leave-from {
  left: 0%;
}

.rightIn-leave-to {
  left: -100%;
}

// ================================
.leftIn-enter-from {
  left: -100%; // 從左邊的 100% 進來
}

.leftIn-enter-active,
.leftIn-leave-active {
  transition: left 0.7s ease-in-out;
}

.leftIn-enter-to,
.leftIn-leave-from {
  left: 0%;
}

.leftIn-leave-to {
  left: 100%;
}

// ================================
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  position: absolute;
  padding: 10px 20px;
  border: 1px solid black;
  background-color: white;

  &:hover {
    background-color: black;
    color: white;
  }
}

.button.right {
  right: 0;
}

.button.left {
  left: 0;
}
</style>