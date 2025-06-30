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
import { useState } from 'react';
import { useController } from 'react-hook-form';
function InputV2(props) {
    var _a;
    const { type, onChange, className, classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm', classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm', value = '' } = props, rest = __rest(props, ["type", "onChange", "className", "classNameInput", "classNameError", "value"]);
    const { field, fieldState } = useController(props);
    const [localValue, setLocalValue] = useState(field.value);
    const handleChange = (event) => {
        const valueFromInput = event.target.value;
        const numberCondition = type === 'number' && (/^\d+$/.test(valueFromInput) || valueFromInput === '');
        if (numberCondition || type === 'text' || type !== 'number') {
            // Update local value state
            setLocalValue(valueFromInput);
            // Call field.onChange to update value state in react hook form
            field.onChange(event);
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            onChange && onChange(event);
        }
    };
    return (_jsxs("div", { className: className, children: [_jsx("input", Object.assign({ className: classNameInput }, rest, field, { onChange: handleChange, value: value || localValue })), _jsx("div", { className: classNameError, children: (_a = fieldState.error) === null || _a === void 0 ? void 0 : _a.message })] }));
}
export default InputV2;
