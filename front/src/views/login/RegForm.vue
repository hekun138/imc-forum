<template>
  <div class="left-container">
    <h3 class="form-title">用户注册</h3>
    <form action="post">
      <div class="imc-form-item">
        <div class="imc-form-item-user">
          <input
            type="text"
            name="username"
            placeholder="用户名"
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
        <button class="imc-form-item-login">登录</button>
      </div>
      <div class="imc-form-item-bottom-word">
        <p class="foget-password">忘记密码？</p>
        <p class="register">注册账号</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>
