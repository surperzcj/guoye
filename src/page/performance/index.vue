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
      <div class="block" @click="currentTabComponent = 'dxyj'">典型业绩</div>
      <div class="block" @click="currentTabComponent = 'zyyj'">主要业绩</div>
    </div>
    
    <div>下面是详情</div>
    <keep-alive>
      <component v-bind:is="currentTabComponent"></component>
    </keep-alive>
  </div>
</template>
<script>
import dxyj from "./components/dxyj";
import zyyj from "./components/zyyj";
export default {
  components: {
    dxyj,zyyj
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
