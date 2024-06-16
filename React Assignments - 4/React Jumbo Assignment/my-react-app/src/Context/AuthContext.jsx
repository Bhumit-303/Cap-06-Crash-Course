import { createContext,useState } from "react";

export const AuthContext = createContext()


export function AuthContextProvider({children}) {
const [authState, setauthState] = useState({token:null,isLogned:false})
console.log(authState);

const Login = (token)=>{
    setauthState({token:token,isLogned:true})
}

const LogOut = ()=>{
    setauthState({token:null,isLogned:false})
}
  return (
  <AuthContext.Provider value={{authState,Login,LogOut}}>
{children}
  </AuthContext.Provider>
  )
}