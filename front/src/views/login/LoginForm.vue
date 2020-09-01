<template>
  <div class="left-container">
    <h3 class="form-title">用户登录</h3>
    <ValidationObserver v-slot="{ invalid }">
      <form action="post" @submit.prevent="onsubmit">
        <div class="imc-form-item">
          <div class="imc-form-item-user">
            <ValidationProvider name="email" rules="required|positive" v-slot="{ errors }">
              <input
                type="text"
                name="username"
                placeholder="用户名"
                autocomplete="off"
                class="imc-input"
                v-model="email"
              />
              <span>{{ errors[0] }}</span>
            </ValidationProvider>
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
          <button type="submit" :disabled="invalid" class="imc-form-item-login">登录</button>
        </div>
        <div class="imc-form-item-bottom-word">
          <p class="foget-password">忘记密码？</p>
          <p class="register" @click="linkToRegister()">注册账号</p>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { loginMixin } from '@/utils/mixin'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
export default {
  mixins: [loginMixin],
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    code: ''
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    onSubmit () {
      alert('foem')
    }
  }
}
</script>

<style lang="scss">
  .register {
    cursor: pointer;
  }
</style>
