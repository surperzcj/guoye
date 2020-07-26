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
      <img src="../../assets/image/job.png" alt />
      <span>首页 > 人才招聘</span>
    </div>
    <div class="job_content">
      <div class="job_title">
        <h2>人才招聘</h2>
        <span>Recruitment</span>
      </div>
      <div class="job_list" v-for="(item,index) in list" :key="index">
        <div class="top">
          <span>{{item.operating_post}} 工作地（{{item.address}}） 招聘人 （{{item.num}}人）</span>
          <span>{{item.created_at}}</span>
        </div>
        <div class="content">
          <span>{{item.synopsis}}</span>
        </div>
        <div class="btn">
          <span @click="godetail(item.id)">查看详情</span>
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
      list: [],
      pageCount: 5,
      size: 5,
      current: 1,
      total: null,
    };
  },
  methods: {
    godetail(id) {
      this.$router.push({
        path: "/jobdetail",
        query: {
          id: id,
        },
      });
    },
    currentChange(page) {
      this.current = page;
      this.recruitmentlist();
    },
    async recruitmentlist() {
      let data = await this.$api.recruitmentlist({
        limit: this.size,
        page: this.current,
      });
      if (data.msg == "success") {
        this.list = data.data.list;
        this.total = data.data.count;
      }
    },
  },
  created() {
    this.recruitmentlist();
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
.job_content {
  margin-top: 69px;
  padding: 0px 120px;

  .job_title {
    text-align: center;
    > h2 {
      color: #010411;
      font-size: 32px;
    }
    > span {
      color: #666666;
      font-size: 16px;
    }
  }
  .job_list {
    padding: 20px 16px;
    border-bottom: 1px solid #cacaca;
    &:hover {
      background-color: #f3f3f4;
    }
    .top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > span {
        color: #010411;
        font-size: 18px;
        &:nth-child(2) {
          color: #999;
        }
        &:nth-child(1) {
          font-weight: bold;
        }
      }
    }
    .content {
      > span {
        color: #999999;
        font-size: 14px;
        line-height: 24px;
        margin-top: 18px;
        display: inline-block;
      }
    }
    .btn {
      display: flex;
      justify-content: flex-end;
      > span {
        display: inline-block;
        line-height: 32px;
        color: #ffffff;
        font-size: 12px;
        padding: 0px 10px;
        background: rgba(55, 98, 255, 1);
        border-radius: 4px;
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