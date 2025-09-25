import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useQuery } from '@tanstack/react-query';
import categoryApi from 'src/apis/category.api';
import productApi from 'src/apis/product.api';
import Pagination from 'src/components/Pagination';
import useQueryConfig from 'src/hooks/useQueryConfig';
import AsideFilter from 'src/pages/ProductList/components/AsideFilter';
import Product from 'src/pages/ProductList/components/Product/Product';
import SortProductList from 'src/pages/ProductList/components/SortProductList';
export default function ProductList() {
    //! Lấy ra các query params hiện tại của URL
    const queryConfig = useQueryConfig();
    const { data: productsData } = useQuery({
        //! Tham số đầu tiên của queryKey là tên của query, tham số thứ 2 là các query params
        queryKey: ['products', queryConfig],
        queryFn: () => productApi.getProductWithPagination(queryConfig),
        keepPreviousData: true
    });
    const { data: categoriesData } = useQuery({
        queryKey: ['categories'],
        queryFn: () => categoryApi.getCategories(),
        keepPreviousData: true,
        staleTime: 3 * 60 * 1000
    });
    return (_jsx("div", { className: 'bg-gray-200 py-6', children: _jsx("div", { className: 'container', children: productsData && (_jsxs("div", { className: 'grid grid-cols-12 gap-6', children: [_jsx("div", { className: 'col-span-3', children: _jsx(AsideFilter, { queryConfig: queryConfig, categories: (categoriesData === null || categoriesData === void 0 ? void 0 : categoriesData.data.data) || [] }) }), _jsxs("div", { className: 'col-span-9', children: [_jsx(SortProductList, { queryConfig: queryConfig, pageSize: productsData.data.data.pagination.page_size }), _jsx("div", { className: 'mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3', children: productsData.data.data.products.map((product) => (_jsx("div", { className: 'col-span-1', children: _jsx(Product, { product: product }) }, product._id))) }), _jsx(Pagination, { queryConfig: queryConfig, pageSize: productsData.data.data.pagination.page_size })] })] })) }) }));
}
