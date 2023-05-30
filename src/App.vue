<script>
// 這裡用 script instead of setup 解決 pug 找不到 RouterView 的問題
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}


</script>

<template lang="pug">
RouterView
</template>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>