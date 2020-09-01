import Vue from 'vue'
import { extend, localize } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)
extend('min', min)

extend('positive', value => {
  if (value >= 0) {
    return true
  }

  return '必须为正整数'
})

localize({
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式'
    },
    attributes: {
      email: '邮箱',
      password: '密码',
      name: '账号'
    }
  }
})

let LOCALE = 'zh-CN'

Object.defineProperty(Vue.prototype, 'locale', {
  get () {
    return LOCALE
  },
  set (val) {
    LOCALE = val
    localize(val)
  }
})
