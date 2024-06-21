import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext('user')

import React from 'react'
import { getMyProfileContext } from "../services/user.service";

function ContextWrapper({children}) {
  const [user, setUser ] = useState ('')

  useEffect(() => {
    const fetchProfile = async () =>{
      const token = localStorage.getItem('token')
      if(token) {
        try {
          const response = await getMyProfileContext()
          SpeechSynthesisUtterance(response)
        } catch (error) {
          console.error('Error fetching profile:', error)
          localStorage.removeItem('token')
        }
      }
    }
    fetchProfile()
  }, [])



  return (

    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default ContextWrapper