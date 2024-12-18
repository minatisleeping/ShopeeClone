import { User } from 'src/types/user.type'

export const storeAccessTokenToLocalStorage = (access_token: string) =>
  localStorage.setItem('access_token', access_token)

export const clearFromLocalStorage = () => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('profile')
}

export const getAccessTokenFromLocalStorage = () => localStorage.getItem('access_token') || ''

export const getProfileFromLS = () => JSON.parse(localStorage.getItem('profile') || '{}')

export const storeProfile = (profile: User) => localStorage.setItem('profile', JSON.stringify(profile))
