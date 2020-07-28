<!--
 * @Author: your name
 * @Date: 2020-07-06 10:11:02
 * @LastEditTime: 2020-07-06 10:15:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bbb\guoye\src\page\home\index.vue
--> 
<template>
  <!-- <div> -->
  <div class="login">
    <div class="left">
      <div class="content">
        <div class="logo">
          <img src="../../assets/image/logo.png" alt />
        </div>
        <div class="title">欢迎登录国冶锐诚官网</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="guoye_form"
        >
          <el-form-item label="姓名" prop="name">
            <el-input v-model="ruleForm.name" maxlength="5" placeholder="请输入账户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              maxlength="6"
              placeholder="请输入账户密码"
              type="password"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="denglu">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
        <div class="hint">
          <span>北京国冶锐诚工程技术有限公司</span>
          <span>京ICP备07026202号 京公网安备11010802014973</span>
        </div>
      </div>
    </div>
    <div class="right">
      <img src="../../assets/image/login.png" alt />
    </div>
  </div>
  <!-- </div> -->
</template>
<script>
export default {
  components: {},
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
      },
      rules: {
        name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    async login() {
      let data = await this.$api.login(this.ruleForm);
      if (data.msg == "success") {
        this.$message({
          showClose: true,
          message: '登录成功',
          type: "success",
          offset: 300,
        });
        this.$store.commit('settoken',data.data.token)
        this.$router.push("/home");
        console.log(this.$store.state.token)
      } else {
        this.$message({
          showClose: true,
          message: data.msg,
          type: "warning",
          offset: 300,
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login();
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
.guoye_form {
  margin-top: 46px;

  .el-form-item {
    display: flex;
    flex-direction: column;
    .el-form-item__content {
      margin-left: 0 !important;
      // max-width: 360px;
      height: 48px !important;
      line-height: 48px !important;
    }
    .el-form-item__label {
      text-align: left;
      line-height: 48px;
      color: #010411;
      font-size: 16px;
    }
  }
}
</style>
<style lang="scss" scoped>
.login {
  display: flex;
  height: 100%;
  overflow-y: hidden;
  justify-content: space-between;
  .left {
    width: 45%;
    // padding-left: 120px;
    padding-top: 23px;
    .content {
      width: 60%;
      margin: 0 auto;
      .logo {
        > img {
          height: 38px;
        }
      }
      .title {
        color: #010411;
        margin-top: 120px;
        font-size: 32px;
      }
    }
  }
  .right {
    width: 55%;
    height: 100%;
    display: inline-block;
    > img {
      width: 100%;
      height: 100%;
    }
  }
}
.denglu {
  margin-top: 48px;
  display: flex;
  justify-content: flex-end;
}
.hint {
  margin-top: 148px;
  text-align: center;
  > span {
    color: #666666;
    display: block;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>