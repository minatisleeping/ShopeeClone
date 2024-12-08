import axios, { AxiosError } from 'axios'
import { StatusCodes } from 'http-status-codes'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error)
}

export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === StatusCodes.UNPROCESSABLE_ENTITY
}
