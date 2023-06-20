<template>
  <div id="ScrollComponent">
    <!-- intro -->
    <section class="section section1">
      <div class="container1">
        <div class="box1 scrub" ref="box1Ref">1</div>
      </div>
    </section>
    <!-- footer -->
    <div class="footer">
      <FooterLayOut />
    </div>
  </div>
</template>

<script setup>
import { getCurrentInstance, onMounted, ref } from 'vue';

import FooterLayOut from '@/components/layout/FooterLayOut.vue';
const { proxy: { $gsapPack } } = getCurrentInstance()

const box1Ref = ref(null);

onMounted(() => {
  const tl = $gsapPack.gsap.timeline({
    scrollTrigger: {
      trigger: box1Ref.value,
      markers: true,
      start: '-80', // 從trigger的-80px開始執行
      end: 'bottom',
      scrub: true,
    },
  })

  tl.to(box1Ref.value, {
    position: 'absolute',
    top: 0,
    left: '50%',
    xPercent: '-50',
  }).to(box1Ref.value, {
    position: 'absolute',
    top: '100%',
    yPercent: '-100',
  })
})

</script>

<style lang="scss" scoped>
#ScrollComponent {
  width: 100%;
  min-height: 200vh;
  background-color: darkblue;
  padding-top: 80px;

  // testing
  .section1 {
    display: flex;
    justify-content: center;
    // align-items: center;
    height: 100vh;
    background-color: #fd89b9;
  }

  .container1 {
    position: relative;
    margin-bottom: -100px;
    width: 50%;
    height: 70%;
    background-color: #fff;
    border: 1px solid #000;
  }

  .box1 {
    width: 100px;
    height: 100px;
    background-color: #165e83;
  }

  .section2 {
    display: flex;
    justify-content: center;
    padding: 200px 0;
    background-color: #fd89b9;
    // background-color: #1e2a60;
  }
}
</style>