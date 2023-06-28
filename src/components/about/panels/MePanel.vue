<template>
  <div id="MePanel">
    <div class="self-portrait">
      <img :src="meObj.imgSrc" />
    </div>
    <div class="message">
      <div class="title">
        <font-awesome-icon icon="fa-solid fa-caret-left" />
        {{ meObj.titleTxt }}
        <font-awesome-icon icon="fa-solid fa-caret-right" />
      </div>
      <div class="msg">{{ meObj.messageTxt }}</div>
    </div>
  </div>
</template>


<script setup>
const meObj = {
  imgSrc: "src/assets/imgs/home/personBg.png",
  titleTxt: "About Me",
  messageTxt: "Hey there! I'm Johnny, a frontend developer with a passion to create clean and maintainable code. I'm eager to learn from experienced team members and expand my skills and knowledge while contributing to collaborative projects!"
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
  grid-template-columns: 1fr 1.2fr;




  .self-portrait {
    width: auto;
    height: 100%;
    @extend .center;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

  }

  .message {
    display: flex;
    flex-direction: column;
    padding: 10%;
    gap: 20px;
    overflow: scroll;

    .title {
      font-size: 50px;
      @extend .center;
      gap: 10%;
    }

    .msg {
      font-size: 25px;
      padding-left: 5%;
      @extend .center;
    }
  }

  // RWD ================================
  @include mobile-media {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;

    .self-portrait {
      background-color: white;
      border-radius: 15px;

      img {
        width: 100%;
        height: auto;
        object-fit: contain;
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