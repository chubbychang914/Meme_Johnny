<template>
  <ul id="FooterLayout">
    <li class="contact-card">
      <div class="github-card">
        <div class="title">Github</div>
        <img src="" alt="" class="icon">
      </div>
    </li>
    <li class="contact-card">LinkedIn</li>
    <li class="contact-card">Email</li>
    <li class="contact-card">Phone</li>
  </ul>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// 排版
#FooterLayout {
  background-color: blueviolet;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  height: 100%;
  list-style-type: none;
}

// 元件
#FooterLayout {
  .contact-card {}
}
</style>
