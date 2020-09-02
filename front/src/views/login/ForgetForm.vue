<template>
  <div class="left-container">
    <h3 class="form-title">找回密码</h3>
    <form action="post">
      <div class="imc-form-item">
        <div class="imc-form-item-user">
          <input
            type="text"
            name="username"
            placeholder="邮箱"
            autocomplete="off"
            class="imc-input"
          />
        </div>
      </div>
      <div class="imc-form-item">
        <div class="imc-form-item-password">
          <input
            type="password"
            name="username"
            placeholder="密码"
            autocomplete="off"
            class="imc-input"
          />
        </div>
      </div>
      <div class="imc-form-item">
        <div class="imc-form-item-password">
          <input
            type="password"
            name="username"
            placeholder="确认密码"
            autocomplete="off"
            class="imc-input"
          />
        </div>
      </div>
      <div class="imc-form-item">
        <button class="imc-form-item-login">提交</button>
      </div>
      <div class="imc-form-item-bottom-word">
        <p class="login" @click="linkToLogin()">已有账号？去登录</p>
      </div>
    </form>
  </div>
</template>

<script>
import { loginMixin } from '@/utils/mixin'
export default {
  mixins: [loginMixin],
  name: 'ForgetForm'
}
</script>

<style lang="scss" scoped>
  .login{
    cursor: pointer;
  }
</style>
