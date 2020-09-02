<template>
  <div class="left-container">
    <h3 class="form-title">用户登录</h3>
    <ValidationObserver v-slot="{ invalid }">
      <form action="post" @submit.prevent="onsubmit">
        <div class="imc-form-item">
          <div class="imc-form-item-user">
            <ValidationProvider mode="lazy" name="email" rules="required|email" v-slot="{ errors }">
              <input
                type="text"
                name="email"
                placeholder="用户名"
                autocomplete="off"
                class="imc-input"
                v-model="email"
              />
              <i class="iconfont icon-yonghu"></i>
              <span class="errMsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="imc-form-item">
          <div class="imc-form-item-password">
            <ValidationProvider mode="lazy" name="password" rules="required|min:8|verify_password" v-slot="{ errors }">
              <input
                type="password"
                name="password"
                placeholder="密码"
                autocomplete="off"
                class="imc-input"
                v-model="password"
              />
              <i class="iconfont icon-mima"></i>
              <span class="errMsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="imc-form-item">
          <div class="imc-form-item-password">
            <ValidationProvider mode="lazy" name="code" rules="required|length:4" v-slot="{ errors }">
              <input
                type="password"
                name="code"
                placeholder="验证码"
                autocomplete="off"
                class="imc-input"
                v-model="code"
              />
              <span class="captcha" v-html="svg" @click="getCaptcha()"></span>
              <span class="errMsg">{{ errors[0] }}</span>
            </ValidationProvider>
          </div>
        </div>
        <div class="imc-form-item">
          <button type="submit" :disabled="invalid" class="imc-form-item-login">登录</button>
        </div>
        <div class="imc-form-item-bottom-word">
          <p class="foget-password" @click="linkToForget()">忘记密码？</p>
          <p class="register" @click="linkToRegister()">注册账号</p>
        </div>
      </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { loginMixin } from '@/utils/mixin'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { getCode } from '@/api/login'
export default {
  mixins: [loginMixin],
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
    code: '',
    svg: ''
  }),
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    onSubmit () {
      alert('foem')
    },
    getCaptcha () {
      getCode().then((res) => {
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .register {
    cursor: pointer;
  }
  .errMsg {
    display:block;
    height: 18px;
    color: #e44d3a;
    font-size: 12px;
  }
</style>
