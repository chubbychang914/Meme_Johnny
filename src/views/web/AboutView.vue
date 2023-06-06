<template>
  <div id="AboutView">
    <NavBar />
    <!-- <AboutSummary /> -->
    <!-- <AboutExperience /> -->
    <AboutSkills ref="aboutSkillsRef" />
  </div>
</template>

<script setup>
// tools
import { getCurrentInstance, onMounted, ref } from 'vue';
import { useRouter, onBeforeRouteLeave } from 'vue-router';
const { proxy: { $gsapPack } } = getCurrentInstance()
const router = useRouter()
// components
import NavBar from '@/components/reusable/NavBar.vue'
import AboutSummary from '@/components/about/AboutSummary.vue';
import AboutExperience from '@/components/about/AboutExperience.vue';
import AboutSkills from '@/components/about/AboutSkills.vue'


const aboutSkillsRef = ref(null)
// Animations ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
const _animatePanelsEnter = () => {
  const tl = $gsapPack.gsap.timeline({ paused: true })
  tl.$gsapPack.scrollTrigger({
    trigger: aboutSkillsRef.value,
    markers: true,
    start: "top 35%",
    end: "top 1%",
    scrub: true
  })
}

onMounted(() => {
  _animatePanelsEnter()
})
</script>

<style lang="scss" scoped>
// 排版
#AboutView {
  display: grid;
  grid-template-rows: 80px 1fr;
  height: 100vh;
}

// 元件
#AboutView {}
</style>
