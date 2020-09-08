import axios from '@/utils/request'

const getCode = async () => {
  return axios.get('/getCaptcha')
}

const forget = async option => {
  return axios.post('/forget', {
    ...option
  })
}

export {
  getCode,
  forget
}
