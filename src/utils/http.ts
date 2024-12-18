import axios, { AxiosError, type AxiosInstance } from 'axios'
import { StatusCodes } from 'http-status-codes'
import { toast } from 'react-toastify'
import {
  getAccessTokenFromLocalStorage,
  clearAccessTokenFromLocalStorage,
  storeAccessTokenToLocalStorage
} from './auth'
import path from 'src/constants/path'
import { AuthResponse } from 'src/types/auth.type'

class Http {
  instance: AxiosInstance
  private accessToken: string

  constructor() {
    this.accessToken = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.authorization = this.accessToken
          return config
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === path.login || url === path.register) {
          this.accessToken = (response.data as AuthResponse).data.access_token
          storeAccessTokenToLocalStorage(this.accessToken)

          return response
        } else if (url === path.logout) {
          this.accessToken = ''
          clearAccessTokenFromLocalStorage()

          return response
        }

        return response
      },
      (error: AxiosError) => {
        if (error.response?.status !== StatusCodes.UNPROCESSABLE_ENTITY) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const data: any | undefined = error.response?.data
          const message = data.message || error.message
          toast.error(message)
        }
        return Promise.reject(error)
      }
    )
  }
}

const http = new Http().instance
export default http
