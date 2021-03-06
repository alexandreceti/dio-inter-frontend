import {BodyContainer, DashboardBackground, InlineContainer, InlineTitle} from "./styles";
import { useEffect, useState } from "react";

import useAuth from "../../hooks/useAuth";

import Card from "../../components/Card";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Statement from "./Statement";

import { pay, request } from '../../services/resouces/pix'


const Dashboard = () => {

  const {user, getCurrentUser} = useAuth();
  

  const [key, setKey] = useState('')
  const [generatedKey, setGeneratedKey] = useState('')
  const [value, setValue] = useState('');

  const handleNewPayment = async() => {
    const {data} = await request(Number(value));

    if (data.copyPasteKey){
      setGeneratedKey(data.copyPasteKey);
    }
  }

  const handlePayPix = async () => {
    try {
      const {data} = await pay(key)
      if (data.msg){
        alert(data.msg)
      }
      
    } catch (error) {
      console.log(error);
      alert('não foi possivel o pagamento.');
    }
  }



  useEffect(() => {
    getCurrentUser()
  },[])

  if(!user){
    return null
  }

  const wallet = user.wallet || 0

  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Saldo Atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className="wallet">
                {wallet.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'} )}
              </h3>
            </InlineContainer>
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Receber PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex: 1}}
                placeholder="Valor"
                value={value}
                onChange={e => setValue(e.target.value)}
              />
              <Button onClick={handleNewPayment}> Gerar Código</Button>
            </InlineContainer>
            { generatedKey && (
              <>
                <p className="primary-color">Pix copia e cola.</p>
                <p className="primary-color">{generatedKey}</p>
              </>
              )}
          </Card>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Pagar PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{flex: 1}}
                value={key}
                placeholder="Insira a chave"
                onChange={e => setKey(e.target.value)} 
              />
              <Button onClick={handlePayPix}>Pagar PIX</Button>
            </InlineContainer>
          </Card>
        </div>
        <div>
        <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Extrato da Conta</h2>
            </InlineTitle>
              <Statement></Statement>
          </Card>
        </div>
      </BodyContainer>

    </DashboardBackground>
  )
}

export default Dashboard;