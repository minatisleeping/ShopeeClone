import http from 'src/utils/http';
const URL = '/products';
const productApi = {
    getProductWithPagination: (params) => {
        return http.get(URL, { params });
    },
    getProductDetail: (_id) => {
        return http.get(`${URL}/${_id}`);
    }
};
export default productApi;
