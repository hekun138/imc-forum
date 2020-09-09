import svgCaptcha from 'svg-captcha'
import { getValue, setValue } from '../config/RedisConfig'

class PublicController {
  constructor() {}
  async getCaptcha(ctx) {
    const body = ctx.request.query
    console.log(body.sid)
    const newCaptca = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      color: true,
      noise: Math.floor(Math.random() * 5),
      width: 130,
      height: 50,
    })
    // 保存图片验证码数据，设置超时时间，单位：s
    // 设置图片验证码超时10分钟
    console.log(newCaptca.text)
    setValue(body.sid, newCaptca.text, 10 * 60)
    ctx.body = {
      code: 200,
      data: newCaptca.data,
    }
  }
}

export default new PublicController()
