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
      <div class="block" @click="currentTabComponent = 'gsjj'">公司简介</div>
      <div class="block" @click="currentTabComponent = 'zzjg'">组织架构</div>
      <div class="block" @click="currentTabComponent = 'rctd'">锐诚团队</div>
      <div class="block" @click="currentTabComponent = 'qywh'">企业文化</div>
    </div>
    
    <div>下面是详情</div>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import gsjj from "./components/gsjj";
import zzjg from "./components/zzjg";
import rctd from "./components/rctd";
import qywh from "./components/qywh";
export default {
  components: {
    gsjj,zzjg,rctd,qywh
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
