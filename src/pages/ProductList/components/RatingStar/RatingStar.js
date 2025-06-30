import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createSearchParams, useNavigate } from 'react-router-dom';
import path from 'src/constants/path';
export default function RatingStars({ queryConfig }) {
    const navigate = useNavigate();
    const handleFilterStar = (ratingFilter) => {
        navigate({
            pathname: path.home,
            search: createSearchParams(Object.assign(Object.assign({}, queryConfig), { rating_filter: String(ratingFilter) })).toString()
        });
    };
    return (_jsx("ul", { className: 'my-3', children: Array(5)
            .fill(0)
            .map((_, index) => (_jsx("li", { className: 'py-1 pl-2', children: _jsxs("div", { className: 'flex cursor-pointer items-center text-sm', onClick: () => handleFilterStar(5 - index), tabIndex: 0, role: 'button', "aria-hidden": 'true', children: [Array(5)
                        .fill(0)
                        .map((_, indexStar) => {
                        if (indexStar < 5 - index) {
                            return (_jsxs("svg", { viewBox: '0 0 9.5 8', className: 'mr-1 h-4 w-4', children: [_jsxs("defs", { children: [_jsxs("linearGradient", { id: 'ratingStarGradient', x1: '50%', x2: '50%', y1: '0%', y2: '100%', children: [_jsx("stop", { offset: 0, stopColor: '#ffca11' }), _jsx("stop", { offset: 1, stopColor: '#ffad27' })] }), _jsx("polygon", { id: 'ratingStar', points: '14.910357 6.35294118 12.4209136 7.66171903 12.896355 4.88968305 10.8823529 2.92651626 13.6656353 2.52208166 14.910357 0 16.1550787 2.52208166 18.9383611 2.92651626 16.924359 4.88968305 17.3998004 7.66171903' })] }), _jsx("g", { fill: 'url(#ratingStarGradient)', fillRule: 'evenodd', stroke: 'none', strokeWidth: 1, children: _jsx("g", { transform: 'translate(-876 -1270)', children: _jsx("g", { transform: 'translate(155 992)', children: _jsx("g", { transform: 'translate(600 29)', children: _jsx("g", { transform: 'translate(10 239)', children: _jsx("g", { transform: 'translate(101 10)', children: _jsx("use", { stroke: '#ffa727', strokeWidth: '.5', xlinkHref: '#ratingStar' }) }) }) }) }) }) })] }, indexStar));
                        }
                        return (_jsxs("svg", { viewBox: '0 0 30 30', className: 'mr-1 h-4 w-4', children: [_jsx("defs", { children: _jsxs("linearGradient", { id: 'star__hollow', x1: '50%', x2: '50%', y1: '0%', y2: '99.0177926%', children: [_jsx("stop", { offset: '0%', stopColor: '#FFD211' }), _jsx("stop", { offset: '100%', stopColor: '#FFAD27' })] }) }), _jsx("path", { fill: 'none', fillRule: 'evenodd', stroke: 'url(#star__hollow)', strokeWidth: 2, d: 'M23.226809 28.390899l-1.543364-9.5505903 6.600997-6.8291523-9.116272-1.4059447-4.01304-8.63019038-4.013041 8.63019038-9.116271 1.4059447 6.600997 6.8291523-1.543364 9.5505903 8.071679-4.5038874 8.071679 4.5038874z' })] }, indexStar));
                    }), index !== 0 && _jsx("span", { className: 'ml-2', children: "Tr\u1EDF l\u00EAn" })] }) }, index))) }));
}
