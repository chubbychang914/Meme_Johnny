<template>
  <div id="AboutPage">
    <ul class="cards">
      <li class="card"></li>
      <li class="card"></li>
      <li class="card"></li>
    </ul>
  </div>
</template>

<script setup>
// tools
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
const { proxy: { $gsapPack } } = getCurrentInstance()
const router = useRouter()
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const testStack = () => {
  $gsapPack.gsap.set(".card", { position: "absolute" })
  $gsapPack.gsap.to(".card", {
    yPercent: -100,
    stagger: 0.5,
    scrollTrigger: {
      trigger: '.cards',
      markers: 'true',
      start: 'top middle',
      end: "+=600",
      scrub: true,
      pin: true,
    }
  })


}


onMounted(() => {
  testStack()

})

</script>

<style lang="scss" scoped>
// 排版
#AboutPage {}

// 元件
#AboutPage {
  position: relative;

  .card {
    --spacing: 5rem;
    --zNum: 2;
    position: absolute;
    top: var(--spacing);
    height: calc((100vh - var(--spacing)*4));
    width: 40vw;
    border: 1px solid black;
    margin-bottom: 100px;
    border-radius: 50px;
    background-color: #f5f5f5;
    z-index: var(--zNum);
    @extend .center;

    &:nth-child(1) {
      background-color: blue;
      z-index: calc(var(--zNum)*3);
    }

    &:nth-child(2) {
      top: calc(var(--spacing)*2);
      background-color: green;
      z-index: calc(var(--zNum)*2);
    }

    &:nth-child(3) {
      top: calc(var(--spacing)*3);
      background-color: red;
      z-index: calc(var(--zNum)*1);
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
