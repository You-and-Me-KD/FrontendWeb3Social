import { IAxiosResponse } from '@/types/common'
import { envConfig } from '@/utils'
import axios, { AxiosError, AxiosResponse } from 'axios'

// Make it to custom for microservices request in BE
const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL })

  const handleSuccess = (response: AxiosResponse) => {
    return response.data
  }

  const handleError = (error: AxiosError) => {
    const originalError = error.response!.data as IAxiosResponse
    console.log(originalError, 'originalError')
    return Promise.reject(originalError || error)
  }

  // instance.interceptors.request.use(
  //   async (config) => {
  //     // TODO: add token
  //     //   const token = "token";
  //     //   if (token) config.headers.Authorization = `Bearer ${token}`;
  //     return config;
  //   },
  //   (error) => Promise.reject(error)
  // );

  instance.interceptors.response.use(handleSuccess, handleError)

  return instance
}

export const authRequest = createAxiosInstance(envConfig.AUTH_API)
