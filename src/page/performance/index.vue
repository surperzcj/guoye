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
      <img src="../../assets/image/performance.png" alt />
      <span>首页 > 公司业绩 > 典型业绩</span>
    </div>
    <div class="content">
      <div class="left">
        <div class="title">
          <h2>公司业绩</h2>
          <span>company achievements</span>
        </div>
        <div class="list">
          <div class="block" :class="{'active':currentTabComponent=='dxyj'}" @click="currentTabComponent = 'dxyj'"><span>典型业绩</span><span>></span></div>
          <div class="block" :class="{'active':currentTabComponent=='zyyj'}" @click="currentTabComponent = 'zyyj'"><span>主要业绩</span><span>></span></div>
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
import dxyj from "./components/dxyj";
import zyyj from "./components/zyyj";
export default {
  components: {
    dxyj,
    zyyj
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
.content {
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
        justify-content: space-between;
      }
      .active {
        background: url("../../assets/image/select.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }
  }
  .right {
    flex: 1;
    padding-left: 100px;
  }
}
</style>
