import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppProvider } from 'src/contexts/app.context';
import './index.css';
import App from 'src/App';
export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false
        }
    }
});
createRoot(document.getElementById('root')).render(_jsx(BrowserRouter, { future: { v7_startTransition: true, v7_relativeSplatPath: true }, children: _jsx(StrictMode, { children: _jsxs(QueryClientProvider, { client: queryClient, children: [_jsx(AppProvider, { children: _jsx(App, {}) }), _jsx(ReactQueryDevtools, { initialIsOpen: false })] }) }) }));
