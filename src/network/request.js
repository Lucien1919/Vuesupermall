import axios from 'axios'

export function request(config){
  //1.创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  //2.axios请求拦截器
  instance.interceptors.request.use(config =>{
    return config
  },err=>{
    console.log(err)
  })

  //3.2.axios响应拦截器
  instance.interceptors.respones.use(res =>{
    return res.data
  },err=>{
    console.log(err)
  })

  return instance(config)
}