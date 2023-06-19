<template>
  <div id="NavbarLayout">
    <nav class="nav">
      <div class="logo"></div>
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
#NavbarLayout {
  position: fixed;
  width: 100%;
  height: 80px;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100%;
  @extend .center;
  user-select: none;
  background-color: #1B3B5B;
  background-color: yellow;

  @include mobile-media {
    height: auto;
  }
}

// 元件
#NavbarLayout {
  .nav {
    width: 90%;
    // width: 100%;
    height: 80px;
    color: white;
    font-family: 'VT323', monospace;
    display: flex;
    justify-content: space-between;

    // rwd ==========
    @include mobile-media {
      width: 100%;
      height: auto;
    }

    &:hover {
      cursor: pointer;
    }

    .logo {
      width: 100px;
      height: 100%;
      background-color: red;
    }

    .navbarContent {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #1B3B5B;

      // rwd ==========
      @include mobile-media {
        flex-direction: column
      }
    }

    .link {
      @extend .center;
      width: 90px;
      height: 70px;
      flex-direction: column;
      position: relative;
      border-radius: 12px;

      // rwd ==========
      @include mobile-media {
        width: 100%;
      }

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
}</style>
