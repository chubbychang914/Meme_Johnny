<template>
  <div id="SkillsPanel">
    <div class="title">Skills & Tools</div>
    <div class="content"></div>
  </div>
</template>


<script setup></script>


<style lang="scss" scoped>
#SkillsPanel {
  font-family: 'VT323', monospace;
  width: 100%;
  height: 100%;
  background-color: khaki;
  border-radius: 20px;
  border: 5px double black;
  user-select: none;
  // ================================
  display: flex;
  flex-direction: column;

  .title {
    height: 20%;
    background-color: red;
    font-size: 50px;
    @extend .center;
  }

  .content {
    height: 80%;
    background-color: blue;
    @extend .center;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>