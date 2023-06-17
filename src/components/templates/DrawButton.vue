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

const emit = defineEmits(['on-draw-click'])
const handleClick = () => emit('on-draw-click')
</script>

<style lang="scss" scoped>
// 排版
#DrawButton {}

// 元件
#DrawButton {
  user-select: none;
  cursor: pointer;
  .btn-txt {
    width: 300px;
    height: 100px;
    border-radius: 10px;
    border: 5px double yellow;
    position: relative;
    padding: 20px 10px;
    font-size: 60px;
    letter-spacing: 0.1em;
    color: #CED1DA;
    z-index: 888;
    @extend .center;

    &:hover {
      color: black;
      transition: 1s;
      border: 5px double black;
    }

    // this is the box that appears after outline
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: white;
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
      --spanHeight: 3px;
      position: absolute;

      &:nth-child(1),
      &:nth-child(3) {
        width: 100%;
        height: var(--spanHeight);
        background-color: #CED1DA;
      }

      &:nth-child(2),
      &:nth-child(4) {
        width: var(--spanHeight);
        height: 100%;
        background-color: #CED1DA;
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
