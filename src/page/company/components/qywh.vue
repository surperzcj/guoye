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
    <div class="detail" v-html="detail.text">{{detail.text}}</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: []
    };
  },
  methods: {
    async company_profiles() {
      let data = await this.$api.company_profiles({
        id: 4
      });
      if (data.msg == "success") {
        this.detail = data.data;
      }
    }
  },
  created() {
    this.company_profiles();
  }
};
</script>
<style lang="scss" scoped>
.detail {
  > p {
    font-size: 16px;
    color: #333333;
    text-indent: 2em;
  }
  > img {
    width: 100%;
  }
}
</style>
