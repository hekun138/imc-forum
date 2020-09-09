export default (ctx, next) => {
  return next().catch(err => {
    if (err.status === 401) {
      ctx.status = 401
      ctx.body = { 
        code: 401,
        msg: '用户没有权限'
      }
    } else {
      throw err
    }
  })
}