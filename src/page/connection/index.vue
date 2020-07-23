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
      <img src="../../assets/image/connection.png" alt />
      <span>首页 > 联系我们</span>
    </div>
    <div class="connection_content">
      <div class="connection_title">
        <h2>联系我们</h2>
        <span>Recruitment</span>
      </div>
    </div>
    <div class="connection_list" v-for="(item,index) in detail" :key="index">
      <div class="left">
        <span>{{item.name}}</span>
      </div>
      <div class="right">
        <div class="phone">
          <span>电话：{{item.mobile}}</span>
          <span>传真：{{item.fax}}</span>
          <span>邮箱：{{item.email}}</span>
        </div>
        <div class="address">
          <span>地址：{{item.address}}</span>
        </div>
      </div>
    </div>>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: [],
    };
  },
  methods: {
    async contact_us() {
      let data = await this.$api.contact_us();
      if (data.msg == "success") {
        this.detail = data.data;
        console.log(this.detail);
      }
    },
  },
  created() {
    this.contact_us();
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
.connection_content {
  margin-top: 69px;
  padding: 0px 120px;
  margin-bottom: 15px;
  .connection_title {
    text-align: center;
    > h2 {
      color: #010411;
      font-size: 32px;
      font-weight: bold;
    }
    > span {
      color: #666666;
      font-size: 16px;
    }
  }
}
.connection_list {
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-bottom: 81px;
  }
  .left {
    color: #010411;
    font-size: 24px;
    font-weight: bold;
    margin-right: 56px;
  }
  .phone {
    > span {
      color: #666666;
      font-size: 16px;
      margin-right: 34px;
      display: inline-block;
      line-height: 24px;
    }
  }
  .address {
    margin-top: 24px;
    > span {
      color: #666666;
      font-size: 16px;
      line-height: 24px;
      display: inline-block;
    }
  }
}
</style>