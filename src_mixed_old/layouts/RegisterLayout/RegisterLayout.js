import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from 'src/components/Footer';
import RegisterHeader from 'src/components/RegisterHeader';
export default function RegisterLayout({ children }) {
    return (_jsxs("div", { children: [_jsx(RegisterHeader, {}), children, _jsx(Footer, {})] }));
}
