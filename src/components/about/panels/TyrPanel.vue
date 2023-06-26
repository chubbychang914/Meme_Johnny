<template>
  <div id="TyrPanel">
    <!-- 上半 -->
    <div class="title">
      <div class="companyIcon">
        <img src="" alt="">
      </div>
      <div class="companyDesc">
        <h1 class="companyName">Tyr
          <span class="jobPeriod">2022.22</span>
        </h1>
        <h3 class="jobTitle">Frontend</h3>
      </div>
    </div>
    <!-- 下半 -->
    <div class="content">
      <!-- <ul class="jobDesc">
        <li v-for="(item, index) in props.jobInfoObj.companyDesc" :key="index">{{ item }}</li>
      </ul> -->
    </div>
  </div>
</template>


<script setup></script>


<style lang="scss" scoped>
#TyrPanel {
  width: 100%;
  height: 100%;
  background-color: yellow;
  border-radius: 20px;

  display: grid;
  grid-template-rows: 1fr 3fr;

  .title {
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-color: red;

    .companyIcon {}

    .companyDesc {
      display: grid;
      grid-template-rows: 1fr 1fr;

      .companyName {
        display: flex;
        align-items: center;

        .jobPeriod {
          font-size: 15px;
        }
      }

      .jobTitle {
        display: flex;
        align-items: flex-start;
      }
    }
  }

  .content {
    display: flex;
    justify-content: center;
    background-color: white;
  }
}
</style>