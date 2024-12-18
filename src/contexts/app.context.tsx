import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { getAccessTokenFromLocalStorage } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: !!getAccessTokenFromLocalStorage(),
  setIsAuthenticated: () => null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated)

  return <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>{children}</AppContext.Provider>
}
