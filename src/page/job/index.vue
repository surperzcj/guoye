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
    <div class="banner">
      <img src="../../assets/image/job.png" alt />
      <span>首页 > 人才招聘</span>
    </div>
    <div class="job_content">
      <div class="job_title">
        <h2>人才招聘</h2>
        <span>Recruitment</span>
      </div>
      <div class="job_list">
        <div class="top">
          <span>项目经理   工作地（北京） 招聘人 （3人）</span>
          <span>2020-05-22</span>
        </div>
        <div class="content">
          <span>受队光每她海果转放调毛照农书王周家验步素反传级度半却日合龙美太圆格方长活石拉元先存小织走性真安市小维写我记后只除济府着前山米那受容基干斗按在节起经特光如今传。是取成规又才元论选花压维油按少关科族叫条处现米红大报。</span>
        </div>
        <div class="btn">
          <span>查看详情</span>
        </div>
      </div>
          <div class="job_list">
        <div class="top">
          <span>项目经理   工作地（北京） 招聘人 （3人）</span>
          <span>2020-05-22</span>
        </div>
        <div class="content">
          <span>受队光每她海果转放调毛照农书王周家验步素反传级度半却日合龙美太圆格方长活石拉元先存小织走性真安市小维写我记后只除济府着前山米那受容基干斗按在节起经特光如今传。是取成规又才元论选花压维油按少关科族叫条处现米红大报。</span>
        </div>
        <div class="btn">
          <span>查看详情</span>
        </div>
      </div>
          <div class="job_list">
        <div class="top">
          <span>项目经理   工作地（北京） 招聘人 （3人）</span>
          <span>2020-05-22</span>
        </div>
        <div class="content">
          <span>受队光每她海果转放调毛照农书王周家验步素反传级度半却日合龙美太圆格方长活石拉元先存小织走性真安市小维写我记后只除济府着前山米那受容基干斗按在节起经特光如今传。是取成规又才元论选花压维油按少关科族叫条处现米红大报。</span>
        </div>
        <div class="btn">
          <span>查看详情</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.banner {
  > img {
    max-height: 400px;
    min-height: 400px;
    width: 100%;
    background-size: cover;
  }
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
.job_content{
  margin-top: 69px;
  padding: 0px 120px;
  
  .job_title{
    text-align: center;
    >h2{
      color: #010411;
      font-size: 32px;

    }
    >span{
      color: #666666;
      font-size: 16px;
    }
  }
  .job_list{
    padding: 20px 16px;
    border-bottom: 1px solid #CACACA;
    &:hover{
      background-color: #F3F3F4;
    }
    .top{
      display: flex;
      justify-content: space-between;
      align-items: center;
      >span{
        color: #010411;
        font-size: 18px;
        &:nth-child(2){
          color: #999;
        }
        &:nth-child(1){
          font-weight: bold;
        }
      }
    }
    .content{
      >span{
        color: #999999;
        font-size: 14px;
        line-height: 24px;
        margin-top: 18px;
        display: inline-block;
      }
    }
    .btn{
      display: flex;
      justify-content: flex-end;
      >span{
        display: inline-block;
        line-height: 32px;
        color: #FFFFFF;
        font-size: 12px;
        padding: 0px 10px;
        background:rgba(55,98,255,1);
border-radius:4px;
cursor: pointer;
      }
    }
  }
}
</style>