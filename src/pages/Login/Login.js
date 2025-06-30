import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import Input from 'src/components/Input';
import { AppContext } from 'src/contexts/app.context';
import { schema } from 'src/utils/rules';
import { isAxiosUnprocessableEntityError } from 'src/utils/utils';
import Button from 'src/components/Button';
import authApi from 'src/apis/auth.api';
const loginSchema = schema.pick(['email', 'password']);
export default function Login() {
    var _a, _b;
    const { setIsAuthenticated, storeProfile } = useContext(AppContext);
    const navigate = useNavigate();
    const { register, setError, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });
    const loginMutation = useMutation({
        mutationFn: (body) => authApi.login(body)
    });
    const onSubmit = handleSubmit((data) => {
        loginMutation.mutate(data, {
            onSuccess: (data) => {
                console.log('🚀 ~ data:', data);
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
    return (_jsx("div", { className: 'bg-orange', children: _jsx("div", { className: 'container mx-auto px-4', children: _jsx("div", { className: 'grid grid-cols-1 lg:grid-cols-5 p-12 lg:py-32 lg:pr-10', children: _jsx("div", { className: 'lg:col-span-2 lg:col-start-4', children: _jsxs("form", { className: 'p-10 rounded-md bg-white shadow-sm', onSubmit: onSubmit, noValidate: true, children: [_jsx("div", { className: 'text-2xl', children: "\u0110\u0103ng Nh\u1EADp" }), _jsx(Input, { type: 'email', errorMessage: (_a = errors.email) === null || _a === void 0 ? void 0 : _a.message, placeholder: 'Email', className: 'mt-8', name: 'email', register: register, autoComplete: 'on' }), _jsx(Input, { type: 'password', errorMessage: (_b = errors.password) === null || _b === void 0 ? void 0 : _b.message, placeholder: 'Password', className: 'mt-2', name: 'password', register: register, autoComplete: 'on' }), _jsxs("div", { className: 'mt-3', children: [_jsx(Button, { className: 'w-full ext-center py-4 px-2 uppercase bg-red-500 text-white hover:bg-red-600 flex justify-center items-center', isLoading: loginMutation.isLoading, disabled: loginMutation.isLoading, children: "\u0110\u0103ng nh\u1EADp" }), _jsxs("div", { className: 'mt-5 flex justify-center items-center text-sm', children: [_jsx("span", { className: 'text-gray-400', children: "B\u1EA1n ch\u01B0a c\u00F3 t\u00E0i kho\u1EA3n?" }), _jsx(Link, { to: '/register', className: 'text-orange font-normal ml-1', children: "\u0110\u0103ng k\u00FD" })] })] })] }) }) }) }) }));
}
