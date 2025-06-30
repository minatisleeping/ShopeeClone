import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import Button from 'src/components/Button';
import InputNumber from 'src/components/InputNumber';
import path from 'src/constants/path';
import { useForm, Controller } from 'react-hook-form';
import { schema } from 'src/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import RatingStar from 'src/pages/ProductList/components/RatingStar';
import { omit } from 'lodash';
import InputV2 from 'src/components/InputV2';
const priceSchema = schema.pick(['price_min', 'price_max']);
export default function AsideFilter({ queryConfig, categories }) {
    var _a;
    const { category } = queryConfig;
    const { control, handleSubmit, trigger, formState: { errors } } = useForm({
        defaultValues: {
            price_min: '',
            price_max: ''
        },
        resolver: yupResolver(priceSchema)
    });
    const navigate = useNavigate();
    const onSubmit = handleSubmit((data) => {
        navigate({
            pathname: path.home,
            search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { price_max: data.price_max, price_min: data.price_min })).toString()
        });
    });
    const handleRemoveAll = () => {
        navigate({
            pathname: path.home,
            search: createSearchParams(omit(queryConfig, ['price_min', 'price_max', 'rating_filter', 'category'])).toString()
        });
    };
    return (_jsxs("div", { className: 'py-4', children: [_jsxs(Link, { to: path.home, className: classNames('flex items-center font-bold', {
                    'text-orange': !category
                }), children: [_jsx("svg", { viewBox: '0 0 12 10', className: 'mr-3 h-4 w-3 fill-current', children: _jsx("g", { fillRule: 'evenodd', stroke: 'none', strokeWidth: 1, children: _jsx("g", { transform: 'translate(-373 -208)', children: _jsx("g", { transform: 'translate(155 191)', children: _jsxs("g", { transform: 'translate(218 17)', children: [_jsx("path", { d: 'm0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' }), _jsx("path", { d: 'm0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' }), _jsx("path", { d: 'm0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z' })] }) }) }) }) }), "T\u1EA5t c\u1EA3 danh m\u1EE5c"] }), _jsx("div", { className: 'my-4 h-[1px] bg-gray-300' }), _jsx("ul", { children: categories.map((categoryItem) => {
                    const isActive = category === categoryItem._id;
                    return (_jsx("li", { className: 'py-2 pl-2', children: _jsxs(Link, { to: {
                                pathname: path.home,
                                search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { category: categoryItem._id })).toString()
                            }, className: classNames('relative px-2', {
                                'font-semibold text-orange': isActive
                            }), children: [isActive && (_jsx("svg", { viewBox: '0 0 4 7', className: 'absolute top-1 left-[-10px] h-2 w-2 fill-orange', children: _jsx("polygon", { points: '4 3.5 0 0 0 7' }) })), categoryItem.name] }) }, categoryItem._id));
                }) }), _jsxs(Link, { to: path.home, className: 'mt-4 flex items-center font-bold uppercase', children: [_jsx("svg", { enableBackground: 'new 0 0 15 15', viewBox: '0 0 15 15', x: 0, y: 0, className: 'mr-3 h-4 w-3 fill-current stroke-current', children: _jsx("g", { children: _jsx("polyline", { fill: 'none', points: '5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }) }) }), "B\u1ED9 l\u1ECDc t\u00ECm ki\u1EBFm"] }), _jsx("div", { className: 'my-4 h-[1px] bg-gray-300' }), _jsxs("div", { className: 'my-5', children: [_jsx("div", { children: "Kho\u1EA3ng gi\u00E1" }), _jsxs("form", { className: 'mt-2', onSubmit: onSubmit, children: [_jsxs("div", { className: 'flex items-start', children: [_jsx(InputV2, { control: control, name: 'price_min', type: 'number', className: 'grow', placeholder: '\u20AB T\u1EEA', classNameInput: 'p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm', classNameError: 'hidden', onChange: () => {
                                            trigger('price_max');
                                        } }), _jsx("div", { className: 'mx-2 mt-2 shrink-0', children: "-" }), _jsx(Controller, { control: control, name: 'price_max', render: ({ field }) => {
                                            return (_jsx(InputNumber, Object.assign({ type: 'text', className: 'grow', placeholder: '\u20AB \u0110\u1EBEN', classNameInput: 'p-1 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm', classNameError: 'hidden' }, field, { onChange: (event) => {
                                                    field.onChange(event);
                                                    trigger('price_min');
                                                } })));
                                        } })] }), _jsx("div", { className: 'mt-1 min-h-[1.25rem] text-center text-sm text-red-600', children: (_a = errors.price_min) === null || _a === void 0 ? void 0 : _a.message }), _jsx(Button, { className: 'flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80', children: "\u00C1p d\u1EE5ng" })] })] }), _jsx("div", { className: 'my-4 h-[1px] bg-gray-300' }), _jsx("div", { className: 'text-sm', children: "\u0110\u00E1nh gi\u00E1" }), _jsx(RatingStar, { queryConfig: queryConfig }), _jsx("div", { className: 'bg-gray-300 h-[1px] my-4' }), _jsx(Button, { className: 'flex w-full items-center justify-center bg-orange p-2 text-sm uppercase text-white hover:bg-orange/80', onClick: handleRemoveAll, children: "Xo\u00E1 t\u1EA5t c\u1EA3" })] }));
}
