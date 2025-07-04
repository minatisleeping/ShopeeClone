import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMutation, useQuery } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import productApi from 'src/apis/product.api';
import purchaseApi from 'src/apis/purchase.api';
import ProductRating from 'src/components/ProductRating';
import QuantityController from 'src/components/QuantityController';
import { purchasesStatus } from 'src/constants/purchase';
import { queryClient } from 'src/main';
import Product from 'src/pages/ProductList/components/Product/Product';
import { formatCurrency, formatNumberToSocialStyle, getIdFromNameId, rateSale } from 'src/utils/utils';
export default function ProductDetail() {
    const [buyCount, setBuyCount] = useState(1);
    const { nameId } = useParams();
    const id = getIdFromNameId(nameId);
    const { data: productDetailData } = useQuery({
        queryKey: ['product', id],
        queryFn: () => productApi.getProductDetail(id)
    });
    const [currentIndexImages, setCurrentIndexImages] = useState([0, 5]);
    const [activeImage, setActiveImage] = useState('');
    const product = productDetailData === null || productDetailData === void 0 ? void 0 : productDetailData.data.data;
    const imageRef = useRef(null);
    const currentImages = useMemo(() => (product ? product.images.slice(...currentIndexImages) : []), [product, currentIndexImages]);
    const queryConfig = { limit: '20', page: '1', category: product === null || product === void 0 ? void 0 : product.category._id };
    const { data: productsData } = useQuery({
        queryKey: ['products', queryConfig],
        queryFn: () => productApi.getProductWithPagination(queryConfig),
        staleTime: 3 * 60 * 1000,
        enabled: Boolean(product)
    });
    const addToCartMutation = useMutation(purchaseApi.addToCart);
    useEffect(() => {
        if (product && product.images.length > 0) {
            setActiveImage(product.images[0]);
        }
    }, [product]);
    const next = () => {
        if (currentIndexImages[1] < product.images.length) {
            setCurrentIndexImages((prev) => [prev[0] + 1, prev[1] + 1]);
        }
    };
    const prev = () => {
        if (currentIndexImages[0] > 0) {
            setCurrentIndexImages((prev) => [prev[0] - 1, prev[1] - 1]);
        }
    };
    const chooseActive = (img) => setActiveImage(img);
    const handleZoom = (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const image = imageRef.current;
        const { naturalHeight, naturalWidth } = image;
        // Cách 1: Lấy offsetX, offsetY đơn giản khi chúng ta đã xử lý được bubble event
        // const { offsetX, offsetY } = event.nativeEvent
        // Cách 2: Lấy offsetX, offsetY khi chúng ta không xử lý được bubble event
        const offsetX = event.pageX - (rect.x + window.scrollX);
        const offsetY = event.pageY - (rect.y + window.scrollY);
        const top = offsetY * (1 - naturalHeight / rect.height);
        const left = offsetX * (1 - naturalWidth / rect.width);
        image.style.width = naturalWidth + 'px';
        image.style.height = naturalHeight + 'px';
        image.style.maxWidth = 'unset';
        image.style.top = top + 'px';
        image.style.left = left + 'px';
    };
    const handleRemoveZoom = () => { var _a; return (_a = imageRef.current) === null || _a === void 0 ? void 0 : _a.removeAttribute('style'); };
    const handleBuyCount = (value) => setBuyCount(value);
    const addToCart = () => addToCartMutation.mutate({ product_id: product === null || product === void 0 ? void 0 : product._id, buy_count: buyCount }, {
        onSuccess: (data) => {
            toast.success(data.data.message, { autoClose: 1000 });
            queryClient.invalidateQueries({
                queryKey: ['purchases', { status: purchasesStatus.inCart }]
            });
        }
    });
    if (!product)
        return null;
    return (_jsxs("div", { className: 'bg-gray-200 py-6', children: [_jsx("div", { className: 'container', children: _jsx("div", { className: 'bg-white p-4 shadow', children: _jsxs("div", { className: 'grid grid-cols-12 gap-9', children: [_jsxs("div", { className: 'col-span-5', children: [_jsx("div", { className: 'relative w-full cursor-zoom-in overflow-hidden pt-[100%] shadow', onMouseMove: handleZoom, onMouseLeave: handleRemoveZoom, children: _jsx("img", { src: activeImage, alt: product.name, className: ' absolute top-0 left-0 h-full w-full bg-white object-cover', ref: imageRef }) }), _jsxs("div", { className: 'relative mt-4 grid grid-cols-5 gap-1', children: [_jsx("button", { className: 'absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white', onClick: prev, children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'h-5 w-5', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M15.75 19.5L8.25 12l7.5-7.5' }) }) }), currentImages.map((img) => {
                                                const isActive = img === activeImage;
                                                return (_jsxs("div", { className: 'relative w-full pt-[100%]', onMouseEnter: () => chooseActive(img), children: [_jsx("img", { src: img, alt: product.name, className: 'absolute top-0 left-0 h-full w-full cursor-pointer bg-white object-cover' }), isActive && _jsx("div", { className: 'absolute inset-0 border-2 border-orange' })] }, img));
                                            }), _jsx("button", { className: 'absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white', onClick: next, children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'h-5 w-5', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M8.25 4.5l7.5 7.5-7.5 7.5' }) }) })] })] }), _jsxs("div", { className: 'col-span-7', children: [_jsx("h1", { className: 'text-xl font-medium uppercase', children: product.name }), _jsxs("div", { className: 'mt-8 flex items-center', children: [_jsxs("div", { className: 'flex items-center', children: [_jsx("span", { className: 'mr-1 border-b border-b-orange text-orange', children: product.rating }), _jsx(ProductRating, { rating: product.rating, activeClassname: 'fill-orange text-orange h-4 w-4', nonActiveClassname: 'fill-gray-300 text-gray-300 h-4 w-4' })] }), _jsx("div", { className: 'mx-4 h-4 w-[1px] bg-gray-300' }), _jsxs("div", { children: [_jsx("span", { children: formatNumberToSocialStyle(product.sold) }), _jsx("span", { className: 'ml-1 text-gray-500', children: "\u0110\u00E3 b\u00E1n" })] })] }), _jsxs("div", { className: 'mt-8 flex items-center bg-gray-50 px-5 py-4', children: [_jsxs("div", { className: 'text-gray-500 line-through', children: ["\u20AB", formatCurrency(product.price_before_discount)] }), _jsxs("div", { className: 'ml-3 text-3xl font-medium text-orange', children: ["\u20AB", formatCurrency(product.price)] }), _jsxs("div", { className: 'ml-4 rounded-sm bg-orange px-1 py-[2px] text-xs font-semibold uppercase text-white', children: [rateSale(product.price_before_discount, product.price), " gi\u1EA3m"] })] }), _jsxs("div", { className: 'mt-8 flex items-center', children: [_jsx("div", { className: 'capitalize text-gray-500', children: "S\u1ED1 l\u01B0\u1EE3ng" }), _jsx(QuantityController, { onDecrease: handleBuyCount, onIncrease: handleBuyCount, onType: handleBuyCount, value: buyCount, max: product.quantity }), _jsxs("div", { className: 'ml-6 text-sm text-gray-500', children: [product.quantity, " s\u1EA3n ph\u1EA9m c\u00F3 s\u1EB5n"] })] }), _jsxs("div", { className: 'mt-8 flex items-center', children: [_jsxs("button", { onClick: addToCart, className: 'flex h-12 items-center justify-center rounded-sm border border-orange bg-orange/10 px-5 capitalize text-orange shadow-sm hover:bg-orange/5', children: [_jsx("svg", { enableBackground: 'new 0 0 15 15', viewBox: '0 0 15 15', x: 0, y: 0, className: 'mr-[10px] h-5 w-5 fill-current stroke-orange text-orange', children: _jsxs("g", { children: [_jsxs("g", { children: [_jsx("polyline", { fill: 'none', points: '.5 .5 2.7 .5 5.2 11 12.4 11 14.5 3.5 3.7 3.5', strokeLinecap: 'round', strokeLinejoin: 'round', strokeMiterlimit: 10 }), _jsx("circle", { cx: 6, cy: '13.5', r: 1, stroke: 'none' }), _jsx("circle", { cx: '11.5', cy: '13.5', r: 1, stroke: 'none' })] }), _jsx("line", { fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, x1: '7.5', x2: '10.5', y1: 7, y2: 7 }), _jsx("line", { fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, x1: 9, x2: 9, y1: '8.5', y2: '5.5' })] }) }), "Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng"] }), _jsx("button", { className: 'fkex ml-4 h-12 min-w-[5rem] items-center justify-center rounded-sm bg-orange px-5 capitalize text-white shadow-sm outline-none hover:bg-orange/90', children: "Mua ngay" })] })] })] }) }) }), _jsx("div", { className: 'container', children: _jsxs("div", { className: 'mt-8 bg-white p-4 shadow', children: [_jsx("div", { className: 'rounded bg-gray-50 p-4 text-lg capitalize text-slate-700', children: "M\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m" }), _jsx("div", { className: 'mx-4 mt-12 mb-4 text-sm leading-loose', children: _jsx("div", { dangerouslySetInnerHTML: {
                                    __html: DOMPurify.sanitize(product.description)
                                } }) })] }) }), _jsx("div", { className: 'mt-8', children: _jsxs("div", { className: 'container', children: [_jsx("div", { className: 'uppercase text-gray-400', children: "C\u00F3 th\u1EC3 b\u1EA1n c\u0169ng th\u00EDch! Ho\u1EB7c kh\u00F4ng :)))" }), productsData && (_jsx("div", { className: 'mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3', children: productsData.data.data.products.map((product) => (_jsx("div", { className: 'col-span-1', children: _jsx(Product, { product: product }) }, product._id))) }))] }) })] }));
}
