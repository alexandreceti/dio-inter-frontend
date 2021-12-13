import api from '../api'

export interface SignInData {
  email: string;
  password: string;
}

export const request =async (value: number) => {
  return await api.post('/pix/request', {value}) 
}


export const pay =async (key: string) => {
  return await api.post(`/pix/pay/${key}`) 
}


export const transactions =async () => {
  return await api.get('/pix/transactions') 
}
