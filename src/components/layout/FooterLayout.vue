<script setup>
// 轉導到其他頁面
const openExternalPage = (url) => {
  window.open(url, '_blank')
}
</script>

<template>
  <ul id="FooterLayout">
    <li class="contact-box" @click="openExternalPage('https://github.com/chubbychang914')">
      <div class="title">Github</div>
      <div class="icon"><font-awesome-icon icon="fa-brands fa-github" /></div>
    </li>
    <li class="contact-box"
      @click="openExternalPage('https://www.linkedin.com/in/johnny-chang-b6b609204/')">
      <div class="title">LinkedIn</div>
      <div class="icon"><font-awesome-icon icon="fa-brands fa-linkedin" /></div>
    </li>
    <li class="contact-box" @click="openExternalPage('mailto:johnny22375@gmail.com')">
      <div class="title">Email</div>
      <div class="icon"><font-awesome-icon icon="fa-solid fa-envelope" /></div>
    </li>
    <li class="contact-box" @click="openExternalPage('tel:+886981093375')">
      <div class="title">Phone</div>
      <div class="icon"><font-awesome-icon icon="fa-solid fa-mobile-screen-button" /></div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
// 排版
#FooterLayout {
  --divHeight: 80px;

  width: 100%;
  height: var(--divHeight);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style-type: none;

  @include mobile-media {
    display: flex;
    flex-direction: column;
  }
}

// 元件
#FooterLayout {
  font-family: 'VT323', monospace;

  .contact-box {
    box-sizing: border-box;
    width: 100%;
    height: var(--divHeight);
    display: flex;
    justify-content: space-around;
    align-items: center;
    letter-spacing: 5px;
    color: white;

    @include mobile-media {
      justify-content: space-between;
      padding: 15px;
    }

    .title {
      font-size: 40px;
    }

    .icon {
      font-size: 35px;
      @extend .center;

      img {
        object-fit: contain;
        width: 100%;
        height: auto;
      }
    }


    &:nth-child(1) {
      background-color: #333
    }

    &:nth-child(2) {
      background-color: #0077B5
    }

    &:nth-child(3) {
      background-color: #57ADBF
    }

    &:nth-child(4) {
      background-color: #2B2E63;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
