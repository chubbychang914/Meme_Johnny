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
    position: absolute;
    z-index: 999;
    width: 100%;
    height: 80px;
    // color: #FAE900;
    color: white;
    font-family: 'VT323', monospace;
    display: flex;
    justify-content: center;
    user-select: none;

    &:hover {
      cursor: pointer;
    }

    .navbarContent {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      // padding-right: 30px;
      // gap: 10px;
      background-color: #1B3B5B;
      // background-color: yellow;
      list-style-type: none;
    }

    .link {
      @extend .center;
      width: 100px;
      height: 70px;
      flex-direction: column;
      position: relative;
      border-radius: 12px;

      &:hover,
      &:active {
        background-color: #102336;
      }

      &:hover .icon,
      &:active .icon {
        font-size: 20px;
        transform: translateY(-6px);
      }

      &:hover .text,
      &:active .text {
        transform: scale(1)
      }

      .icon {
        line-height: 75px;
        transition: .5s;
        font-size: 25px;
      }

      .text {
        position: absolute;
        font-size: 20px;
        transition: 0.25s;
        text-transform: uppercase;
        transform: scale(0);
        bottom: 3px;
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
