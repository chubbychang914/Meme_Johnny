<template>
  <ul id="FooterLayout">
    <li class="contact-box" @click="openExternalPage('https://github.com/chubbychang914')">
      <div class="title">Github</div>
      <div class="icon">
        <img src="@/assets/svgs/icons/githubIcon.svg" alt="Github">
      </div>
    </li>
    <li class="contact-box"
      @click="openExternalPage('https://www.linkedin.com/in/johnny-chang-b6b609204/')">
      <div class="title">LinkedIn</div>
      <div class="icon">
        <img src="@/assets/svgs/icons/linkedInIcon.svg" alt="Github">
      </div>
    </li>
    <li class="contact-box" @click="openExternalPage('mailto:johnny22375@gmail.com')">
      <div class="title">Email</div>
      <div class="icon">
        <img src="@/assets/svgs/icons/gmailIcon.svg" alt="Github">
      </div>
    </li>
    <li class="contact-box" @click="openExternalPage('tel:+886981093375')">
      <div class="title">Phone</div>
      <div class="icon">
        <img src="@/assets/svgs/icons/phoneIcon.svg" alt="Github">
      </div>
    </li>
  </ul>
</template>

<script setup>
// 轉導到其他頁面
const openExternalPage = (url) => {
  window.open(url, '_blank')
}
</script>

<style lang="scss" scoped>
// 排版
#FooterLayout {
  --divHeight: 75px;
  width: 100%;
  height: var(--divHeight);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  list-style-type: none;
}

// 元件
#FooterLayout {
  font-family: 'VT323', monospace;

  .contact-box {
    // outline: auto;
    width: 100%;
    height: var(--divHeight);
    display: flex;
    align-items: center;

    .title {
      font-size: 50px;
      color: white;
    }

    .icon {
      width: 120px;

      img {
        object-fit: contain;
        width: 50%;
      }
    }


    &:nth-child(1) {
      background-color: #333
    }

    &:nth-child(2) {
      background-color: #0077B5
    }

    &:nth-child(3) {
      background-color: #2B2E63
    }

    &:nth-child(4) {
      background-color: #57ADBF
    }

    &:hover {
      // transform: translateY(-5px);
    }

  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
