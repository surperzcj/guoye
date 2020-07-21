<template>
  <div>
    <div class="banner">
      <span>首页 > 新闻动态 > 公司要闻</span>
    </div>
    <div class="new_detail">
      <div class="title">
        <div class="name">{{detail.title}}</div>
        <div class="time">
          <span>发表日期：{{detail.created_at|formatDate}} 浏览次数：3803 次</span>
        </div>
      </div>
      <div class="content" v-html="detail.text">
        {{detail.text}}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail: []
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
      return y+'/'+ MM + "/" + d;
    }
  },
  methods: {
    async detail_new(id) {
      // //console.log(this.$api);
      // let data = await this.$http.get('/xdPlant/1');
      let data = await this.$api.newdetails({
        id: id
      });
      if (data.msg == "success") {
        this.detail = data.data;
      }
    }
  },
  created() {
    if (this.$route.query.id) {
      this.detail_new(this.$route.query.id);
    }
  }
};
</script>
<style lang="scss" scoped>
.banner {
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
.new_detail {
  text-align: center;
  margin-top: 72px;
  margin-bottom: 52px;
  .title {
    .name {
      color: #010411;
      font-size: 24px;
      font-weight: bold;
    }
    .time {
      color: #666666;
      font-size: 14px;
      margin-top: 24px;
      padding-bottom: 23px;
      border-bottom: 1px solid #cacaca;
    }
  }
  .content {
    text-align: left;
    padding-top: 24px;
    text-indent: 35px;
    > span {
      color: #333333;
      font-size: 14px;
      line-height: 24px;
      text-align: left;
    }
    > img {
      width: 100%;
    }
  }
}
</style>
