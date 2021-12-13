import api from '../api'

export interface SignInData {
  email: string;
  password: string;
}

export interface UserDTO {
  id: string;
  firstName: string;
  lastName: string;
  accountNumber: number;
  accountDigit: number;
  wallet: number;
  email: string;
}

export const signIn =async (data: SignInData) => {
  return await api.post('/user/signin', data) 

}


export interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const signUp =async (data: SignUpData) => {
  const user = await api.post('/user/signup', data) 
  return user;
}

export const me =async () => {
  const user = await api.get<UserDTO>('/user/me') 
  return user;
}