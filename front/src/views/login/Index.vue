<template>
  <div class="imc-container">
    <div class="imc-container-login">
      <login-form v-show="formStatus"></login-form>
      <reg-form v-show="!formStatus"></reg-form>
      <div class="right-container"></div>
    </div>
  </div>
</template>

<script>
import LoginForm from './LoginForm'
import RegForm from './RegForm'
import { loginMixin } from '@/utils/mixin'
export default {
  mixins: [loginMixin],
  name: 'Index',
  components: {
    LoginForm,
    RegForm
  },
  created: function () {
    const routeData = this.$route
    if (routeData.params.id.indexOf('register') !== -1) {
      console.log(1)
      this.setFormStatus(false)
    }
    if (routeData.params.id.indexOf('login') !== -1) {
      this.setFormStatus(true)
    }
  },
  watch: {
    $route (to, from) {
      console.log(to)
    }
  }
}
</script>

<style lang="scss">
  .imc-container {
    width: 100%;
    height: 100%;
    background-color: #f9cbb3;
    display: flex;
    justify-content: center;
    align-items: center;
    &-login {
      display: flex;
      width: 1000px;
      height: 600px;
      box-sizing: border-box;
    }
    .left-container {
      flex: 1;
      background: #fff;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 0 30px;
      box-sizing: border-box;
      .form-title {
        display: flex;
        align-items: flex-end;
        height: 150px;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 50px;
      }
      .imc-form-item {
        position: relative;
        input {
          width: 100%;
          outline: none;
          border: 0;
          padding: 20px 0;
          border-bottom: 1px solid #bfbfbf;
        }
        .iconfont {
          position: absolute;
          right: 0;
          top: 24px;
        }
        &-login {
          width: 160px;
          height: 50px;
          background: #e44d3a;
          border-radius: 25px;
          border: none;
          color: #fff;
          font-size: 18px;
          font-weight: bold;
          margin-top: 50px;
        }
        &-bottom-word {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
          color: #e44d3a;
        }
      }
    }
    .right-container {
      width: 630px;
      height: 100%;
      background: url('../../assets/images/login-bg.jpg') #fff no-repeat;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    .foget-password {
      cursor: pointer;
    }
  }
</style>
