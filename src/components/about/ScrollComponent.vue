<template>
  <div id="ScrollTemplate">
    <div class="container" ref="containerRef">
      <div class="panel" ref="panelRef"></div>
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue';
const { proxy: { $gsapPack } } = getCurrentInstance()

const containerRef = ref(null);
const panelRef = ref(null);

let AboutScrollTimeLine = null;

onMounted(() => {
  AboutScrollTimeLine = $gsapPack.gsap.timeline({
    scrollTrigger: {
      trigger: containerRef.value,
      start: 'top 35%',
      end: 'top 1%',
      scrub: true,
      markers: true,
    }
  })
})
</script>


<style lang="scss">
#ScrollTemplate {
  padding-top: 80px; // might need adjustments here
  // background-color: yellow;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  .container {
    width: 70%;
    background-color: white;
    min-height: calc(100vh - 80px); // might need adjustments here

    // rwd
    @include mobile-media {
      width: 100%;
    }

    .panel{
      width: 100px;
      height: 100px;
      background-color: green;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>