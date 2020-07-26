<!--
 * @Author: your name
 * @Date: 2020-07-06 10:11:02
 * @LastEditTime: 2020-07-06 10:15:37
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \bbb\guoye\src\page\home\index.vue
--> 
<template>
  <div class="register_box">
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
            <el-input v-model="ruleForm.name" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="real_name">
            <el-input v-model="ruleForm.real_name" maxlength="5"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" maxlength="6" type="password"></el-input>
          </el-form-item>
          <el-form-item label="确认姓名" prop="confirmname">
            <el-input v-model="ruleForm.confirmname" maxlength="5"></el-input>
          </el-form-item>
          <el-form-item label="联系电话" prop="mobile">
            <el-input v-model="ruleForm.mobile" maxlength="11"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱" prop="email">
            <el-input v-model="ruleForm.email" maxlength="30"></el-input>
          </el-form-item>
          <el-form-item label="传真号码" prop="fax">
            <el-input v-model="ruleForm.fax" maxlength="20"></el-input>
          </el-form-item>
          <el-form-item label="邮政编码" prop="postcode">
            <el-input v-model="ruleForm.postcode" maxlength="6"></el-input>
          </el-form-item>
          <el-form-item label="通讯地址" prop="address">
            <el-input v-model="ruleForm.address" maxlength="50"></el-input>
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
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入手机号"));
      } else if (!/^1(3|4|5|6|7|8|9)\d{9}$/.test(value)) {
        return callback(new Error("手机号码格式有误，请重填"));
      } else {
        callback();
      }
    };
    var emails = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入电子邮箱"));
      } else {
        callback();
      }
    };
    var postcodes = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("请输入邮政编码"));
      } else {
        callback();
      }
    };

    var confirmnames = (rule, value, callback) => {
      if (value == "") {
        return callback(new Error("请再次输入姓名"));
      } else if (value !== this.ruleForm.real_name) {
        return callback(new Error("两次输入姓名不一致!请重新输入"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "", //用户名
        password: "", //密码
        real_name: "", //姓名
        mobile: "", //联系电话
        email: "", //电子邮箱
        fax: "", //传真号码
        address: "", //通讯地址
        confirmname: "",
        postcode: "", //邮政编码
      },

      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 6, message: "请输入六位数密码", trigger: "blur" },
        ],
        real_name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
        mobile: [
          {
            validator: checkPhone,
            trigger: "blur",
          },
        ],
        email: [
          {
            validator: emails,
            trigger: "blur",
          },
        ],
        fax: [{ required: true, message: "请输入传真号码", trigger: "blur" }],
        address: [
          { required: true, message: "请输入通讯地址", trigger: "blur" },
        ],
        postcode: [
          {
            validator: postcodes,
            trigger: "blur",
          },
        ],
        confirmname: [
          {
            validator: confirmnames,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    async register() {
      let data = await this.$api.register(this.ruleForm);
      if (data.msg == "success") {
        this.$message({
          showClose: true,
          message: data.data,
          type: "success",
          offset: 300,
        });
        this.$router.push("/login");
      } else {
        this.$message({
          showClose: true,
          message: data.data,
          type: "warning",
          offset: 300,
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          delete this.ruleForm.confirmname;
          console.log(this.ruleForm);
          this.register();
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
.demo-ruleForm {
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  .el-form-item {
    width: 48%;
    display: flex;
    flex-direction: column;
    &:nth-child(2n) {
      margin-left: 2%;
    }
    .el-form-item__label {
      text-align: left;
      color: #010411;
      font-size: 14px;
      font-weight: bold;
      width: 130px;
    }
    .el-form-item__content {
      margin-left: 0 !important;
      margin-top: 0px;
    }
  }
}
.el-button.el-button--primary {
  width: 100%;
  margin-top: 20px;
}
</style>
<style lang="scss" scoped>
.register_box {
  height: 100%;
  overflow: hidden;
}
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
    // max-height: 730px;
    height: 100%;
  }
  .form {
    min-width: 865px;
    min-height: 690px;
    background-color: #fff;
    position: absolute;
    padding: 30px 42px 56px 42px;
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
