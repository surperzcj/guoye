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
    <div class="heard">
      <img src="../../assets/image/logo.png" alt />
    </div>
    <div class="register">
      <img class="bg" src="../../assets/image/register.png" alt />
      <div class="form">
        <div class="title">会员注册</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="name">
            <el-input v-model="ruleForm.name" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认姓名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="传真号码" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
              <el-form-item label="通讯地址" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-form>
         <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      </div>
       
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>
<style lang="scss">
.demo-ruleForm{
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  .el-form-item{
    width: 48%;
    display: flex;
    flex-direction: column;
    &:nth-child(2n){
      margin-left: 2%;
    }
    .el-form-item__label{
      text-align: left;
      color: #010411;
      font-size: 14px;
      font-weight: bold;
      width: 130px;
    }
    .el-form-item__content{
      margin-left: 0  !important; 
      margin-top: 0px;
    }
  }
}
.el-button.el-button--primary{
  width: 100%;
  margin-top: 20px;

}
</style>
<style lang="scss" scoped>
.heard {
  line-height: 80px;
  background-color: #fff;
  padding-left: 120px;
  display: flex;
  align-items: center;
  height: 80px;
  > img {
    max-height: 38px;
  }
}
.register {
  .bg {
    width: 100%;
    position: relative;
    background-size: 100% 100%;
    max-height: 730px;
  }
  .form {
    width: 865px;
    height: 690px;
    background-color: #fff;
    position: absolute;
    padding: 30px 32px 56px 32px;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    .title {
      color: #010411;
      font-weight: bold;
      font-size: 32px;
    }
  }
}
</style>
