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
    <div class="performance_list">
      <ul>
        <li>
          <img class="top_img" src="../../../assets/image/logo.png" alt />
          <div class="bottom">
            <span>印度JSW焦化项目</span>
            <img src="../../../assets/image/rightarrow.png" alt />
          </div>
        </li>
               <li>
          <img class="top_img" src="../../../assets/image/logo.png" alt />
          <div class="bottom">
            <span>印度JSW焦化项目</span>
            <img src="../../../assets/image/rightarrow.png" alt />
          </div>
        </li>
               <li>
          <img class="top_img" src="../../../assets/image/logo.png" alt />
          <div class="bottom">
            <span>印度JSW焦化项目</span>
            <img src="../../../assets/image/rightarrow.png" alt />
          </div>
        </li>
               <li>
          <img class="top_img" src="../../../assets/image/logo.png" alt />
          <div class="bottom">
            <span>印度JSW焦化项目</span>
            <img src="../../../assets/image/rightarrow.png" alt />
          </div>
        </li>
      </ul>
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
.performance_list {
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > li {
      border-bottom: 1px solid #CACACA;
      &:nth-child(n+4){
        padding-top: 23px;
      }

      &:hover{
        .bottom{
          background-color: #3762FF;
          color: #fff;
        }
      }
      width: 30%;
      .top_img {
        width: 100%;
        height: 180px;
      }
      .bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 8px;
        > span {
          line-height: 53px;
          color: #010411;
          font-size: 16px;
          font-weight: bold;
          max-width: 300px;
          display: inline-block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        >img{
          height: 14px;

        }
      }
    }
  }
}
</style>
