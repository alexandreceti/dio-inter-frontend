import {createContext, useEffect, useState } from "react";

import {signIn , signUp, SignInData, SignUpData, me} from '../services/resouces/user'

interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}


interface ContexData {
    user: UserDTO;
    userSignin: (userData: SignInData) => Promise<UserDTO>;
    userSignup: (userData: SignUpData) => Promise<UserDTO>;
    getCurrentUser: () => Promise<UserDTO>;
}



export const AuthContext = createContext<ContexData>({} as ContexData);

export const AuthProvader: React.FC = ({children}) => {

  const [user, setUser] = useState<UserDTO>(()=> {
    
    const user = localStorage.getItem('@inter:User');
    // console.log(user)
    if(user){
      return JSON.parse(user);
    }

    return {} as UserDTO
    
  })

  // useEffect(() => {
  //   const user = localStorage.getItem('@inter:User');
  //   console.log(user)
  //   if(user){
  //     const temp = JSON.parse(user);
  //     setUser(temp);
  //   }
  // },[])

  const userSignin = async (userData: SignInData) =>{
    const {data} = await signIn(userData);

    if(data?.status === 'error'){
      return data;
    }
    
    if(data.accessToken){
      localStorage.setItem('@inter:Token', data.accessToken )
    }

    return getCurrentUser();
    

  }

  const getCurrentUser = async () => {
    const {data} = await me();
    setUser(data);
    localStorage.setItem('@inter:User', JSON.stringify(data))
    return data;
  }

  const userSignup = async (userData: SignUpData) =>{
    const {data} = await signUp(userData);

    localStorage.setItem('@inter:Token', data.accessToken )

    return  getCurrentUser();
 
  }

  return (
    <AuthContext.Provider value={{user, userSignin, userSignup, getCurrentUser}} >
      {children}
    </AuthContext.Provider>
  )

}