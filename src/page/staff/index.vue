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
      <img src="../../assets/image/staff.png" alt />
      <span>首页 > 员工家园 > {{title}}</span>
    </div>
    <div class="content_css">
      <div class="left">
        <div class="title">
          <h2>员工家园</h2>
          <span>Staff Home</span>
        </div>
        <div class="list">
          <div
            class="block"
            :class="{'active':currentTabComponent=='tzgg'}"
            @click="currentTabComponent = 'tzgg'"
          >
            <span>通知公告</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='pxzl'}"
            @click="currentTabComponent = 'pxzl'"
          >
            <span>培训专栏</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='zltx'}"
            @click="currentTabComponent = 'zltx'"
          >
            <span>质量体系</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='ywzx'}"
            @click="currentTabComponent = 'ywzx'"
          >
            <span>业务中心</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='hyjy'}"
            @click="currentTabComponent = 'hyjy'"
          >
            <span>会议纪要</span>
            <i class="el-icon-arrow-right"></i>
          </div>
          <div
            class="block"
            :class="{'active':currentTabComponent=='ygfc'}"
            @click="currentTabComponent = 'ygfc'"
          >
            <span>员工风采</span>
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
import tzgg from "./components/tzgg";
import pxzl from "./components/pxzl";
import zltx from "./components/zltx";
import ywzx from "./components/ywzx";
import hyjy from "./components/hyjy";
import ygfc from "./components/ygfc";
export default {
  components: {
    tzgg,
    pxzl,
    zltx,
    ywzx,
    hyjy,
    ygfc,
  },
  watch: {
    currentTabComponent(a) {
      console.log(a);
      switch (a) {
        case "tzgg":
          this.title = "通知公告";
          break;
        case "pxzl":
          this.title = "培训专栏";
          break;
        case "zltx":
          this.title = "质量体系";
          break;
        case "ywzx":
          this.title = "业务中心";
          break;
        case "hyjy":
          this.title = "会议纪要";
          break;
        default:
          this.title = "员工风采";
      }
    },
  },
  data() {
    return {
      currentTabComponent: "gsyw",
      title: "通知公告",
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
        > i {
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
