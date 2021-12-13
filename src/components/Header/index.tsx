import { HeaderContainer, UserInfo, HeaderWrapper } from "./styles";

import logoInter from '../../assets/images/Inter-orange.png'

import { useNavigate } from "react-router-dom";
import UserCircle from "../UserCircle";

import useAuth from '../../hooks/useAuth'

const Header = () => {

  const navegate = useNavigate();

  const handleLogOff = () => {
    navegate('/')
  }

  const {user} = useAuth();

  const initials = user.firstName.substr(0,1) + user.lastName.substr(0,1)


  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logoInter} width={172} height={61} alt="Logo Inter" />
        <UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>Olá . <span className="primary-color font-bold">{user.firstName} {user.lastName}</span> </p>
            <strong>{user.accountNumber}- {user.accountDigit}</strong><br />
            <a href="/logout" onClick={handleLogOff}>Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )

}

export default Header;