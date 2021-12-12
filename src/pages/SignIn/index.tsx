import { Wrapper, Background, InputContainer, ButtonContainer } from "./styles";

import background from '../../assets/images/background-login.jpg'
import logoInter from '../../assets/images/Inter-orange.png'

import Card from "../../components/Card";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";


const SignIn = () => {

  const navigate = useNavigate();

  const handleToSignIn = () => {
    navigate('/dashboard');
  }

  return (
    <Wrapper>
      <Background image={background}/>
      <Card width="403px">
        <img src={logoInter} width={172} height={61} alt="Logo Inter" />
        <InputContainer>
          <Input placeholder="EMAIL" />
          <Input placeholder="SENHA" type="password" />
        </InputContainer>
        <ButtonContainer>
          <Button type="button" onClick={handleToSignIn}>Entrar</Button>
          <p>Ainda não e cadastrado? <Link to="/signup">cadastre-se</Link></p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  )
}

export default SignIn; 