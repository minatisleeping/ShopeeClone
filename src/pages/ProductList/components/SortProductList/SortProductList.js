import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { omit } from 'lodash';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import path from 'src/constants/path';
import { sortBy, order as orderConst } from 'src/constants/product';
export default function SortProductList({ queryConfig, pageSize }) {
    const page = Number(queryConfig.page);
    const { sort_by = sortBy.createdAt, order } = queryConfig;
    const navigate = useNavigate();
    const isActiveSortBy = (sortByValue) => {
        return sort_by === sortByValue;
    };
    const handleSort = (sortByValue) => {
        navigate({
            pathname: path.home,
            search: createSearchParams(omit(Object.assign(Object.assign({}, queryConfig), { sort_by: sortByValue }), ['order'])).toString()
        });
    };
    const handlePriceOrder = (orderValue) => {
        navigate({
            pathname: path.home,
            search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { sort_by: sortBy.price, order: orderValue })).toString()
        });
    };
    return (_jsx("div", { className: 'bg-gray-300/40 py-4 px-3', children: _jsxs("div", { className: 'flex flex-wrap items-center justify-between gap-2', children: [_jsxs("div", { className: 'flex flex-wrap items-center gap-2', children: [_jsx("div", { children: "S\u1EAFp x\u1EBFp theo" }), _jsx("button", { className: classNames('h-9 px-4 capitalize text-sm text-center', {
                                'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.view),
                                'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.view)
                            }), onClick: () => handleSort(sortBy.view), children: "Li\u00EAn quan" }), _jsx("button", { className: classNames('h-9 px-4 capitalize text-sm text-center', {
                                'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.createdAt),
                                'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.createdAt)
                            }), onClick: () => handleSort(sortBy.createdAt), children: "M\u1EDBi nh\u1EA5t" }), _jsx("button", { className: classNames('h-9 px-4 capitalize text-sm text-center', {
                                'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.sold),
                                'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.sold)
                            }), onClick: () => handleSort(sortBy.sold), children: "B\u00E1n ch\u1EA1y" }), _jsxs("select", { className: classNames('h-9 px-4 capitalize text-sm text-center', {
                                'bg-orange text-white hover:bg-orange/80': isActiveSortBy(sortBy.price),
                                'bg-white text-black hover:bg-slate-100': !isActiveSortBy(sortBy.price)
                            }), value: order || '', onChange: (e) => handlePriceOrder(e.target.value), children: [_jsx("option", { defaultValue: '', disabled: true, children: "Gi\u00E1" }), _jsx("option", { value: orderConst.asc, children: "Gi\u00E1: Th\u1EA5p \u0111\u1EBFn Cao" }), _jsx("option", { value: orderConst.desc, children: "Gi\u00E1: Cao \u0111\u1EBFn Th\u1EA5p" })] })] }), _jsxs("div", { className: 'flex items-center', children: [_jsxs("div", { children: [_jsx("span", { className: 'text-orange', children: page }), _jsxs("span", { children: ["/", pageSize] })] }), _jsxs("div", { className: 'ml-5 flex', children: [page === 1 ? (_jsx("span", { className: 'flex justify-center items-center w-9 h-8 rounded-tl-sm bg-white/60 hover:bg-slate-100 shadow cursor-not-allowed', children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-3 h-3', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M15.75 19.5 8.25 12l7.5-7.5' }) }) })) : (_jsx(Link, { to: {
                                        pathname: path.home,
                                        search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { page: String(page - 1) })).toString()
                                    }, className: 'flex justify-center items-center w-9 h-8 rounded-tl-sm bg-white hover:bg-slate-100 shadow', children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-3 h-3', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M15.75 19.5 8.25 12l7.5-7.5' }) }) })), page === pageSize ? (_jsx("span", { className: 'flex justify-center items-center w-9 h-8 rounded-tl-sm bg-white/60 hover:bg-slate-100 shadow cursor-not-allowed', children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-3 h-3', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'm8.25 4.5 7.5 7.5-7.5 7.5' }) }) })) : (_jsx(Link, { to: {
                                        pathname: path.home,
                                        search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { page: String(page + 1) })).toString()
                                    }, className: 'flex justify-center items-center w-9 h-8 rounded-tl-sm bg-white hover:bg-slate-100 shadow', children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'w-3 h-3', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'm8.25 4.5 7.5 7.5-7.5 7.5' }) }) }))] })] })] }) }));
}
