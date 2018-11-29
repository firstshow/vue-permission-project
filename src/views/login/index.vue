<template>
  <div class="login-container">
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on"
             label-position="left">

      <div class="title-container">
        <h3 class="title">登录管理系统</h3>
      </div>

      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user"/>
        </span>
        <el-input
          v-model="loginForm.username"
          placeholder="请输入账号"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password"/>
        </span>
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          placeholder="请输入密码"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin"/>
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye"/>
        </span>
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%; margin-bottom:30px;"
                 @click.native.prevent="handleLogin">登录
      </el-button>
    </el-form>
  </div>
</template>

<script>
import '../../icons/svg/user.svg'
import { checkPwd } from '@/untils/verify'
// import LangSelect from '@/components/LangSelect'

export default {
  name: 'Login',
  // components: { LangSelect, SocialSign },
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (!checkPwd(value)) {
        callback(new Error('密码为6-16位的数字和字母'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      passwordType: 'password',
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  methods: {
    showPwd () {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log(333)
          this.loading = true
          this.$store.dispatch('LoginServer', this.loginForm).then(res => {
            this.loading = false
            this.$router.push({ path: '/home' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="scss">
/* 修复input 背景不协调 和光标变色 */

$bg: #283443;
$light_gray: #eee;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
    &::first-line {
      color: $light_gray;
    }
  }
}

/* reset element-ui css */

.login-container { // stylelint-disable-line
  .el-input {
    display: inline-block;
    width: 85%;
    height: 47px;
    input {
      height: 47px;
      padding: 12px 5px 12px 15px;
      border: 0;
      border-radius: 0;
      background: transparent;
      -webkit-appearance: none;
      color: $light_gray;
      caret-color: $cursor;
      &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 1000px $bg inset !important;
        -webkit-text-fill-color: $cursor !important;
      }
    }
  }
  .el-form-item {
    border: 1px solid rgba(255,255,255,.1);
    border-radius: 5px;
    background: rgba(0,0,0,.1);
    color: #454545;
  }
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;

.login-container { // stylelint-disable-line
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $bg;
  .login-form {
    position: absolute;
    right: 0;
    left: 0;
    width: 520px;
    max-width: 100%;
    margin: 120px auto;
    padding: 35px 35px 15px 35px;
  }
  .tips {
    margin-bottom: 10px;
    color: #fff;
    font-size: 14px;
    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }
  .svg-container {
    display: inline-block;
    width: 30px;
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
  }
  .title-container {
    position: relative;
    .title {
      margin: 0 auto 40px auto;
      text-align: center;
      color: $light_gray;
      font-weight: bold;
      font-size: 26px;
    }
    .set-language {
      position: absolute;
      top: 5px;
      right: 0;
      color: #fff;
    }
  }
  .show-pwd {
    position: absolute;
    top: 7px;
    right: 10px;
    color: $dark_gray;
    font-size: 16px;
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
