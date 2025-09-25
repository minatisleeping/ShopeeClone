import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export default function ProductRating({ rating, activeClassname = 'h-3 w-3 fill-yellow-300 text-yellow-300', nonActiveClassname = 'h-3 w-3 fill-current text-gray-300' }) {
    const NUMBER_OF_STAR = 5;
    const handleWidth = (order) => {
        if (order <= rating) {
            return '100%';
        }
        if (order > rating && order - rating < 1) {
            return (rating - Math.floor(rating)) * 100 + '%';
        }
        return '0%';
    };
    return (_jsx("div", { className: 'flex items-center', children: Array(NUMBER_OF_STAR)
            .fill(0)
            .map((_, index) => (_jsxs("div", { className: 'relative', children: [_jsx("div", { className: 'absolute top-0 left-0 h-full overflow-hidden', style: { width: handleWidth(index + 1) }, children: _jsx("svg", { enableBackground: 'new 0 0 15 15', viewBox: '0 0 15 15', x: 0, y: 0, className: activeClassname, children: _jsx("polygon", { points: '7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }) }) }), _jsx("svg", { enableBackground: 'new 0 0 15 15', viewBox: '0 0 15 15', x: 0, y: 0, className: nonActiveClassname, children: _jsx("polygon", { points: '7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }) })] }, index))) }));
}
