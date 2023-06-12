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
      <ul>
        <li v-for="(item, index) in props.jobInfoObj.companyDesc" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  jobInfoObj: {
    type: Object,
    default: () => ({
      companyIcon: "",
      companyDesc: ["one", "two", "three", "four", "five"],
      companyName: "公司名稱",
      jobTitle: "職位"
    })
  }
})
</script>

<style lang="scss" scoped>
// 排版
#JobPanel {
  display: grid;
  grid-template-rows: 1fr 3fr;
  width: 600px;
  height: 600px;
  background-color: white;

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
