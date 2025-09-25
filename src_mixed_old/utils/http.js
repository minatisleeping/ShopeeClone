import axios from 'axios';
import { StatusCodes } from 'http-status-codes';
import { toast } from 'react-toastify';
import { getAccessTokenFromLocalStorage, clearFromLocalStorage, storeAccessTokenToLocalStorage, storeProfile } from './auth';
import path from 'src/constants/path';
class Http {
    constructor() {
        Object.defineProperty(this, "instance", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "access_token", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.access_token = getAccessTokenFromLocalStorage();
        this.instance = axios.create({
            baseURL: 'https://api-ecom.duthanhduoc.com/',
            timeout: 10000,
            headers: { 'Content-Type': 'application/json' }
        });
        this.instance.interceptors.request.use((config) => {
            if (this.access_token && config.headers) {
                config.headers.authorization = this.access_token;
                return config;
            }
            return config;
        }, (error) => {
            return Promise.reject(error);
        });
        this.instance.interceptors.response.use((response) => {
            const { url } = response.config;
            if (url === path.login || url === path.register) {
                const data = response.data;
                this.access_token = response.data.data.access_token;
                storeAccessTokenToLocalStorage(this.access_token);
                storeProfile(data.data.user);
                return response;
            }
            else if (url === path.logout) {
                this.access_token = '';
                clearFromLocalStorage();
                return response;
            }
            return response;
        }, (error) => {
            var _a, _b;
            if (((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) !== StatusCodes.UNPROCESSABLE_ENTITY) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const data = (_b = error.response) === null || _b === void 0 ? void 0 : _b.data;
                const message = data.message || error.message;
                toast.error(message);
            }
            return Promise.reject(error);
        });
    }
}
const http = new Http().instance;
export default http;
