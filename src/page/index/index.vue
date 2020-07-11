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
    <Header />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>
<script>
import { Header, Footer } from "@/components";
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  }
};
</script>
