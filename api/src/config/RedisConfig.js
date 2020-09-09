import redis from 'redis'

const options = {
  host: '47.241.1.214',
  port: 15001,
  password: 123456,
  detect_buffers: true,
  retry_strategy: function (options) {
    if (options.error && options.error.code === 'ECONNREFUSED') {
      return new Error('The server refused the connection')
    }
    if (options.total_retry_time > 1000 * 60 * 60) {
      return new Error('Retry time exhausted')
    }
    if (options.attempt > 10) {
      return undefined
    }
    return Math.min(options.attempt * 100, 3000)
  }
}
// 创建实例
const client = redis.createClient(options)

//设置值
const setValue = (key, value, time) => {
  if (typeof value === 'undefined' || value === null || value === '') {
    return
  }

  if (typeof value === 'string') {
    if (typeof time !== 'undefined') {
      client.set(key, value, 'EX', time)
    } else {
      client.set(key, value)
    }
  } else if (typeof value === 'object') {
    // {key1: value1, key2: value2}
    // Object.keys(value) => [key1, key2]
    Object.keys(value).forEach((item) => {
      client.hset(key, item, value[item], redis.print)
    })
  }
}

//获取值
const { promisify } = require('util')
const getAsync = promisify(client.get).bind(client)

const getValue = (key) => {
  return getAsync(key)
}

const getHValue = (key) => {
  return promisify(client.hgetall).bind(client)(key)
}

export {
  client,
  getValue,
  setValue,
  getHValue
}