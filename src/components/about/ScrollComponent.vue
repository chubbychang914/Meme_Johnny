<template>
  <div id="ScrollComponent">
    <div class="carousel-base">
      <transition-group class="carousel-container" tag="div" :name="transitionName">
        <div class="carousel-box" v-for="(item, index) of panelList" :key="item.title"
          v-show="index === showPanel" @touchstart="handleTouchStart" @touchmove="handleTouchMove"
          @touchend="handleTouchEnd">
          <PanelTemplate>
            <MePanel v-if="item.title === 'me'" />
            <SkillsPanel v-if="item.title === 'skills'" />
            <JobPanel :infoObj="ispanInfoObj" v-if="item.title === 'iSpan'" />
            <JobPanel :infoObj="tyrInfoObj" v-if="item.title === 'tyr'" />
          </PanelTemplate>
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

import PanelTemplate from '@/components/about/PanelTemplate.vue';
import MePanel from '@/components/about/panels/MePanel.vue';
import SkillsPanel from '@/components/about/panels/SkillsPanel.vue';
import JobPanel from '@/components/about/panels/JobPanel.vue';

import tyrImg from '@/assets/svgs/tyrLogo.svg';
import ispanImg from '@/assets/svgs/ispanLogo.svg';
// state
let transitionName = ref('')
let showPanel = ref(0)
let startX = ref(null)
let endX = ref(null)

let panelList = [
  { title: "me" },
  { title: "skills" },
  { title: "iSpan" },
  { title: "tyr" }
]
// props for JobPanel ====================
const ispanInfoObj = {
  companyIcon: ispanImg,
  companyName: "iSpan",
  jobPeriod: "2022/09 - 2023/02",
  jobTitle: "FullStack Bootcamp",
  companyDesc: [
    "Learned languages such as JavaScript, PHP, and SQL",
    "Collaborated with a team to build an e-commerce website",
    "Utilized frontend and backend frameworks such as React and Laravel",
    "Utilized MySQL for database management",
  ],
}

const tyrInfoObj = {
  companyIcon: tyrImg,
  companyName: "Tyr Tech",
  jobPeriod: "2023/03 - 2023/06",
  jobTitle: "Frontend Developer",
  companyDesc: [
    "Utilized Vue and Nuxt to create frontend interfaces",
    "Utilized Git Branches for version control",
    "Created and maintained frontend code of website",
    "Collaborated with team members to implement a Line login system",
    "Worked in an agile environment with daily standup meetings"
  ]
}

// functions for left and right slide buttons ====================
const goRight = debounce(() => {
  transitionName.value = 'rightIn'
  if (showPanel.value >= panelList.length - 1) {
    showPanel.value = 0
    return
  }
  showPanel.value++
}, 200)

const goLeft = debounce(() => {
  transitionName.value = 'leftIn'
  if (showPanel.value < 1) {
    showPanel.value = panelList.length - 1
    return
  }
  showPanel.value--
}, 200)

// functions for touch events ====================
const handleTouchStart = (e) => {
  startX.value = e.touches[0].pageX;
  // console.log(`startX: ${startX.value}`);
}

const handleTouchMove = (e) => {
  endX.value = e.touches[0].pageX;
  // console.log(`endX: ${endX.value}`);
}

const handleTouchEnd = (e) => {
  if (!startX.value || !endX.value) {
    startX.value = null;
    endX.value = null;
    return;
  }
  if (startX.value < endX.value) {
    goLeft();
    return;
  }
  goRight();
}
</script>


<style lang="scss" scoped>
#ScrollComponent {
  width: 100vw;
  height: 100vh;

  .carousel-base {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;

    .carousel-box {
      position: absolute;
      width: 100%;
      height: 100%;
      @extend .center;
    }
  }

}

// ================================

.button {
  position: absolute;
  padding: 10px 20px;
  border: 1px solid black;
  background-color: white;

  &:hover {
    background-color: black;
    color: white;
  }

  @include mobile-media {
    display: none;
  }
}

.button.right {
  right: 0;
  top: 50%;
}

.button.left {
  left: 0;
  top: 50%;
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

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>