export const storeAccessTokenToLocalStorage = (access_token) => localStorage.setItem('access_token', access_token);
export const clearFromLocalStorage = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('profile');
};
export const getAccessTokenFromLocalStorage = () => localStorage.getItem('access_token') || '';
export const getProfileFromLS = () => JSON.parse(localStorage.getItem('profile') || '{}');
export const storeProfile = (profile) => localStorage.setItem('profile', JSON.stringify(profile));
