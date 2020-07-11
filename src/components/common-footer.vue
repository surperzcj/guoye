<template>
  <div class="footer">
    <div class="content">
      <div class="content_t">
        <div class="list">
          <ul>
            <li>
              <span>联系我们</span>
              <span>地址 : 北京市海淀区海淀北二街10号泰鹏大厦310</span>
              <span>邮编：（100096）</span>
              <span>电话 : 82918866</span>
              <span>传真 : 86-10-82928991</span>
              <span>邮箱 : bp@bestpower.cc</span>
            </li>
            <li>
              <span>友情链接</span>
              <span>中钢设备有限公司</span>
              <span>中国中钢集团有限公司</span>
              <span>北京佰能电气有限公司</span>
              <span>北京中冶迈克有限公司</span>
              <span>邮箱 : bp@bestpower.cc</span>
            </li>
          </ul>
        </div>
        <div class="content_l">
          <span>员工家园</span>
          <img src="../assets/image/rc.png" alt />
        </div>
      </div>
    
    </div>
      <div class="name">
        <span> 北京国冶锐诚工程技术有限公司   京ICP备07026202号  京公网安备11010802014973</span>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.footer {
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
        
        >span{

          font-size: 20px;
          margin-right: 112px;
          color: #fff;
        }
        > img {
          vertical-align: text-top;
          max-width: 100px;
        }
      }
      .list {
        > ul {
          display: flex;
          > li {
            &:nth-child(n+2){
              margin-left: 140px;
            }
            > span {
              text-align: left;
              display: block;
              font-size: 14px;
                color:rgba(255,255,255,.7);
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
  .name{
    background-color: #040E35;
    line-height: 40px;
    font-size: 12px;
    text-align: center;
    color:rgba(255,255,255,.3);
  }
}
</style>