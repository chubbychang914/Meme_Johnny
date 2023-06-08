<template>
  <div id="AboutMe">
    <ul class="card-box">
      <li class="card">1</li>
      <li class="card">2</li>
      <li class="card">3</li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#AboutMe {}

// 元件
#AboutMe {
  position: relative;

  .card {
    --spacing: 4rem;
    --zIndexNum: 1;
    position: relative;
    width: 30vw;
    height: calc(100vh - var(--spacing)*4);
    border: 5px solid black;
    margin-bottom: 100px;
    @extend .center;

    &:nth-child(1) {
      background-color: blue;
    }

    &:nth-child(2) {
      background-color: red;
    }

    &:nth-child(3) {
      background-color: green;
    }
  }

}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
