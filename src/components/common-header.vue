<template>
  <div>
    <div class="navbar container">
      <div class="logo pointer">
        <img src="../assets/image/logo.png" alt />
      </div>
      <div class="header_nav">
        <ul>
          <li
            class="pointer"
            :class="{active:show==index}"
            v-for="(item,index) in navList"
            @click="isCurrentPath(index)"
            :key="index"
          >
            <span @click="goto(item.reqUrl)">{{item.name}}</span>

            <div class="inner-link" v-if="item.nodes.length>0" v-show="hideNavLink==false">
              <ul>
                <li
                  v-for="(i,k) in item.nodes"
                  :key="k"
                  @click="goto(i.reqUrl)"
                  v-bind:style="{ padding: item.nodes.length==1 ? '10px 0' : '' }"
                >{{i.name}}</li>
              </ul>
            </div>
          </li>
        </ul>
        <div class="islogin">
          <div class="left">登录</div>
          <div class="right">注册</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hideNavLink: false,
      show: 0,
      navList: [
        {
          name: "首页",
          nodes: [],
          reqUrl: "/c"
        },
        {
          id: 1,
          name: "公司概况",
          nodes: [
            {
              name: "保函验真",
              nodes: [],
              reqUrl:
                "http://www.ccb.com/tran/WCCMainB1L1?CCB_IBSVersion=V5&SERVLET_NAME=WCCMainB1L1&TXCODE=NBH001"
            }
          ],
          reqUrl: "/v"
        },
        {
          id: 1,
          name: "新闻动态",
          nodes: [
            {
              name: "保函验真",
              nodes: [],
              reqUrl:
                "http://www.ccb.com/tran/WCCMainB1L1?CCB_IBSVersion=V5&SERVLET_NAME=WCCMainB1L1&TXCODE=NBH001"
            },
            {
              name: "保函验真",
              nodes: [],
              reqUrl:
                "http://www.ccb.com/tran/WCCMainB1L1?CCB_IBSVersion=V5&SERVLET_NAME=WCCMainB1L1&TXCODE=NBH001"
            },
            {
              name: "保函验真",
              nodes: [],
              reqUrl:
                "http://www.ccb.com/tran/WCCMainB1L1?CCB_IBSVersion=V5&SERVLET_NAME=WCCMainB1L1&TXCODE=NBH001"
            }
          ],
          reqUrl: "/o"
        },
        {
          name: "公司业绩",
          nodes: [],
          reqUrl: "/y"
        },
        {
          name: "员工家园",
          nodes: [],
          reqUrl: "/e"
        },
        {
          name: "人才招聘",
          nodes: [],
          reqUrl: "/w"
        },
        {
          name: "联系我们",
          nodes: [],
          reqUrl: "/q"
        }
      ]
    };
  },
  methods: {
    isCurrentPath(index) {
      this.show = index;
    },
    goto() {}
  }
};
</script>
<style lang="scss" scoped>
// 导航栏
.navbar {
  padding: 21px 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  .pointer {
    cursor: pointer;
  }
  .header_nav {
    display: flex;
    align-items: center;
    > ul {
      display: flex;
      line-height: 42px;
      > li {
        margin:0px 50px;
        padding-bottom: 3px;
        position: relative;
        height:42px;
        &:hover{
         >span{
            color: #3762ff;
         }
         .inner-link{
           display: block;
         }

        }
        > span {
          color: #666666;
          font-size: 14px;
          letter-spacing: 2px;
        }
        .inner-link {
          display: none;
          position: absolute;
          min-width: 127px;
          z-index: 999;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.14);
          top: 40px;
          left: -30px;
          &:hover{
            display: block;
          }
          > ul {
            text-align: center;
            >li{
              line-height: 40px;
              padding: 0px !important;
              color: #666666;
              font-size: 14px;
              &:hover{
                background-color: #3762ff;
                color: #fff;
              }
              
            }
          }
          //
        }
      }
      li.active {
         border-bottom: 1px solid #3762ff;
        > span {
          color: #3762ff;
         
          // line-height: 22px;
          padding-bottom: 3px;
        }
      }
    }
    .islogin {
      display: flex;
      .left {
        min-width: 69px;
        line-height: 36px;
        background: rgba(55, 98, 255, 1);
        color: #fff;
        font-size: 14px;
        height: 36px;
        text-align: center;
        margin-right: 1px;
      }
      .right {
        min-width: 69px;
        color: #fff;
        line-height: 36px;
        text-align: center;
        height: 36px;
        background: rgba(102, 102, 102, 1);
        font-size: 14px;
      }
    }
  }
}
</style>