<template>
  <div id="MePanel">
    <div class="self-portrait">
      <img :src="meObj.imgSrc" />
    </div>
    <div class="message">
      <div class="title">{{ meObj.titleTxt }}</div>
      <div class="msg">{{ meObj.messageTxt }}</div>
    </div>
  </div>
</template>


<script setup>
const meObj = {
  imgSrc: "src/assets/imgs/home/personBg.png",
  titleTxt: "About Me",
  messageTxt: "Hey there 👋 I'm Johnny, a frontend developer with a passion to create clean and maintainable code. I'm eager to learn from experienced team members and expand my skills and knowledge in web development while contributing to collaborative projects!"
}

</script>


<style lang="scss" scoped>
#MePanel {
  font-family: 'VT323', monospace;
  width: 100%;
  height: 100%;
  background-color: khaki;
  border-radius: 20px;
  border: 5px double black;
  user-select: none;
  // ================================
  display: grid;
  grid-template-columns: 1fr 1fr;


  .self-portrait {
    background-color: red;
    overflow: hidden;
    @extend .center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

  }

  .message {
    display: flex;
    flex-direction: column;
    padding: 20px 50px;

    .title {
      font-size: 50px;
    }

    .msg {
      font-size: 25px;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>