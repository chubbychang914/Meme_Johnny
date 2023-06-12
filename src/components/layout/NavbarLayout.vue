<template>
  <div id="NavbarLayout">
    <nav class="nav">
      <ul class="navbarContent">
        <li class="link" @click="redirectTo('/')">
          <span class="icon"><font-awesome-icon icon="fa-solid fa-house" /></span>
          <span class="text">Home</span>
        </li>
        <li class="link" @click="redirectTo('/about')">
          <span class="icon"><font-awesome-icon icon="fa-solid fa-user" /></span>
          <span class="text">About</span>
        </li>
        <li class="link" @click="redirectTo('/projects')">
          <span class="icon"><font-awesome-icon icon="fa-solid fa-layer-group" /></span>
          <span class="text">Projects</span>
        </li>
      </ul>
      <div class="show-bg"></div>
    </nav>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()

const redirectTo = (url) => {
  router.push(url)
}

</script>

<style lang="scss" scoped>
// 排版
#NavbarLayout {}

// 元件
#NavbarLayout {
  .nav {
    position: relative;
    width: 100%;
    height: 80px;
    // background-color: #1B3B5B;
    color: #FAE900;
    display: flex;
    justify-content: center;

    .show-bg {
      position: absolute;
      left: 0;
      width: 80px;
      height: 80px;
      background-color: blue;
      border-radius: 10px;
      transition: 0.5s;
    }

    .navbarContent {
      width: 100%;
      @extend .center;
      gap: 40px;
      background-color: #1B3B5B;
      list-style-type: none;
    }

    .link {
      @extend .center;
      flex-direction: column;
      position: relative;

      &:hover .icon {
        font-size: 20px;
        transform: translateY(-6px);
      }

      &:hover .text {
        transform: scale(1)
      }

      .icon {
        position: relative;
        line-height: 75px;
        transition: .5s;
        font-size: 30px;
      }

      .text {
        position: absolute;
        font-size: 12px;
        color: white;
        transition: 0.25s;
        text-transform: uppercase;
        transform: scale(0);
        bottom: 20px;
      }
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
