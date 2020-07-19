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
    <!-- <Carousel v-model="value1" loop>
      <CarouselItem>
        <div class="demo-carousel">1</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">2</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">3</div>
      </CarouselItem>
      <CarouselItem>
        <div class="demo-carousel">4</div>
      </CarouselItem>
    </Carousel>-->
    <!-- banner部分 -->
    <div class="banner">
      <img src="../../assets/image/banner.png" alt />
    </div>

    <!-- 简介部分 -->
    <div class="synopsis">
      <div class="left">
        <h2>公司简介</h2>
        <span>北京国冶锐诚工程技术有限公司成立于1998年，由中钢设备有限公司、北京佰能电气技术有限公司和北京中冶迈克液压有限责任公司共同出资设立，由中钢设备有限公司控股，主要从事工程承包和项目管理、冶金工程和设备监理、技术开发和咨询服务等业务。</span>
        <span>公司依靠高素质专业技术人员组成的项目团队，致力于低成本、高效率的品质服务，坚持“技术先进、方法科学、产品优质、服务满意”的质量方针，使客户工程项目得到全面的质量和进度…</span>
      </div>
      <div class="right">
        <img src="../../assets/image/synopsis.png" alt />
      </div>
    </div>
    <!-- 新闻咨询 -->
    <div class="news">
      <div class="title">
        <span class="left">
          <h2>新闻资讯</h2>
        </span>
        <span class="right">more+</span>
      </div>
      <div class="content">
        <div class="news-content-left">
          <div class="news-image-title-big">
            <img src="https://iph.href.lu/580x250" alt="newsImage01" />
            <div class="news-image-date-big">09-01</div>
          </div>
          <div class="news-image-title">
            <h3>不要再纠缠于“长期”和“短期”，很多时候长期已经成为了现在不…</h3>
            <div>当你有一个傻瓜时，你会很痛苦；你有 50 个傻瓜是最幸福的，吃饭、睡觉、上厕所排着队去的；你有一个聪明人时很带劲，你有 50 个聪明人实际上是最痛苦的，谁都不服谁。我在公司里的…</div>
          </div>
        </div>
        <div class="news-content-right">
          <div class="right-top">
            <div class="news-image-top-big">
              <img src="https://iph.href.lu/580x250" alt="newsImage01" />
              <div class="news-image-date-big">09-01</div>
              <div class="news-title">
                <h3>不要再纠缠于“长期”和“短期”，很多时候长期已经成为了现在不…</h3>
              </div>
            </div>
            <div class="news-image-top-big">
              <img src="https://iph.href.lu/580x250" alt="newsImage01" />
              <div class="news-image-date-big">09-01</div>
              <div class="news-title">
                <h3>不要再纠缠于“长期”和“短期”，很多时候长期已经成为了现在不…</h3>
              </div>
            </div>
          </div>
          <div class="right_list">
            <ul>
              <li>
                <span class="new-left">刚工作的几年比谁更踏实，再过几年比谁更激情</span>
                <span>2020-06-26</span>
              </li>
              <li>
                <span class="new-left">刚工作的几年比谁更踏实，再过几年比谁更激情</span>
                <span>2020-06-26</span>
              </li>
              <li>
                <span class="new-left">刚工作的几年比谁更踏实，再过几年比谁更激情</span>
                <span>2020-06-26</span>
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
        <span class="right">more+</span>
      </div>
      <div class="cases_content">
        <div class="left">
          <img src="https://iph.href.lu/580x250" alt="newsImage01" />
        </div>
        <div class="center">
          <img src="https://iph.href.lu/580x250" alt="newsImage01" />
        </div>
        <div class="right">
          <img src="https://iph.href.lu/580x250" alt="newsImage01" />
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
    };
  }
};
</script>
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
            bottom: 43px;
            width: 56px;
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
  .cases_content{
    display: flex;
    >div{
      flex: 1;
      >img{
        width: 100%;
      }
    }
  }
}
h2 {
  color: #010411;
  font-size: 24px;
  font-weight: bold;
}
</style>
