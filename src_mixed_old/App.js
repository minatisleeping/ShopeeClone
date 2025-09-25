import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useRouteElements from './pages/useRouteElements';
function App() {
    const routeElements = useRouteElements();
    return (_jsxs("div", { children: [routeElements, _jsx(ToastContainer, {})] }));
}
export default App;
