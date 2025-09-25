import path from 'src/constants/path';
import http from 'src/utils/http';
const authApi = {
    registerAccount: (body) => {
        return http.post(path.register, body);
    },
    login: (body) => {
        return http.post(path.login, body);
    },
    logout: () => {
        return http.post(path.logout);
    }
};
export default authApi;
