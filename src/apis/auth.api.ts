import { AuthResponse } from '../types/auth.type'
import http from '../utils/http'

export const registerAccount = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/registerr', body)
}

export const login = (body: { email: string; password: string }) => {
  return http.post<AuthResponse>('/login', body)
}
