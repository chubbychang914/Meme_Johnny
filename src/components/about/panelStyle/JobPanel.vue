<template>
  <div id="JobPanel">
    <!-- 上半 -->
    <div class="title">
      <div class="companyIcon"></div>
      <div class="companyDesc">
        <h1 class="companyName"></h1>
        <h3 class="jobTitle"></h3>
      </div>
    </div>
    <!-- 下半 -->
    <div class="content">
      <h1>adjfhadkjf</h1>
      <h1>adjfhadkjf</h1>
      <h1>adjfhadkjf</h1>
      <h1>adjfhadkjf</h1>
      <h1>adjfhadkjf</h1>
      <h1>adjfhadkjf</h1>
      <h1>adjfhadkjfaalsdhfa</h1>
      <h1>adjfhadkjfaalsdhfa</h1>
      <h1>adjfhadkjfaalsdhfa</h1>
      <h1>adjfhadkjfaalsdhfa</h1>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  jobInfoObj: {
    type: Object,
    default: () => ({
      companyIcon: "",
      companyDesc: [],
      companyName: "",
      jobTitle: ""
    })
  }
})
</script>

<style lang="scss" scoped>
// 排版
#JobPanel {
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 35vw;
  height: 35vw;
  background-color: lightcoral;

  .title {
    outline: auto;
    display: grid;
    grid-template-columns: 1fr 2fr;

    .companyIcon {
      outline: auto;
    }

    .companyDesc {
      outline: auto;
      display: grid;
      grid-template-rows: 1fr 1fr;

      .companyName {
        outline: auto;
      }

      .jobTitle {
        outline: auto;
      }
    }
  }

  .content {
    outline: auto;
  }
}

// 元件
#JobPanel {
  .content {}
}
</style>
