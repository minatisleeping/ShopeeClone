export const storeAccessTokenToLocalStorage = (accessToken: string) => localStorage.setItem('accessToken', accessToken)
export const clearAccessTokenFromLocalStorage = () => localStorage.removeItem('accessToken')
export const getAccessTokenFromLocalStorage = () => localStorage.getItem('accessToken') || ''
