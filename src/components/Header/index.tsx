import { HeaderContainer, UserInfo, HeaderWrapper } from "./styles";

import logoInter from '../../assets/images/Inter-orange.png'

import { useNavigate } from "react-router-dom";
import UserCircle from "../UserCircle";

const Header = () => {

  const navegate = useNavigate();

  const handleLogOff = () => {
    navegate('/')
  }


  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="Logo Inter" />
        <UserInfo>
          <UserCircle initials="AO" />
          <div>
            <p>Olá . <span className="primary-color font-bold">Alexandre</span> </p>
            <strong>222222-1</strong><br />
            <a href="#" onClick={handleLogOff}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )

}

export default Header;