import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import purchaseApi from 'src/apis/purchase.api';
import Button from 'src/components/Button';
import QuantityController from 'src/components/QuantityController';
import path from 'src/constants/path';
import { purchasesStatus } from 'src/constants/purchase';
import { formatCurrency, generateNameId } from 'src/utils/utils';
import produce from 'immer';
import { keyBy } from 'lodash';
export default function Cart() {
    const [extendedPurchases, setExtendedPurchases] = useState([]);
    const { data: purchasesInCartData, refetch } = useQuery({
        queryKey: ['purchases', { status: purchasesStatus.inCart }],
        queryFn: () => purchaseApi.getPurchasesByStatus({ status: purchasesStatus.inCart })
    });
    const updatePurchaseMutation = useMutation({
        mutationFn: purchaseApi.updatePurchase,
        onSuccess: () => {
            refetch();
        }
    });
    const purchasesInCart = purchasesInCartData === null || purchasesInCartData === void 0 ? void 0 : purchasesInCartData.data.data;
    const isAllChecked = extendedPurchases.every((purchase) => purchase.checked);
    useEffect(() => {
        setExtendedPurchases((prev) => {
            const extendedPurchasesObject = keyBy(prev, '_id');
            return ((purchasesInCart === null || purchasesInCart === void 0 ? void 0 : purchasesInCart.map((purchase) => {
                var _a;
                return (Object.assign(Object.assign({}, purchase), { disabled: false, checked: Boolean((_a = extendedPurchasesObject[purchase._id]) === null || _a === void 0 ? void 0 : _a.checked) }));
            })) || []);
        });
    }, [purchasesInCart]);
    const handleCheck = (purchaseIndex) => (event) => {
        setExtendedPurchases(produce((draft) => {
            draft[purchaseIndex].checked = event.target.checked;
        }));
    };
    const handleCheckAll = () => {
        setExtendedPurchases((prev) => prev.map((purchase) => (Object.assign(Object.assign({}, purchase), { checked: !isAllChecked }))));
    };
    const handleTypeQuantity = (purchaseIndex) => (value) => {
        setExtendedPurchases(produce((draft) => {
            draft[purchaseIndex].buy_count = value;
        }));
    };
    const handleQuantity = (purchaseIndex, value, enable) => {
        if (enable) {
            const purchase = extendedPurchases[purchaseIndex];
            setExtendedPurchases(produce((draft) => {
                draft[purchaseIndex].disabled = true;
            }));
            updatePurchaseMutation.mutate({ product_id: purchase.product._id, buy_count: value });
        }
    };
    return (_jsx("div", { className: 'bg-neutral-100 py-16', children: _jsxs("div", { className: 'container', children: [_jsx("div", { className: 'overflow-auto', children: _jsxs("div", { className: 'min-w-[1000px]', children: [_jsxs("div", { className: 'grid grid-cols-12 rounded-sm bg-white py-5 px-9 text-sm capitalize text-gray-500 shadow', children: [_jsx("div", { className: 'col-span-6', children: _jsxs("div", { className: 'flex items-center', children: [_jsx("div", { className: 'flex flex-shrink-0 items-center justify-center pr-3', children: _jsx("input", { type: 'checkbox', className: 'h-5 w-5 accent-orange', checked: isAllChecked, onChange: handleCheckAll }) }), _jsx("div", { className: 'flex-grow text-black', children: "S\u1EA3n ph\u1EA9m" })] }) }), _jsx("div", { className: 'col-span-6', children: _jsxs("div", { className: 'grid grid-cols-5 text-center', children: [_jsx("div", { className: 'col-span-2', children: "\u0110\u01A1n gi\u00E1" }), _jsx("div", { className: 'col-span-1', children: "S\u1ED1 l\u01B0\u1EE3ng" }), _jsx("div", { className: 'col-span-1', children: "S\u1ED1 ti\u1EC1n" }), _jsx("div", { className: 'col-span-1', children: "Thao t\u00E1c" })] }) })] }), _jsx("div", { className: 'my-3 rounded-sm bg-white p-5 shadow', children: extendedPurchases === null || extendedPurchases === void 0 ? void 0 : extendedPurchases.map((purchase, index) => (_jsxs("div", { className: 'mb-5 grid grid-cols-12 rounded-sm border border-gray-200 bg-white py-5 px-4 text-center text-sm text-gray-500 first:mt-0', children: [_jsx("div", { className: 'col-span-6', children: _jsxs("div", { className: 'flex', children: [_jsx("div", { className: 'flex flex-shrink-0 items-center justify-center pr-3', children: _jsx("input", { type: 'checkbox', className: 'h-5 w-5 accent-orange', checked: purchase.checked, onChange: handleCheck(index) }) }), _jsx("div", { className: 'flex-grow', children: _jsxs("div", { className: 'flex', children: [_jsx(Link, { className: 'h-20 w-20 flex-shrink-0', to: `${path.home}${generateNameId({
                                                                        name: purchase.product.name,
                                                                        id: purchase.product._id
                                                                    })}`, children: _jsx("img", { alt: purchase.product.name, src: purchase.product.image }) }), _jsx("div", { className: 'flex-grow px-2 pt-1 pb-2', children: _jsx(Link, { to: `${path.home}${generateNameId({
                                                                            name: purchase.product.name,
                                                                            id: purchase.product._id
                                                                        })}`, className: 'line-clamp-2', children: purchase.product.name }) })] }) })] }) }), _jsx("div", { className: 'col-span-6', children: _jsxs("div", { className: 'grid grid-cols-5 items-center', children: [_jsx("div", { className: 'col-span-2', children: _jsxs("div", { className: 'flex items-center justify-center', children: [_jsxs("span", { className: 'text-gray-300 line-through', children: ["\u20AB", formatCurrency(purchase.product.price_before_discount)] }), _jsxs("span", { className: 'ml-3', children: ["\u20AB", formatCurrency(purchase.product.price)] })] }) }), _jsx("div", { className: 'col-span-1', children: _jsx(QuantityController, { max: purchase.product.quantity, value: purchase.buy_count, classNameWrapper: 'flex items-center', onIncrease: (value) => handleQuantity(index, value, value <= purchase.product.quantity), onDecrease: (value) => handleQuantity(index, value, value >= 1), onType: handleTypeQuantity(index), onFocusOut: (value) => handleQuantity(index, value, value >= 1 &&
                                                                value <= purchase.product.quantity &&
                                                                value !== purchasesInCart[index].buy_count), disabled: purchase.disabled }) }), _jsx("div", { className: 'col-span-1', children: _jsxs("span", { className: 'text-orange', children: ["\u20AB", formatCurrency(purchase.product.price * purchase.buy_count)] }) }), _jsx("div", { className: 'col-span-1', children: _jsx("button", { className: 'bg-none text-black transition-colors hover:text-orange', children: "X\u00F3a" }) })] }) })] }, purchase._id))) })] }) }), _jsxs("div", { className: 'sticky bottom-0 z-10 mt-8 flex flex-col rounded-sm border border-gray-100 bg-white p-5 shadow sm:flex-row sm:items-center', children: [_jsxs("div", { className: 'flex items-center', children: [_jsx("div", { className: 'flex flex-shrink-0 items-center justify-center pr-3', children: _jsx("input", { type: 'checkbox', className: 'h-5 w-5 accent-orange', checked: isAllChecked, onChange: handleCheckAll }) }), _jsxs("button", { className: 'mx-3 border-none bg-none', onClick: handleCheckAll, children: ["Ch\u1ECDn t\u1EA5t c\u1EA3 (", extendedPurchases.length, ")"] }), _jsx("button", { className: 'mx-3 border-none bg-none', children: "X\u00F3a" })] }), _jsxs("div", { className: 'mt-5 flex flex-col sm:ml-auto sm:mt-0 sm:flex-row sm:items-center', children: [_jsxs("div", { children: [_jsxs("div", { className: 'flex items-center sm:justify-end', children: [_jsx("div", { children: "T\u1ED5ng thanh to\u00E1n (0 s\u1EA3n ph\u1EA9m):" }), _jsx("div", { className: 'ml-2 text-2xl text-orange', children: "\u20AB138000" })] }), _jsxs("div", { className: 'flex items-center text-sm sm:justify-end', children: [_jsx("div", { className: 'text-gray-500', children: "Ti\u1EBFt ki\u1EC7m" }), _jsx("div", { className: 'ml-6 text-orange', children: "\u20AB138000" })] })] }), _jsx(Button, { className: 'mt-5 flex h-10 w-52 items-center justify-center bg-red-500 text-sm uppercase text-white hover:bg-red-600 sm:ml-4 sm:mt-0', children: "Mua h\u00E0ng" })] })] })] }) }));
}
