import User from './test'

// 增
const user = {
  name: 'brian',
  age: 30,
  email: 'brian@example.com'
}

const insertMethods = async () => {
  const data = new User(user)
  const result = await data.save()
  console.log(result)
}
//查
const findMethods = async () => {
  const result = await User.find()
  console.log(result)
}

//改
const updateMethod = async () => {
  const result = await User.updateOne({name: 'hogan', email: 'hogan@dcpt.online'})
  console.log(result)
}

//删除
const deleteMethod = async () => {
  const result = await User.deleteOne({name: 'hogan'})
  console.log(result)
}
deleteMethod()