import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from 'react';
import { getAccessTokenFromLocalStorage, getProfileFromLS } from 'src/utils/auth';
const initialAppContext = {
    isAuthenticated: !!getAccessTokenFromLocalStorage(),
    setIsAuthenticated: () => null,
    profile: getProfileFromLS(),
    storeProfile: () => null
};
// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext(initialAppContext);
export const AppProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated);
    const [profile, storeProfile] = useState(initialAppContext.profile);
    return (_jsx(AppContext.Provider, { value: {
            isAuthenticated,
            setIsAuthenticated,
            profile,
            storeProfile
        }, children: children }));
};
