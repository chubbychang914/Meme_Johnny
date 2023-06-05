<template>
  <div id="AboutNav">
    <h1>This is about nav</h1>
    <button @click="testHome">Home</button>
    <button @click="testGsap">GSAP</button>
    <button @click="reverse">reverse</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getCurrentInstance, onMounted } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance()
const router = useRouter()

const testHome = () => {
  router.push('/')
}

let moveH1 = null

//  ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const gsapAnimation = () => {
  let tl = $gsapPack.gsap.timeline({ paused: true })
  tl.to("h1", { x: 1000, duration: 2 })
  return tl
}

const _moveNav = () => {
  $gsapPack.gsap.from("#AboutNav", { xPercent: -100, duration: 1 })
}


const testGsap = () => {
  moveH1 = gsapAnimation();
  moveH1.play()
}

const reverse = () => {
  if (moveH1) {
    moveH1.reverse()
  }
}
onMounted(() => {
  _moveNav()
})
</script>


<style lang="scss" scoped>
// 排版
#AboutNav {
  width: 25%;
  height: 100vh;
  background-color: #E4D00A;
}

// 元件
#AboutNav {}
</style>
