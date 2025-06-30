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
export default function Input(_a) {
    var { errorMessage, className, name, register, rules, classNameInput = 'p-3 w-full outline-none border border-gray-300 focus:border-gray-500 rounded-sm focus:shadow-sm', classNameError = 'mt-1 text-red-600 min-h-[1.25rem] text-sm' } = _a, rest = __rest(_a, ["errorMessage", "className", "name", "register", "rules", "classNameInput", "classNameError"]);
    const registerResult = register && name ? register(name, rules) : null;
    return (_jsxs("div", { className: className, children: [_jsx("input", Object.assign({ className: classNameInput }, registerResult, rest)), _jsx("div", { className: classNameError, children: errorMessage })] }));
}
