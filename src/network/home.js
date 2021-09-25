import { request } from "./request";

export function getHomeMultidata(config){
  // request({
  //   '/home/multidata'
  // })
  return request({
    url: '/home/multidata'
  })
}