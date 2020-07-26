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
    <!-- banner部分 -->
    <div class="banner">
      <el-carousel direction="horizontal">
        <el-carousel-item v-for="(item,index) in detail.slide_show" :key="index">
          <img @click="golink(item.link)" :src="image_url+item.image" alt />
        </el-carousel-item>
      </el-carousel>
    </div>

    <!-- 简介部分 -->
    <div class="synopsis">
      <div class="left">
        <h2>公司简介</h2>
        <span>{{detail.company_profile.synopsis}}</span>
      </div>
      <div class="right">
        <img :src="image_url+detail.company_profile.image" alt />
      </div>
    </div>
    <!-- 新闻咨询 -->
    <div class="news">
      <div class="title">
        <span class="left">
          <h2>新闻资讯</h2>
        </span>
        <span class="right lianjie" @click="xwzi">more+</span>
      </div>
      <div class="content">
        <div
          class="news-content-left"
          v-for="(item,index) in news_list1"
          :key="index+'aa'"
          @click="godetail(item.id)"
        >
          <div class="news-image-title-big">
            <img :src="image_url+item.image" />
            <div class="news-image-date-big">{{item.created_at|formatDate}}</div>
          </div>
          <div class="news-image-title lianjie">
            <h3>{{item.title}}</h3>
            <div>{{item.synopsis}}</div>
          </div>
        </div>
        <div class="news-content-right">
          <div class="right-top">
            <div
              class="news-image-top-big"
              v-for="(item,index) in news_list2"
              :key="index+'bb'"
              @click="godetail(item.id)"
            >
              <img :src="image_url+item.image" />
              <div class="news-image-date-big">{{item.created_at|formatDate}}</div>
              <div class="news-title lianjie">
                <h3>{{item.title}}</h3>
              </div>
            </div>
          </div>
          <div class="right_list">
            <ul>
              <li
                class="lianjie"
                v-for="(item,index) in news_list3"
                :key="index+'cc'"
                @click="godetail(item.id)"
              >
                <span class="new-left">{{item.title}}</span>
                <span>{{item.created_at|formatDates}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- 项目案例部分 -->
    <div class="cases">
      <div class="title">
        <span class="left">
          <h2>项目案例</h2>
        </span>
        <span class="right lianjie" @click="xual">more+</span>
      </div>
      <div class="cases_content">
        <div
          class="left"
          v-for="(item,index) in detail.performance"
          :key="index"
          @click="goperformance(item.id)"
        >
          <img :src="image_url+item.image" alt="newsImage01" />
          <div class="title">
            <span>{{item.title}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { CarouselItem } from "view-design";
// import Vue from "vue";
// Vue.component("CarouselItem", CarouselItem);
export default {
  components: {
    // CarouselItem
  },

  data() {
    return {
      // value1: 0
      detail: [],
      image_url: "",
      news_list1: [],
      news_list2: [],
      news_list3: [],
    };
  },
  created() {
    this.home();
  },
  filters: {
    formatDates: function (value) {
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
      return y + "-" + MM + "-" + d;
    },
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
    xwzi() {
      this.$router.push({
        path: "/news",
        query: {
          type: "gsyw",
        },
      });
    },
    xual() {
      this.$router.push({
        path: "/performance",
        query: {
          type: "dxyj",
        },
      });
    },
    golink(link) {
      window.open(link);
    },
    godetail(id) {
      this.$router.push({
        path: "/newsdetail",
        query: {
          id: id,
        },
      });
    },
    goperformance(id) {
      this.$router.push({
        path: "/performancedetail",
        query: {
          id: id,
        },
      });
    },
    async home() {
      let data = await this.$api.home();
      if (data.msg == "success") {
        console.log(data.data.news_list.slice(0, 1));
        this.image_url = data.data.image_url + "/";
        this.detail = data.data;
        this.news_list1 = data.data.news_list.slice(0, 1);
        this.news_list2 = data.data.news_list.slice(1, 3);
        this.news_list3 = data.data.news_list.slice(3, 6);
        console.log(this.news_list1, this.news_list2, this.news_list3);
      }
    },
  },
};
</script>
<style lang="scss">
.banner {
  .el-carousel.el-carousel--horizontal {
    height: 600px;
    .el-carousel__container {
      height: 100%;
      .el-carousel__arrow {
        display: none;
      }
      .el-carousel__item {
        > img {
          background-size: 100% 100%;
          height: 100%;
        }
      }
    }
    .el-carousel__indicators {
      .el-carousel__indicator {
        .el-carousel__button {
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 1);
          border-radius: 3px;
          opacity: 0.5;
        }
      }
      .el-carousel__indicator.is-active {
        .el-carousel__button {
          width: 30px;
          height: 6px;
          background: rgba(255, 255, 255, 1);
          border-radius: 3px;
          opacity: 1;
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
// banner部分
.banner {
  > img {
    max-height: 600px;
  }
}
// 简介部分
.synopsis {
  padding: 0px 120px;
  display: flex;
  margin-top: 72px;
  justify-content: space-between;
  .left {
    padding-right: 49px;
    > h2 {
      margin-bottom: 24px;
    }
    > span {
      color: #666666;
      display: inline-block;
      font-size: 14px;
      line-height: 24px;
      text-indent: 2em;
    }
  }
  .right {
    > img {
      max-height: 195px;
    }
  }
}

.news,
.cases {
  padding: 0px 120px;
  margin-top: 72px;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
    .right {
      width: 64px;
      height: 24px;
      text-align: center;
      font: 14px PingFangSC-Regular, PingFang SC;
      color: #cacaca;
      border-radius: 16px;
      border: 1px solid #cacaca;
    }
  }
  .content {
    display: flex;
    justify-content: space-between;
    .news-content-left {
      width: 47%;
      background-color: #f3f3f4;
    }
    .news-content-right {
      width: 50%;
      .right-top {
        display: flex;
        justify-content: space-between;
        .news-image-top-big {
          width: 49%;
          position: relative;
          &:nth-child(2) {
            margin-left: 2%;
          }
          > img {
            width: 100%;
            min-height: 170px;
          }
          .news-title {
            width: 100%;
            > h3 {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              margin-top: 12px;
              line-height: 22px;
            }
          }
          .news-image-date-big {
            position: absolute;
            right: 0;
            bottom: 44px;
            width: 56px;
            background-color: #3762ff;
            height: 32px;
            color: #ffffff;
            text-align: center;
            line-height: 32px;

            font-size: 14px;
          }
        }
      }
      .right_list {
        margin-top: 40px;
        > ul {
          > li {
            line-height: 45px;
            display: flex;
            justify-content: space-between;
            color: #666;
            font-size: 14px;
            border-top: 1px dashed #cacaca;
            .new-left {
              color: #999;
              font-size: 14px;
            }
          }
        }
      }
    }
    .news-image-title-big {
      position: relative;
      height: 250px;
      img {
        width: 100%;
        height: 250px;
      }
      .news-image-date-big {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 87px;
        height: 49px;
        background-color: #3762ff;
        color: #ffffff;
        text-align: center;
        line-height: 49px;
        font: bold 22px/49px DINPro-Bold, DINPro;
      }
    }
    .news-image-title {
      padding: 0px 12px;
      > h3 {
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        line-height: 62px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      > div {
        color: #999999;
        font-size: 12px;
        line-height: 24px;
        text-indent: 2em;
      }
    }
    .left {
    }
  }
  .cases_content {
    display: flex;
    > div {
      width: 30%;
      margin-right: 1%;
      position: relative;
      &:hover {
        .title {
          display: block;
        }
      }
      > img {
        width: 100%;
        height: 250px;
        background-size: cover;
      }
      .title {
        position: absolute;
        width: 100%;
        height: 250px;
        z-index: 999;
        top: 0;
        left: 0;
        background: rgba(55, 98, 255, 0.8);
        color: #fff;
        text-align: center;
        display: none;

        > span {
          margin: 0 auto;
          line-height: 250px;
          font-size: 18px;
        }
      }
    }
  }
}
.cases {
  margin-bottom: 30px;
}
h2 {
  color: #010411;
  font-size: 24px;
  font-weight: bold;
}
.lianjie {
  cursor: pointer;
}
</style>
