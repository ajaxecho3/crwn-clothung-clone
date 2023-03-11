

import React, { createContext, ReactNode, useState, SetStateAction, Dispatch } from "react";




interface ProviderProps {
  children: ReactNode
}

type UserCtx = {
  currentUser: any,
  setCurrentUser: Dispatch<SetStateAction<any>>,
}

export const UserContext = createContext<UserCtx>({
  currentUser: null,
  setCurrentUser: () => null
})

export const UserProvider = ({children} : ProviderProps) => {
  const [currentUser, setCurrentUser] = useState<any>()
  const value = {currentUser, setCurrentUser}

  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
}