import http from 'src/utils/http';
const URL = 'purchases';
const purchaseApi = {
    addToCart: (body) => {
        return http.post(`${URL}/add-to-cart`, body);
    },
    getPurchasesByStatus: (params) => {
        return http.get(URL, { params });
    },
    buyProducts: (body) => {
        return http.post(`${URL}/buy-products`, body);
    },
    updatePurchase: (body) => {
        return http.put(`${URL}/update-purchase`, body);
    },
    deletePurchase: (body) => {
        return http.delete(`${URL}/purchases`, { data: body });
    }
};
export default purchaseApi;
