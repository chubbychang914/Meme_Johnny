<template>
  <div id="JobPanel">
    <!-- 上半 -->
    <div class="title">
      <div class="companyIcon">
        <img :src=props.jobInfoObj.companyIcon />
      </div>
      <div class="companyDesc">
        <h1 class="companyName">{{ props.jobInfoObj.companyName }}
          <span class="jobPeriod">{{ props.jobInfoObj.jobPeriod }}</span>
        </h1>
        <h3 class="jobTitle">{{ props.jobInfoObj.jobTitle }}</h3>
      </div>
    </div>
    <!-- 下半 -->
    <div class="content">
      <ul class="jobDesc">
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
      companyName: "公司名稱",
      jobPeriod: "1111/11 - 2222/22",
      jobTitle: "職位",
      companyDesc: ["one", "two", "three", "four", "five"],
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
      --descPadding: 15px;
      outline: auto;
      display: grid;
      grid-template-rows: 1fr 1fr;

      .companyName {
        outline: auto;
        display: flex;
        align-items: center;
        padding-left: var(--descPadding);

        .jobPeriod {
          font-size: 15px;
          padding-left: var(--descPadding);
        }
      }

      .jobTitle {
        outline: auto;
        display: flex;
        align-items: center;
        padding-left: var(--descPadding);
      }
    }
  }

  .content {
    outline: auto;
  }
}

// 元件
#JobPanel {
  border: 5px solid black;
  border-radius: 20px;

  .companyIcon {
    @extend .center;

    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
    }
  }

  .content {
    .jobDesc {
      // list-style-type: none;
    }
  }
}


.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
