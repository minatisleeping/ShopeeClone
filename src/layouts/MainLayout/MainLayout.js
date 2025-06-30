import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
function MainLayout({ children }) {
    return (_jsxs("div", { children: [_jsx(Header, {}), children, _jsx(Footer, {})] }));
}
export default MainLayout;
