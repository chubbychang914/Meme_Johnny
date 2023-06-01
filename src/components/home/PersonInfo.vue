<template>
  <div id="PersonInfo">
    <div class="bio-left-panel">Hello</div>
    <!--  -->
    <div class="bio-right-panel">
      <!-- 實際內容 -->
      <div class="bio-right-panel-content">
        <div class="name">Johnny</div>
        <h3>Frontend Developer</h3>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#PersonInfo {
  width: 100vw;
  height: 100vh;
  // background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;

  .bio-left-panel {
    width: 50%;
    height: 100vh;
    background-color: blue;

  }

  .bio-right-panel {
    width: 50%;
    height: 100vh;
    color: white;

    .name {
      font-size: 200px;
      font-family: 'VT323', monospace;
    }
  }
}

// 元件
#PersonInfo {}
</style>
