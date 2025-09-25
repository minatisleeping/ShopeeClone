import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'
import { User } from 'src/types/user.type'
import { getAccessTokenFromLocalStorage, getProfileFromLS } from 'src/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
  profile: User | null
  storeProfile: Dispatch<SetStateAction<User | null>>
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: !!getAccessTokenFromLocalStorage(),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  storeProfile: () => null
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAppContext.isAuthenticated)
  const [profile, storeProfile] = useState<User | null>(initialAppContext.profile)

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        storeProfile
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
