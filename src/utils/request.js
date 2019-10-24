import store from '../store'
import axios from 'axios'
import qs from 'qs'
// import common from './common'
import config from './config'
// 创建axios实例
const service = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
    'Accept': '*/*'
  },
  timeout: 15000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use(config => {
  return config
}, error => {
  console.log(error)
  return Promise.reject(error)
})
// respone拦截器
service.interceptors.response.use(
  response => {
    /* res.status不为1直接错误提示 */
    const res = response.data
    if (res.code === 1) {
      return res
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)// for debug
    return Promise.reject(error)
  }
)
/* 其他数据请求的通用方法 */
export function request (fun, data, isLoading) {
  if (!data) data = {}
  data.token = window.sessionStorage.getItem('token') || ''
  return service({
    'method': 'post',
    'data': qs.stringify(data),
    'url': `${config.API_PATH}/${fun}`
  })
}
