

import React, { createContext, ReactNode, useState, SetStateAction, Dispatch, useEffect } from "react";
import { createUserDocumentFromAuth, onAuthStateChangeListener } from "../utils/firebase";




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


  useEffect(() => {
   const unsubcribe =  onAuthStateChangeListener((user:any) => {
    if(user){
       createUserDocumentFromAuth(user)
    }
    setCurrentUser(user)
   })

   return unsubcribe
  },[])

  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider>
}