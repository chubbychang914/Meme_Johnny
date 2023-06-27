<template>
  <div id="TyrPanel">
    <!-- 上半 -->
    <div class="title">
      <div class="companyIcon">
        <img :src="tyrInfoObj.companyIcon" />
      </div>
      <div class="companyDesc">
        <h1 class="companyName">{{ tyrInfoObj.companyName }}
          <span class="jobPeriod">{{ tyrInfoObj.jobPeriod }}</span>
        </h1>
        <h3 class="jobTitle">{{ tyrInfoObj.jobTitle }}</h3>
      </div>
    </div>
    <!-- 下半 -->
    <div class="content">
      <ul class="jobDesc">
        <li v-for="(item, index) in tyrInfoObj.companyDesc" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>


<script setup>
const tyrInfoObj = {
  companyIcon: "src/assets/svgs/tyrLogo.svg",
  companyName: "Tyr Tech",
  jobPeriod: "2023/03 - 2023/06",
  jobTitle: "Frontend Developer",
  companyDesc: [
    "Utilized Vue and Nuxt to create frontend interfaces",
    "Utilized Git Branches for version control",
    "Created and maintained frontend code of website",
    "Collaborated with team members to implement a Line login system",
    "Worked in an agile environment with daily standup meetings"
  ]
}
</script>


<style lang="scss" scoped>
#TyrPanel {
  font-family: 'VT323', monospace;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;

  display: grid;
  grid-template-rows: 1.5fr 3fr;

  .title {
    display: grid;
    grid-template-columns: 1fr 2fr;

    .companyIcon {
      @extend .center;
      // background-color: red;
    }

    .companyDesc {
      display: grid;
      grid-template-rows: 1fr 1fr;
      // background-color: green;

      .companyName {
        display: flex;
        align-items: flex-end;
        // background-color: white;

        .jobPeriod {
          font-size: 15px;
          margin-bottom: 10px;
          margin-left: 15px;
        }
      }

      .jobTitle {
        display: flex;
        align-items: center;
      }
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    // @extend .center;
    // background-color: white;

    .jobDesc {
      list-style-type: square;
      line-height: 30px;
      word-wrap: break-word;
      font-size: 18px;
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>