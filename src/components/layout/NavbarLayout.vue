<template>
  <div id="NavbarLayout">
    <nav class="nav">
      <ul class="bar">
        <li class="link">
          <div class="icon"> <font-awesome-icon icon="fa-solid fa-user-secret" /></div>
          <div class="title">Home</div>
        </li>
        <li class="link">
          <div class="icon"><img src="@/assets/imgs/icons/aboutIcon.png" /></div>
          <div class="title">About</div>
        </li>
        <li class="link">
          <div class="icon"><img src="@/assets/imgs/icons/projectsIcon.png" /></div>
          <div class="title">Projects</div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#NavbarLayout {
  .nav {
    position: relative;
    display: flex;
    justify-content: center;

    .bar {
      width: 80%;
      display: flex;
    }
  }
}

// 元件
#NavbarLayout {
  .nav {
    position: relative;
    width: 100%;
    height: 80px;
    background-color: #1B3B5B;
    color: #FAE900;
    display: flex;
    justify-content: center;

    .bar {
      width: 80%;
      background-color: white;
      list-style-type: none;
      display: flex;
    }

    .link {

      .icon {
        width: 30px;
        height: 30px;

        img {
          width: 100%;
          height: auto;
          object-fit: contain;
        }
      }
    }
  }
}
</style>
