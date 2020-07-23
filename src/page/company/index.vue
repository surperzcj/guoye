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
      <img src="../../assets/image/company.png" alt />
      <span>首页 > 公司概述 > 公司简介</span>
    </div>
    <div class="content_css">
      <div class="left">
        <div class="title">
          <h2>公司概况</h2>
          <span>Company Overview</span>
        </div>
        <div class="list">
          <div
            class="block"
            :class="{'active':currentTabComponent=='gsjj'}"
            @click="currentTabComponent = 'gsjj'"
          >
            <span>公司简介</span>
            <span>></span>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='zzjg'}"
            @click="currentTabComponent = 'zzjg'"
          >
            <span>组织架构</span>
            <span>></span>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='rctd'}"
            @click="currentTabComponent = 'rctd'"
          >
            <span>锐诚团队</span>
            <span>></span>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='qywh'}"
            @click="currentTabComponent = 'qywh'"
          >
            <span>企业文化</span>
            <span>></span>
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
import gsjj from "./components/gsjj";
import zzjg from "./components/zzjg";
import rctd from "./components/rctd";
import qywh from "./components/qywh";
export default {
  components: {
    gsjj,
    zzjg,
    rctd,
    qywh
  },
  data() {
    return {
      currentTabComponent: "gsyw"
    };
  },
  created() {
    this.currentTabComponent = this.$route.query.type;
  }
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
    width: 20%;
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
        > img {
          width: 10px;
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
      }
    }
  }
  .right {
    flex: 1;
    padding-left: 100px;
  }
}
</style>
