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
      <div v-show="mobile" class="mobile-nav-icon" @click="toggleMobileNav">
        <font-awesome-icon icon="fa-solid fa-bars" class="fa" v-if="!openMobileNav" />
        <font-awesome-icon icon="fa-solid fa-x" class="fa" v-else />
      </div>
      <transition name="nav-drop">
        <ul v-show="openMobileNav" class="dropdown">
          <li><router-link to="/" class="mobile-link">
              <div class="link-text" @click="openMobileNav.value === false">Home</div>
            </router-link></li>
          <li><router-link to="/about" class="mobile-link">
              <div class="link-text">About</div>
            </router-link></li>
          <li><router-link to="/projects" class="mobile-link">
              <div class="link-text">Projects</div>
            </router-link></li>
        </ul>
      </transition>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const redirectTo = (url) => {
  router.push(url)
}
// set state ====================
const mobile = ref(false)
const openMobileNav = ref(false)

const setMobile = () => {
  if (window.innerWidth < 1024) {
    mobile.value = true
  } else {
    mobile.value = false
    openMobileNav.value = false
  }
}
// functions ====================
const toggleMobileNav = () => {
  openMobileNav.value = !openMobileNav.value
}

// hooks ====================
onMounted(() => {
  setMobile()
  window.addEventListener('resize', setMobile)
})

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
  user-select: none !important;
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

#NavbarLayout {
  .mobile-nav-icon {
    // background-color: black;
    @extend .center;

    .fa {
      color: white;
      font-size: 1.5rem;
      transition: rotate(360deg);
    }
  }

  .dropdown {
    background-color: blue;
    position: absolute;
    top: 80px;
    left: 0;
    width: 100vw !important;
    @extend .center;
    flex-direction: column;

    .link-text {
      box-sizing: border-box;
      background-color: green;
      padding: 20px;
      width: 100vw;

      &:hover {
        background-color: red;
      }
    }
  }

  // make nav-drop transition show one by one with a 1 sec delay between each
  .nav-drop-enter-from {}

  .nav-drop-enter-active {}

  .nav-drop-enter-to {}

  .nav-drop-leave-from {}

  .nav-drop-leave-active {}

  .nav-drop-leave-to {}
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
