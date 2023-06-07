<template>
  <div id="DrawButton" @click="handleClick">
    <div class="btn-txt">
      {{ props.btnText }}
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  btnText: {
    type: String,
    default: "Button"
  }
})

const emit = defineEmits(['on-click'])
const handleClick = () => emit('on-click')
</script>

<style lang="scss" scoped>
// 排版
#DrawButton {}

// 元件
#DrawButton {
  .btn-txt {
    border-radius: 10px;
    position: relative;
    padding: 20px 10px;
    font-size: 5rem;
    letter-spacing: 0.1em;
    color: white;
    @extend .center;

    // this is the box that appears after outline
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: black;
      transform: scale(0);
      z-index: -1;
      transform-origin: top left;
    }

    &:hover::before {
      transform: scale(1);
      transition: 0.3s;
      transition-delay: 0.3s;
    }

    &::after {
      content: "";
    }

    &:hover span:nth-child(1) {
      transform: scaleX(1);
      transition: 0.2s;
      transition-delay: 0s;
    }

    &:hover span:nth-child(2) {
      transform: scaleX(1);
      transition: 0.2s;
      transition-delay: 0s;
    }

    &:hover span:nth-child(3) {
      transform: scaleX(1);
      transition: 0.2s;
      transition-delay: 0s;
    }

    &:hover span:nth-child(4) {
      transform: scaleX(1);
      transition: 0.2s;
      transition-delay: 0s;
    }


    span {
      position: absolute;

      &:nth-child(1),
      &:nth-child(3) {
        width: 100%;
        height: 2px;
        background-color: #FAE900;
      }

      &:nth-child(2),
      &:nth-child(4) {
        width: 2px;
        height: 100%;
        background-color: #FAE900;
      }

      &:nth-child(1) {
        top: 0;
        left: 0;
        transform-origin: left;
        transform: scaleX(0);
      }

      &:nth-child(2) {
        top: 0;
        right: 0;
        transform-origin: top;
        transform: scaleY(0);
      }

      &:nth-child(3) {
        bottom: 0;
        right: 0;
        transform-origin: right;
        transform: scaleX(0);
      }

      &:nth-child(4) {
        top: 0;
        left: 0;
        transform-origin: bottom;
        transform: scaleY(0);
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
