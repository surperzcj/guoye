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
          <div class="left" @click="$router.push('/login')">登录</div>
          <div class="right" @click="$router.push('/register')">注册</div>
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
          reqUrl:{
                path: "/"
              },
        },
        {
          id: 1,
          name: "公司概况",
          reqUrl:{
                path: "/company",
                params:'gsjj'
              },
          nodes: [
            {
              name: "公司简介",
              nodes: [],
              reqUrl:{
                path: "/company",
                params:'gsjj'
              }
            },
            {
              name: "组织架构",
              nodes: [],
              reqUrl:{
                path: "/company",
                params:'zzjg'
              }
            },
            {
              name: "锐诚团队",
              nodes: [],
              reqUrl:{
                path: "/company",
                params:'rctd'
              }
            },
            {
              name: "企业文化",
              nodes: [],
              reqUrl:{
                path: "/company",
                params:'qywh'
              }
            },
          ],
        },
        {
          id: 1,
          name: "新闻动态",
          nodes: [
            {
              name: "公司要闻",
              nodes: [],
              reqUrl:{
                path: "/news",
                params:'gsyw'

              }
            },
            {
              name: "行业动态",
              nodes: [],
              reqUrl:{
                path: "/news",
                params:'hydt'
              }
            },
          ],
          reqUrl: "/news"
        },
        {
          name: "公司业绩",
         
          reqUrl:{
                path: "/performance",
                params:'dxyj'
              },
          nodes: [
            {
              name: "典型业绩",
              nodes: [],
              reqUrl:{
                path: "/performance",
                params:'dxyj'
              }
            },
            {
              name: "主要业绩",
              nodes: [],
              reqUrl:{
                path: "/performance",
                params:'zyyj'
              }
            },
          ],
        },
        {
          name: "员工家园",
          reqUrl:{
                path: "/staff",
                params:'tzgg'
              },
          nodes: [
            {
              name: "通知公告",
              nodes: [],
              reqUrl:{
                path: "/staff",
                params:'tzgg'
              }
            },
            {
              name: "培训专栏",
              nodes: [],
              reqUrl:{
                path: "/staff",
                params:'pxzl'
              }
            },
            {
              name: "质量体系",
              nodes: [],
              reqUrl:{
                path: "/staff",
                params:'zltx'
              }
            },
            {
              name: "业务中心",
              nodes: [],
              reqUrl:{
                path: "/staff",
                params:'ywzx'
              }
            },
            {
              name: "会议纪要",
              nodes: [],
              reqUrl:{
                path: "/staff",
                params:'hyjy'
              }
            },
            {
              name: "员工风采",
              nodes: [],
              reqUrl:{
                path: "/staff",
                params:'ygfc'
              }
            },
          ],
        },
        {
          name: "人才招聘",
          nodes: [],
          reqUrl:{
                path: "/job"
              }
        },
        {
          name: "联系我们",
          nodes: [],
          reqUrl:{
                path: "/connection"
              }
        }
      ]
    };
  },
  methods: {
    isCurrentPath(index) {
      this.show = index;
    },
    goto(url) {
      this.$router.push({
        path:url.path,
        query:{
          type:url.params
        }
      })
    }
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
      cursor: pointer;
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