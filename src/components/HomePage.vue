<script setup>
import { ref } from 'vue';



const name = ref("Johnny")

let changeName = () => {
  name.value = "Chang"
}
</script>

<template lang="pug">
#HomePage 
  h1 {{ name }}
  button(@click="changeName") {{ "Click Me" }}
</template>


<style lang="scss" scoped>
#HomePage {
  h1 {
    background-color: blue;
    outline: auto;
  }
}

#HomePage {}
</style>