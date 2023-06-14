<template>
  <div id="SkillPanel">
    <div class="title">
      Skills
    </div>
    <div class="skills"></div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#SkillPanel {
  width: 500px;
  height: 400px;
  display: grid;
  grid-template-rows: 1fr 3fr;
}

// 元件
#SkillPanel {
  background-color: white;
  border: 5px solid black;
  border-radius: 20px;
  font-family: 'VT323', monospace;

  .title {
    outline: auto;
    @extend .center;
    font-size: 100px;

  }

  .skills {
    outline: auto;
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
