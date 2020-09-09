import send from "../config/MailConfig"
import moment from "moment"
import jsonwebtoken from 'jsonwebtoken'
import config from '../config/index'
import { checkCode } from '../common/Utils'
import User from '../model/User'

class LoginController {
  constructor (props) {}
  async forget (ctx) {
    const { body } = ctx.request
    try {
      let result = await send({
        code: '1234',
        expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
        email: body.username,
        user: 'Brian'
      })
      ctx.body = {
        code: 200,
        data: result,
        msg: '邮件发送成功'
      }
    } catch (e) {
      console.log(e)
    }
  }

  async login (ctx) {
    // 接收用户的数据
    // 验证图片验证码的时效性、正确性
    // 验证用户账号密码是否正确
    // 返回token
    const { body } = ctx.request
    let sid = body.sid
    let code = body.code
    // 验证图片验证码的时效性、正确性
    if (checkCode(sid, code)) {
      // 验证用户账号密码是否正确
      let checkUserPassword = false
      let user = await User.findOne({ username: body.username })
      if (user.password === body.password) {
        checkUserPassword = true
      }
      // mongoDB查库
      if (checkUserPassword) {
        // 验证通过,返回token数据
        console.log('hello token')
        let token = jsonwebtoken.sign({ _id: 'hogan' }, config.JWT_SECRET, {
          expiresIn: '1d'
        })

        ctx.body = {
          code: '200',
          token: token
        }
      } else {
        // 用户名密码验证失败，返回提示
        ctx.body = {
          code: 404,
          msg: '用户名或密码错误'
        }
      }

    } else {
      // 图片验证码校验失败
      ctx.body = {
        code: 401,
        msg: '图片验证码不正确，请检查！'
      }
    }
  }
}

export default new LoginController()
