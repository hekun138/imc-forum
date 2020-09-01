import { extend, localize } from 'vee-validate'
import { required, email, min } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('required', {
  ...required
})
extend('email', {
  ...email,
  message: '请输入正确的邮箱地址'
})
extend('min', min)

extend('verify_password', {
  message: '密码至少包含一个大写字母、小写字母、数字和特殊字符',
  validate: value => {
    var strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!?@#$%^&*])(?=.{8,})')
    return strongRegex.test(value)
  }
})

localize('zh', {
  messages: zh.messages,
  names: {
    email: '邮箱',
    password: '密码'
  },
  fields: {
    email: {
      required: '{_field_}不能为空'
    },
    password: {
      required: '{_field_}不能为空'
    }
  }
})
