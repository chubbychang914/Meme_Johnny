<template>
  <div id="TyrPanel">
    <!-- 上半 -->
    <div class="title">
      <div class="companyIcon">
        <img :src="props.infoObj.companyIcon" />
      </div>
      <div class="companyDesc">
        <div class="jobInfo">
          <h1 class="companyName">{{ props.infoObj.companyName }}</h1>
          <div class="jobPeriod">{{ props.infoObj.jobPeriod }}</div>
        </div>
        <h3 class="jobTitle">{{ props.infoObj.jobTitle }}</h3>
      </div>
    </div>
    <!-- 下半 -->
    <div class="content">
      <ul class="jobDesc">
        <li v-for="(item, index) in props.infoObj.companyDesc" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>


<script setup>
const props = defineProps({
  infoObj: {
    type: Object,
    default: () => {
      // companyIcon ""
      // companyName ""
      // jobPeriod ""
      // jobTitle ""
      // companyDesc []
    }
  }
})

</script>


<style lang="scss" scoped>
#TyrPanel {
  font-family: 'VT323', monospace;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  border: 5px double black;
  user-select: none;

  display: grid;
  grid-template-rows: 1.5fr 3fr;

  @include mobile-media {
    grid-template-rows: 1fr 4fr;
  }

  .title {
    display: grid;
    grid-template-columns: 1fr 2fr;

    .companyIcon {
      @extend .center;
    }

    .companyDesc {
      display: grid;
      grid-template-rows: 1.5fr 1fr;

      @include mobile-media {
        padding-left: 15px;
      }

      .jobInfo {
        display: flex;
        gap: 20px;

        .companyName {
          display: flex;
          align-items: center;
          font-size: 60px;
          // background-color: blue;

          @include mobile-media {
            font-size: 40px;
            // align-items: flex-end;
          }
        }

        .jobPeriod {
          font-size: 25px;
          // background-color: red;
          display: flex;
          align-items: center;

          @include mobile-media {
            display: none;
          }
        }
      }

      .jobTitle {
        display: flex;
        align-items: flex-start;
        font-size: 25px;
        margin-left: 5px;

      }
    }
  }

  .content {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    // background-color: blue;

    @include mobile-media {
      padding: 30px;
    }

    .jobDesc {
      list-style-type: square;
      line-height: 50px;
      word-wrap: break-word;
      font-size: 23px;

      @include mobile-media {
        line-height: 30px;
      }
    }
  }
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>