import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Input from 'src/components/Input';
import { schema } from 'src/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { useMutation } from '@tanstack/react-query';
import { omit } from 'lodash';
import { isAxiosUnprocessableEntityError } from 'src/utils/utils';
import { AppContext } from 'src/contexts/app.context';
import { useContext } from 'react';
import Button from 'src/components/Button';
import path from 'src/constants/path';
import authApi from 'src/apis/auth.api';
const registerSchema = schema.pick(['email', 'password', 'confirm_password']);
export default function Register() {
    var _a, _b, _c;
    const navigate = useNavigate();
    const { setIsAuthenticated, storeProfile } = useContext(AppContext);
    const { register, setError, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });
    const registerAccountMutation = useMutation({
        mutationFn: (body) => authApi.registerAccount(body)
    });
    const onSubmit = handleSubmit((data) => {
        const body = omit(data, ['confirm_password']);
        registerAccountMutation.mutate(body, {
            onSuccess: (data) => {
                setIsAuthenticated(true);
                storeProfile(data.data.data.user);
                navigate('/');
            },
            onError: (error) => {
                var _a;
                if (isAxiosUnprocessableEntityError(error)) {
                    const formError = (_a = error.response) === null || _a === void 0 ? void 0 : _a.data.data;
                    console.log('🚀 ~ formError:', formError);
                    if (formError === null || formError === void 0 ? void 0 : formError.email) {
                        Object.keys(formError).forEach((key) => {
                            setError(key, {
                                message: formError[key],
                                type: 'ServerError'
                            });
                        });
                    }
                }
            }
        });
    });
    return (_jsx("div", { className: 'bg-orange', children: _jsx("div", { className: 'container mx-auto px-4', children: _jsx("div", { className: 'grid grid-cols-1 lg:grid-cols-5 p-12 lg:py-32 lg:pr-10', children: _jsx("div", { className: 'lg:col-span-2 lg:col-start-4', children: _jsxs("form", { className: 'p-10 rounded-md bg-white shadow-sm', noValidate: true, onSubmit: onSubmit, children: [_jsx("div", { className: 'text-2xl', children: "\u0110\u0103ng K\u00FD" }), _jsx(Input, { type: 'email', errorMessage: (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message, placeholder: 'Email', className: 'mt-8', name: 'email', register: register, autoComplete: 'on' }), _jsx(Input, { type: 'password', errorMessage: (_b = errors.password) === null || _b === void 0 ? void 0 : _b.message, placeholder: 'Password', className: 'mt-2', name: 'password', register: register, autoComplete: 'on' }), _jsx(Input, { type: 'password', errorMessage: (_c = errors.confirm_password) === null || _c === void 0 ? void 0 : _c.message, placeholder: 'Nh\u1EADp l\u1EA1i password', className: 'mt-2', name: 'confirm_password', register: register, autoComplete: 'on' }), _jsxs("div", { className: 'mt-2', children: [_jsx(Button, { className: 'w-full ext-center py-4 px-2 uppercase bg-red-500 text-white hover:bg-red-600 flex justify-center items-center', isLoading: registerAccountMutation.isLoading, disabled: registerAccountMutation.isLoading, children: "\u0110\u0103ng K\u00FD" }), _jsx("div", { className: 'mt-8 text-xs text-center', children: "B\u1EB1ng vi\u1EC7c \u0111\u0103ng k\u00ED, b\u1EA1n \u0111\u00E3 \u0111\u1ED3ng \u00FD v\u1EDBi Shopee v\u1EC1" }), _jsxs("div", { className: 'text-xs text-center text-orange', children: ["\u0110i\u1EC1u kho\u1EA3n d\u1ECBch v\u1EE5 ", _jsx("span", { className: 'text-black', children: "&" }), " Ch\u00EDnh s\u00E1ch b\u1EA3o m\u1EADt"] }), _jsxs("div", { className: 'mt-2 flex justify-center items-center text-sm', children: [_jsx("span", { className: 'text-gray-400', children: "B\u1EA1n \u0111\u00E3 c\u00F3 t\u00E0i kho\u1EA3n?" }), _jsx(Link, { to: path.login, className: 'text-orange font-normal ml-1', children: "\u0110\u0103ng nh\u1EADp" })] })] })] }) }) }) }) }));
}
