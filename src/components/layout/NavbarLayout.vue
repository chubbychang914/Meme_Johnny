<template>
  <div id="NavbarLayout">
    <nav class="nav">
      <div class="logo" @click="redirectTo('/')">
        <img src="@/assets/svgs/JohnnyLogo.svg">
      </div>
      <!-- Web Nav Layout -->
      <ul v-show="!mobile" class="navbarContent">
        <li>
          <router-link to="/" class="link">
            <span class="icon"><font-awesome-icon icon="fa-solid fa-house" /></span>
            <span class="text">Home</span>
          </router-link>
        </li>
        <li>
          <router-link to="/about" class="link">
            <span class="icon"><font-awesome-icon icon="fa-solid fa-user" /></span>
            <span class="text">About</span>
          </router-link>
        </li>
        <li>
          <router-link to="/projects" class="link">
            <span class="icon"><font-awesome-icon icon="fa-solid fa-layer-group" /></span>
            <span class="text">Projects</span>
          </router-link>
        </li>
      </ul>
      <!-- Mobile Nav Layout -->
      <div v-show="mobile" class="mobile-nav-icon">
        <font-awesome-icon icon="fa-solid fa-bars" />
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobile" class="dropdown">
          <li>
            <router-link to="/" class="link">
              <span class="icon"><font-awesome-icon icon="fa-solid fa-house" /></span>
              <span class="text">Home</span>
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="link">
              <span class="icon"><font-awesome-icon icon="fa-solid fa-user" /></span>
              <span class="text">About</span>
            </router-link>
          </li>
          <li>
            <router-link to="/projects" class="link">
              <span class="icon"><font-awesome-icon icon="fa-solid fa-layer-group" /></span>
              <span class="text">Projects</span>
            </router-link>
          </li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const redirectTo = (url) => {
  router.push(url)
}

const mobile = ref(true)

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
  // background-color: yellow;
}

// 元件
#NavbarLayout {
  .nav {
    width: 90%; // 設定navbar 內容寬度
    height: 80px;
    color: white;
    font-family: 'VT323', monospace;
    display: flex;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
    }

    .logo {
      width: 80px;
      height: 80px;
      // background-color: red;
      @extend .center;

      img {
        width: 60%;
        height: auto;
        object-fit: contain;
      }
    }

    .navbarContent {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: #1B3B5B;

    }

    .link {
      @extend .center;
      width: 90px;
      height: 70px;
      flex-direction: column;
      position: relative;
      border-radius: 12px;
      color: white;

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
        font-size: 20px;
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
