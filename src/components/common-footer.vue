<template>
  <div class="footer">
    <div class="content">
      <div class="content_t">
        <div class="list">
          <ul>
            <li>
              <span>联系我们</span>
              <span>地址 : {{detail.bottom.address}}</span>
              <span>邮编：（{{detail.bottom.aq}}）</span>
              <span>电话 : {{detail.bottom.phone}}</span>
              <span>传真 : {{detail.bottom.fax}}</span>
              <span>邮箱 : {{detail.bottom.email}}</span>
            </li>
            <li>
              <span>友情链接</span>
              <span class="lianjie" v-for="(item,index) in detail.friendly_link" :key="index" @click="golink(item.link)">{{item.title}}</span>
              <span>邮箱 : {{detail.bottom.email}}</span>
            </li>
          </ul>
        </div>
        <div class="content_l">
          <span>员工家园</span>
          <img :src="detail.image.bottom_logo" alt />
        </div>
      </div>
    </div>
    <div class="name">
      <span>北京国冶锐诚工程技术有限公司 京ICP备07026202号 京公网安备11010802014973</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      detail:''
    };
  },
  created() {
    this.commonality()
  },
  methods: {
    golink(link){
      window.open(link);   
    },
    async commonality() {
      let data = await this.$api.commonality();
      if (data.msg == "success") {
        this.detail = data.data;
        console.log(this.detail.bottom.address)
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  .content {
    background: url("../assets/image/footer_banner.png") no-repeat center center;
    min-width: 100%;
    min-height: 300px;
    background-size: cover;
    .content_t {
      display: flex;
      justify-content: space-between;
      padding: 64px 120px 0px 120px;
      .content_l {
        // display: flex;

        > span {
          font-size: 20px;
          margin-right: 112px;
          color: #fff;
        }
        > img {
          vertical-align: text-top;
          max-width: 100px;
          max-height: 62px;
        }
      }
      .list {
        > ul {
          display: flex;
          > li {
            &:nth-child(n + 2) {
              margin-left: 140px;
            }
            > span {
              text-align: left;
              display: block;
              font-size: 14px;
              color: rgba(255, 255, 255, 0.7);
              line-height: 28px;
              &:nth-child(1) {
                font-size: 20px;
                margin-bottom: 15px;
                font-weight: bold;
              }
            }
          }
        }
      }
    }
  }
  .name {
    background-color: #040e35;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
  }
}
.lianjie{
    cursor: pointer;
}
</style>