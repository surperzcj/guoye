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
    <div class="performance_list">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <img class="top_img" :src="image_url+item.image" alt />
          <div class="bottom" @click="godetail(item.id)">
            <span>{{item.title}}</span>
            <img src="../../../assets/image/rightarrow.png" alt />
          </div>
        </li>
      </ul>
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
      total: null,
      pageCount: 6,
      size: 6,
      current: 1,
      image_url: "",
    };
  },
  methods: {
    currentChange(page) {
      this.current = page;
      this.performance();
    },
    godetail(id) {
      this.$router.push({
        path: "/staffdetail",
        query: {
          id: id,
        },
      });
    },
    async performance() {
      let data = await this.$api.employees_home({
        type: 7,
        limit: this.size,
        page: this.current,
      });
      if (data.msg == "success") {
        console.log(data);
        this.image_url = data.data.image_url + "/";
        this.list = data.data.list;
        this.total = data.data.count;
      }
    },
  },
  created() {
    this.performance();
  },
};
</script>
<style lang="scss" scoped>
.performance_list {
  > ul {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    > li {
      border-bottom: 1px solid #cacaca;
      &:nth-child(3n){
        margin-left: 2%;
      }
           &:nth-child(2){
        margin-left: 2%;
      }
           &:nth-child(5){
        margin-left: 2%;
      }
      &:nth-child(n + 4) {
        padding-top: 23px;
      }

      &:hover {
        .bottom {
          background-color: #3762ff;
          color: #fff;
        }
      }
      width: 30%;
      .top_img {
        width: 100%;
        max-height: 180px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 8px;
        > span {
          line-height: 53px;
          color: #010411;
          font-size: 16px;
          font-weight: bold;
          max-width: 300px;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        > img {
          height: 14px;
        }
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
