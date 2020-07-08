<!--
 * @Author: your name
 * @Date: 2020-07-06 10:07:46
 * @LastEditTime: 2020-07-06 10:15:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \bbb\guoye\src\App.vue
--> 
<template>
  <div id="app">
    <Header />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import { Header, Footer } from "@/components";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
ul{
  list-style: none;
}
</style>
