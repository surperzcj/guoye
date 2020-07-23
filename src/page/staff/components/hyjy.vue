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
      <div class="right_content">
        <div class="title">
          <div class="left">
            <span>{{item.created_at|formatDate}}</span>
            <p>{{item.title}}</p>
          </div>
          <div class="content" @click="golink(item.file)">点击下载</div>
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
      image_url: "",
    };
  },
  filters: {
    formatDate: function (value) {
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
    },
  },
  methods: {
    godetail(id) {
      this.$router.push({
        path: "/staffdetail",
        query: {
          id: id,
        },
      });
    },
    golink(url) {
      window.open(this.image_url + url);
    },
    currentChange(page) {
      this.current = page;
      this.employees_home();
    },
    // 获取首页轮播图数据
    async employees_home() {
      let data = await this.$api.employees_home({
        type: 6,
        limit: this.size,
        page: this.current,
      });
      if (data.msg == "success") {
        this.image_url = data.data.image_url + "/";
        this.list = data.data.list;
        this.total = data.data.count;
      }
      console.log(data);
    },
  },
  created() {
    this.employees_home();
  },
};
</script>
<style lang="scss" scoped>
.newslist {
  display: flex;
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
      line-height: 71px;
      align-items: center;
      .left {
        display: flex;
        > span {
          color: #666666;
          font-size: 16px;
        }
        > p {
          color: #010411;
          font-size: 14px;
          margin-left: 20px;
          max-width: 500px;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .content {
      color: #999999;
      line-height: 24px;
      cursor: pointer;
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
