import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import { createSearchParams, Link } from 'react-router-dom';
import path from 'src/constants/path';
const RANGE = 5;
export default function Pagination({ queryConfig, pageSize }) {
    const page = Number(queryConfig.page);
    const renderPagination = () => {
        let dotAfter = false;
        let dotBefore = false;
        const renderDotBefore = (index) => {
            if (!dotBefore) {
                dotBefore = true;
                return (_jsx("span", { className: 'mx-2 rounded border bg-white px-3 py-2 shadow-sm', children: "..." }, index));
            }
            return null;
        };
        const renderDotAfter = (index) => {
            if (!dotAfter) {
                dotAfter = true;
                return (_jsx("span", { className: 'mx-2 rounded border bg-white px-3 py-2 shadow-sm', children: "..." }, index));
            }
            return null;
        };
        return Array(pageSize)
            .fill(0)
            .map((_, index) => {
            const pageNumber = index + 1;
            // Điều kiện để return về ...
            if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
                return renderDotAfter(index);
            }
            else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
                if (pageNumber < page - RANGE && pageNumber > RANGE) {
                    return renderDotBefore(index);
                }
                else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
                    return renderDotAfter(index);
                }
            }
            else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
                return renderDotBefore(index);
            }
            return (_jsx(Link, { to: {
                    pathname: path.home,
                    search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { page: String(pageNumber) })).toString()
                }, className: classNames('bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border', {
                    'border-cyan-500': pageNumber === page,
                    'border-transparent': pageNumber !== page
                }), onClick: handleScrollToTop, children: pageNumber }, index));
        });
    };
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (_jsxs("div", { className: 'flex flex-wrap mt-6 justify-center', children: [page === 1 ? (_jsx("button", { className: 'bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-progress', children: "Prev" })) : (_jsx(Link, { to: {
                    pathname: path.home,
                    search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { page: String(page - 1) })).toString()
                }, className: 'bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer', onClick: handleScrollToTop, children: "Prev" })), renderPagination(), page === pageSize ? (_jsx("button", { className: 'bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-progress', children: "Next" })) : (_jsx(Link, { to: {
                    pathname: path.home,
                    search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { page: String(page + 1) })).toString()
                }, className: 'bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer', onClick: handleScrollToTop, children: "Next" }))] }));
}
