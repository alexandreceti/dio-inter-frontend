import {useEffect, useState} from 'react'
import {StatementContainer, StatementItemContainer, StatementItemImage, StatementItemInfo } from './styles'

import {format} from 'date-fns'
import {FiDollarSign} from 'react-icons/fi'

import {transactions} from '../../../services/resouces/pix'

interface StatementItemDTO {
  id: string;
  user: {
    firstName: string;
    lastName: string;
  },
  value: number,
  type: 'paid' | 'received',
  updateAt: Date
}


const StatementItem = ({user, value, type, updateAt}: StatementItemDTO) => {
  return (
    <StatementItemContainer>
        <StatementItemImage type={type}>
            <FiDollarSign size={24}/>
        </StatementItemImage>
        <StatementItemInfo>
            <p className="primary-color">
                {value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
            </p>
            <p className="">{type === 'paid' ? `Pago a `: `Recebido de`} <strong>{user.firstName} {user.lastName}</strong></p>
            <p className="">{format(new Date(updateAt), "dd/MM/yyyy 'às' HH:mm'h'")}</p>
        </StatementItemInfo>
    </StatementItemContainer>
)
}


export const Statement =() => {

  const [statements, setStatements] = useState<StatementItemDTO[]>([]);

  const getAllTransactions = async ()=> {
    const {data} = await transactions()

    setStatements(data);
  }


  useEffect(() => {
    getAllTransactions()
    
  }, [])


  return (
    <StatementContainer>  
      {statements.length > 0 && statements.map(item => <StatementItem key={item.id} {...item} />)}
    </StatementContainer>
  )
}

export default Statement;