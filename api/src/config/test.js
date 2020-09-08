import { getValue, setValue, getHValue } from './RedisConfig'

setValue('imooc', 'imooc message from redis client')

getValue('imooc').then((res) => {
  console.log('getValue:' + res)
})

setValue('imoocobj', {name: 'hogan', age: 29, email: 'hogan@example.com'})

getHValue('imoocobj').then((res) => {
  console.log('getHValue:' + JSON.stringify(res, null, 2))
})