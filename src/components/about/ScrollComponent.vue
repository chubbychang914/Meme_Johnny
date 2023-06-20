<template>
  <div id="ScrollComponent">
    <div class="testContainer">
      <div class="test" ref="testRef"></div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance();


const testRef = ref(null);

let AnimateTest = null;

onMounted(() => {
  AnimateTest = $gsapPack.gsap.timeline({
    scrollTrigger: {
      trigger: testRef.value,
      start: "top top",
      end: "bottom bottom",
      scrub: true,
      markers: true
    }
  })
  AnimateTest.to(testRef.value, {
    top: 0,
    left: '50 %',
    xPercent: -50,
    position: "absolute"
  })
    .to(testRef.value, {
      top: '50%',
      yPercent: -50,
      position: "absolute"
    })


    AnimateTest.play()
})

</script>

<style lang="scss" scoped>
#ScrollComponent {
  width: 100%;
  min-height: 100vh;
  background-color: darkblue;
  padding-top: 80px;

  // testing
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: yellow;

  .testContainer{
    position: relative;
    margin-bottom: 100px;
    width: 50%;
    height: 30%;
    background-color:white;
    border: 1px solid black;
  }
  .test {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
}
</style>