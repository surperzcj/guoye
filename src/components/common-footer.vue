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
              <span
                class="lianjie"
                v-for="(item,index) in detail.friendly_link"
                :key="index"
                @click="golink(item.link)"
              >{{item.title}}</span>
              <span>邮箱 : {{detail.bottom.email}}</span>
            </li>
          </ul>
        </div>
        <div class="content_l">
          <img :src="detail.image.bottom_logo" alt />
        </div>
      </div>
      <div class="ygjy" @click="goygjy">
        <span>员工家园</span>
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
      detail: "",
    };
  },
  created() {
    this.commonality();
  },
  methods: {
    goygjy() {
      if (this.$store.state.token) {
        this.$router.push({
          path: "/staff",
          query: {
            type: "tzgg",
          },
        });
      } else {
        this.$router.push("/login");
      }
    },
    golink(link) {
      if (link) {
        window.open(link);
      }
    },
    async commonality() {
      let data = await this.$api.commonality();
      if (data.msg == "success") {
        this.detail = data.data;
        console.log(this.detail.bottom.address);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  margin-top: 20px;
  .content {
    background: url("../assets/image/footer_banner.png") no-repeat center center;
    min-width: 100%;
    min-height: 300px;
    background-size: cover;
    position: relative;
    .content_t {
      display: flex;
      max-width: 1440px;
      margin: 0 auto;
      justify-content: space-between;
      padding: 64px 0px 0px 0px;
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
.lianjie {
  cursor: pointer;
}
.ygjy {
  position: absolute;
  right: 0;
  top: 50%;
  opacity: 0.4;
  background: rgba(4, 14, 53, 1);
  line-height: 40px;
  padding: 0px 32px;
  color: #ffffff;
  font-size: 14px;
  font-size: 14px;
  cursor: pointer;
  &::before {
    content: "";
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-right: 40px solid #0b1e63;
    // opacity: .4;
    border-bottom: 20px solid transparent;
    z-index: 999;
    position: absolute;
    left: -40px;
  }
}
</style>