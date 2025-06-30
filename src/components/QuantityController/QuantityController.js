var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from 'react';
import InputNumber from '../InputNumber';
export default function QuantityController(_a) {
    var { max, onIncrease, onDecrease, onType, onFocusOut, classNameWrapper = 'ml-10', value } = _a, rest = __rest(_a, ["max", "onIncrease", "onDecrease", "onType", "onFocusOut", "classNameWrapper", "value"]);
    const [localValue, setLocalValue] = useState(Number(value || 0));
    const handleChange = (event) => {
        let _value = Number(event.target.value);
        if (max !== undefined && _value > max) {
            _value = max;
        }
        else if (_value < 1) {
            _value = 1;
        }
        onType && onType(_value);
        setLocalValue(_value);
    };
    const increase = () => {
        let _value = Number(value || localValue) + 1;
        if (max !== undefined && _value > max) {
            _value = max;
        }
        onIncrease && onIncrease(_value);
        setLocalValue(_value);
    };
    const decrease = () => {
        let _value = Number(value || localValue) - 1;
        if (_value < 1) {
            _value = 1;
        }
        onDecrease && onDecrease(_value);
        setLocalValue(_value);
    };
    const handleBlur = (event) => {
        onFocusOut && onFocusOut(Number(event.target.value));
    };
    return (_jsxs("div", { className: 'flex items-center ' + classNameWrapper, children: [_jsx("button", { className: 'flex h-8 w-8 items-center justify-center rounded-l-sm border border-gray-300 text-gray-600', onClick: decrease, children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'h-4 w-4', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M19.5 12h-15' }) }) }), _jsx(InputNumber, Object.assign({ className: '', classNameError: 'hidden', classNameInput: 'h-8 w-14 border-t border-b border-gray-300 p-1 text-center outline-none', onChange: handleChange, onBlur: handleBlur, value: value || localValue }, rest)), _jsx("button", { className: 'flex h-8 w-8 items-center justify-center rounded-r-sm border border-gray-300 text-gray-600', onClick: increase, children: _jsx("svg", { xmlns: 'http://www.w3.org/2000/svg', fill: 'none', viewBox: '0 0 24 24', strokeWidth: 1.5, stroke: 'currentColor', className: 'h-4 w-4', children: _jsx("path", { strokeLinecap: 'round', strokeLinejoin: 'round', d: 'M12 4.5v15m7.5-7.5h-15' }) }) })] }));
}
