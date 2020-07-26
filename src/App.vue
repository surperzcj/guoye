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
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
 
}
body,html{
  height: 100%;
}
ul{
  list-style: none;
}
</style>
