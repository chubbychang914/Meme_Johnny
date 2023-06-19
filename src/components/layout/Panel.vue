<template>
  <div id="Panel">
    <div class="panel" ref="panelRef">
      <CustomButton btn-content="About" bgColor="red" @on-click="redirectUrl('/about')" />
      <div class="aim-btn" @click="redirectUrl('/about')"><font-awesome-icon
          icon="fa-solid fa-power-off" size="2xl" /></div>
      <CustomButton btn-content="Projects" bgColor="blue" @on-click="redirectUrl('/projects')" />
    </div>
  </div>
</template>

<script setup>
import CustomButton from "@/components/templates/CustomButton.vue"
</script>

<style lang="scss" scoped></style>