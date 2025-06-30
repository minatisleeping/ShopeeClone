import { jsx as _jsx } from "react/jsx-runtime";
/* eslint-disable react-refresh/only-export-components */
import { Navigate, Outlet, useRoutes } from 'react-router';
import Login from './Login';
import ProductList from './ProductList';
import Register from './Register';
import Profile from './Profile';
import { useContext } from 'react';
import { AppContext } from 'src/contexts/app.context';
import path from 'src/constants/path';
import MainLayout from 'src/layouts/MainLayout';
import RegisterLayout from 'src/layouts/RegisterLayout';
import ProductDetail from 'src/pages/ProductDetail';
import Cart from './Cart';
const ProtectedRoutes = () => {
    const { isAuthenticated } = useContext(AppContext);
    return isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: '/login' });
};
const RejectedRoutes = () => {
    const { isAuthenticated } = useContext(AppContext);
    return !isAuthenticated ? _jsx(Outlet, {}) : _jsx(Navigate, { to: '/' });
};
export default function useRouteElements() {
    const routeElements = useRoutes([
        {
            path: path.home,
            index: true,
            element: (_jsx(MainLayout, { children: _jsx(ProductList, {}) }))
        },
        {
            path: path.home,
            element: _jsx(ProtectedRoutes, {}),
            children: [
                {
                    path: path.profile,
                    element: (_jsx(MainLayout, { children: _jsx(Profile, {}) }))
                },
                {
                    path: path.cart,
                    element: (_jsx(MainLayout, { children: _jsx(Cart, {}) }))
                }
            ]
        },
        {
            path: path.productDetail,
            element: (_jsx(MainLayout, { children: _jsx(ProductDetail, {}) }))
        },
        {
            path: path.home,
            element: _jsx(RejectedRoutes, {}),
            children: [
                {
                    path: path.login,
                    element: (_jsx(RegisterLayout, { children: _jsx(Login, {}) }))
                },
                {
                    path: path.register,
                    element: (_jsx(RegisterLayout, { children: _jsx(Register, {}) }))
                }
            ]
        }
    ]);
    return routeElements;
}
