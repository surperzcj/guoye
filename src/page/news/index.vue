<!--
 * @Author: your name
 * @Date: 2020-07-06 10:11:02
 * @LastEditTime: 2020-07-06 10:15:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bbb\guoye\src\page\home\index.vue
--> 
<template>
  <div>
    <div class="banner">
      <img src="../../assets/image/new_banner.png" alt />
      <span>首页 > 新闻动态 > {{title}}</span>
    </div>
    <div class="content_css">
      <div class="left">
        <div class="title">
          <h2>新闻动态</h2>
          <span>Company Overview</span>
        </div>
        <div class="list">
          <div
            class="block"
            :class="{'active':currentTabComponent=='gsyw'}"
            @click="currentTabComponent = 'gsyw'"
          >
            <span>公司要闻</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='hydt'}"
            @click="currentTabComponent = 'hydt'"
          >
            <span>行业动态</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
      <div class="right">
        <keep-alive>
          <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import gsyw from "./components/gsyw";
import hydt from "./components/hydt";
export default {
  components: {
    gsyw,
    hydt,
  },
  watch: {
    currentTabComponent(a) {
      console.log(a);
      switch (a) {
        case "gsyw":
          this.title = "公司要闻";
          break;
        default:
          this.title = "行业动态";
      }
    },
  },
  data() {
    return {
      title: "公司要闻",
      currentTabComponent: "gsyw",
    };
  },
  created() {
    this.currentTabComponent = this.$route.query.type;
  },
};
</script>
<style lang="scss" scoped>
.banner {
  > img {
    max-height: 400px;
    min-height: 400px;
    width: 100%;
    background-size: cover;
  }
  > span {
    line-height: 40px;
    border-bottom: 1px solid #f3f3f4;
    color: #666666;
    font-size: 10px;
    display: flex;
    padding-right: 120px;
    justify-content: flex-end;
  }
}
.content_css {
  display: flex;
  margin-top: 69px;
  padding: 0px 120px;
  justify-content: space-between;
  .left {
    // width: 20%;
    min-width: 20%;
    border-right: 1px solid #f3f3f4;
    .title {
      > h2 {
        color: #010411;
        font-size: 32px;
      }
      > p {
        color: #666666;
        font-size: 16px;
      }
    }
    .list {
      display: flex;
      flex-direction: column;
      margin-top: 32px;
          .block {
        line-height: 70px;
        height: 70px;
        padding: 0px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > i {
          font-size: 18px;
          color: #333333;
        }
        > span {
          color: #333333;
          font-size: 18px;
        }
      }
      .active {
        background: url("../../assets/image/select.png") no-repeat center center;
        background-size: 100% 100%;
        > span {
          color: #fff;
          font-size: 24px;
        }
        >i{
          color: #fff;
          font-size: 24px;
        }
      }
    }
  }
  .right {
    flex: 1;
    padding-left: 100px;
  }
}
</style>
