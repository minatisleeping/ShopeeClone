import axios, { AxiosError, type AxiosInstance } from 'axios'
import { StatusCodes } from 'http-status-codes'
import { toast } from 'react-toastify'
import {
  getAccessTokenFromLocalStorage,
  clearFromLocalStorage,
  storeAccessTokenToLocalStorage,
  storeProfile
} from './auth'
import path from 'src/constants/path'
import { AuthResponse } from 'src/types/auth.type'

class Http {
  instance: AxiosInstance
  private access_token: string

  constructor() {
    this.access_token = getAccessTokenFromLocalStorage()
    this.instance = axios.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: { 'Content-Type': 'application/json' }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.access_token && config.headers) {
          config.headers.authorization = this.access_token
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
          const data = response.data as AuthResponse
          this.access_token = (response.data as AuthResponse).data.access_token
          storeAccessTokenToLocalStorage(this.access_token)
          storeProfile(data.data.user)

          return response
        } else if (url === path.logout) {
          this.access_token = ''
          clearFromLocalStorage()

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
