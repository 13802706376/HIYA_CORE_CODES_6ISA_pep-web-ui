<template>
  <div class="login-container">
    <h3 class="title">政经平台</h3>
    <el-form autoComplete="on" ref="loginForm" label-position="left" label-width="0px"
      class="card-box login-form">
      <div class="sub-title">工号或企业邮箱前缀
        <el-popover
          placement="top-start"
          width="320"
          trigger="click"
          content="若你的企业邮箱为abc@yunnex.com，则企业邮箱前缀为abc">
          <label slot="reference" class="el-icon-question"></label>
          </el-popover>
      </div>
      <el-form-item prop="username">
        <el-input name="username" type="text" v-model.trim="loginForm.username" autoComplete="on" />
      </el-form-item>
      <div class="sub-title">密码</div>
      <el-form-item prop="password" class="depart-el-form">
        <el-input name="password" :type="pwdType" @keyup.enter.native="handleLogin" v-model="loginForm.password" autoComplete="on"></el-input>
        <span class="show-pwd" @click="showPwd"><i class="el-icon-view" /></span>
      </el-form-item>
      <div class="remember-content">
        <el-checkbox class="left" v-model="loginForm.rememberMe">记住我</el-checkbox>
        <a href="javascript:void(0);" class="right" @click="open">忘记密码？</a>
      </div>
      <el-form-item class="depart-el-button">
        <el-button type="primary" style="width:100%;" :loading="loading" @click.native.prevent="handleLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { Local } from "@/utils";
import store from "@/store"
import config from '@/utils/config'

export default {
  name: "login",
  data() {
    return {
      loginForm: {          
        username: "admin",
        password: "123456",
        rememberMe:true,
      },
      loading: false,
      pwdType: "password",
    };      
  },
  beforeRouteEnter(to, from, next) {
    const loginInfos = Local.get(config.LOGININFOS, 1);
    if (loginInfos && loginInfos !== "exceed_time") {
      store.dispatch("Login", loginInfos).then(() => {
        next({ path: "/" });
      });
    } else {
      next();
    }
  },
  methods: {
    open() {
      this.$alert(
        "请发送邮件到<xxx@yunnex.com>申请重置密码。（PS：邮件主题：【重置密码】政经平台_姓名_工号）",
        {
          confirmButtonText: "我知道了",
          callback: action => {}
        }
      );
    },
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.loading = true;
      this.$store.dispatch("Login", this.loginForm).then(() => {
          this.loading = false;
          if (this.loginForm.rememberMe) {
            Local.set(config.LOGININFOS, this.loginForm);
          }
          this.$router.push({ path: "/" });
        }).catch(() => {
          this.loading = false;
        });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
@import "@/assets/styles/variables.scss";
$bg: #f2f2f2;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container {
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: $bg;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  .el-input {
    display: inline-block;
  }
  .sub-title {
    font-size: 15px;
    color: #606266;
  }
  .remember-content {
    overflow: hidden;
    .left {
      float: left;
    }
    .right {
      float: right;
      color: $mainColor;
      font-size: 14px;
    }
  }
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #fff inset !important;
    -webkit-text-fill-color: #606266 !important;
  }
  .depart-el-form {
    margin-bottom: 18px;
  }
  .depart-el-button {
    margin-top: 10px;
  }
  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }
  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
    &_login {
      font-size: 20px;
    }
  }
  .sub-title {
    .el-icon-question {
      cursor: pointer;
      color: $mainColor;
    }
    margin-bottom: 10px;
  }
  .title {
    font-size: 26px;
    font-weight: 400;
    color: $mainColor;
    margin: 120px auto 20px auto;
    text-align: center;
    font-weight: bold;
  }
  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 0px auto;
    background: #fff;
  }
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
  .el-form-item__content {
    .show-pwd {
      top: 4px;
      i {
        font-size: 18px;
      }
    }
  }
  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
  .thirdparty-button {
    position: absolute;
    right: 35px;
    bottom: 28px;
  }
}
</style>
