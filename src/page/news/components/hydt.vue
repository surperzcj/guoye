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
    <div class="newslist" v-for="(item,index) in list" :key="index">
      <div class="left_img">
        <img :src="image_url+item.image" alt />
      </div>
      <div class="right_content">
        <div class="title">
          <span>{{item.title}}</span>
          <p>{{item.created_at|formatDate}}</p>
        </div>
        <div class="content">{{item.synopsis}}</div>
        <div class="detail_btn">
          <span @click="godetail(item.id)">more+</span>
        </div>
      </div>
    </div>
    <div class="pagination" v-if="total>0">
      <el-pagination
        :total="total"
        :page-size="size"
        :page-count="current"
        :pager-count="pageCount"
        @current-change="currentChange"
        :current-page="current"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageCount: 5,
      size: 5,
      current: 1,
      total: null,
      list: [],
      image_url:''
    };
  },
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return MM + "-" + d;
    }
  },
  methods: {
    currentChange(page) {
      this.current = page;
      this.news();
    },
    godetail(id) {
      this.$router.push({
        path: "/newsdetail",
        query: {
          id: id
        }
      });
    },
    // 获取首页轮播图数据
    async news() {
      let data = await this.$api.news({
        type: 2,
        list: this.size,
        page: this.current
      });
      if (data.msg == "success") {
        this.list = data.data.list;
        this.image_url=data.data.image_url+'/'
        this.total = data.data.count;
      }
      console.log(this.total);
    }
  },
  created() {
    this.news();
  }
};
</script>
<style lang="scss" scoped>
.newslist {
  display: flex;
  padding: 23px 0px;
  border-bottom: 1px solid #cacaca;
  .left_img {
    width: 280px;
    height: 180px;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .right_content {
    flex: 1;
    margin-left: 24px;
    .title {
      display: flex;
      justify-content: space-between;
      margin-bottom: 24px;
      > span {
        color: #010411;
        font-size: 16px;
        max-width: 500px;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > p {
        color: #cacaca;
        font-size: 20px;
      }
    }
    .content {
      color: #999999;
      line-height: 24px;
      margin-bottom: 26px;
    }
    .detail_btn {
      display: flex;
      justify-content: flex-end;
      > span {
        width: 64px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: #cacaca;
        font-size: 14px;
        border-radius: 16px;
        border: 1px solid rgba(202, 202, 202, 1);
        cursor: pointer;
      }
    }
  }
}
.pagination {
  margin-top: 48px;
  margin-bottom: 24px;
  display: flex;
  justify-content: flex-end;
}
</style>
