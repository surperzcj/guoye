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
    <div class="banner">
      <img src="../../assets/image/banner.png" alt="">
    </div>
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
  </div>
</template>
<script>
// import { CarouselItem } from "view-design";
// import {CarouselItem} from 'view-design';
// import Vue from 'vue'
// Vue.component('CarouselItem', CarouselItem);
export default {
  components: {
    // CarouselItem
    
  },

  data() {
    return {
      value1: 0
    };
  }
};
</script>
<style lang="scss" scoped>
.banner{
  >img{
    max-height: 600px;
  }
}
.synopsis {
  padding: 0px 120px;
  display: flex;
  margin-top: 72px;
  justify-content: space-between;
  .left {
    padding-right: 49px;
    >h2{
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
h2 {
  color: #010411;
  font-size: 24px;
  font-weight: bold;
}
</style>
