import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { message as antdMessage } from 'antd'
import to from 'await-to-js'
import { logPrettyJSON } from '@/helper/index.helper'
import { IS_DEV } from '@/env.config'


const instance = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API}/api`,
  timeout: 10000
})


instance.interceptors.response.use((response) => {
  if (!IS_DEV) {
    return response
  }
  if (response.status === 200) {
    console.groupCollapsed(`[api ${response.config.method}] ${response.config.url}`)
    response.config.method === 'get' && logPrettyJSON('request params', response.config.params)
    response.config.method === 'post' && logPrettyJSON('request params', JSON.parse(response.config.data))
    logPrettyJSON('response data', response.data)
    console.groupEnd()
  }
  return response
})

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response?.data?.code !== 0) {
      return Promise.reject(new Error(response?.data?.message || 'Unknown error'))
    }
    return response.data
  }, e => {
    return Promise.reject(new Error(e.response?.data?.message || e?.message || 'Unknown error'))
  }
)


export const request = async (url: string, method: 'GET' | 'POST', data?: any, config?: AxiosRequestConfig): Promise<any> => {
  const [error, response] = await to(instance.request({
    url,
    method,
    params: method === 'GET' ? data : undefined,
    data: method === 'POST' ? data : undefined,
    ...config
  }))
  if (error) {
    const message = error?.message
    message && antdMessage.error(message)
    return Promise.reject(error)
  }
  return response
}
