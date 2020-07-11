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
    <div>
      <div class="block" @click="currentTabComponent = 'tzgg'">通知公告</div>
      <div class="block" @click="currentTabComponent = 'pxzl'">培训专栏</div>
      <div class="block" @click="currentTabComponent = 'zltx'">质量体系</div>
      <div class="block" @click="currentTabComponent = 'ywzx'">业务中心</div>
      <div class="block" @click="currentTabComponent = 'hyjy'">会议纪要</div>
      <div class="block" @click="currentTabComponent = 'ygfc'">员工风采</div>
    </div>
    
    <div>下面是详情</div>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
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
  data() {
    return {
      currentTabComponent:'gsyw'
    };
  },
  created(){
    this.currentTabComponent = this.$route.query.type
  }
};
</script>
<style lang="scss" scoped>
  .block{
    width:200px;
    height:50px;
    display:inline-block;
    background:blue;
    color:#fff;
    cursor: pointer;
  }
</style>
