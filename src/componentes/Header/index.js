import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #FFF;
  display: flex;
  justify-content: center;
  
  a {
    text-decoration: none;
  }

  a:link, a:visited {
    color:inherit;
  }
  
  a:hover {
    color: #EB9B00
  }
`

function Header() {
    return (
      <HeaderContainer>
        <Link to='/'>
          <Logo />
        </Link>
        <OpcoesHeader />
        <IconesHeader />
      </HeaderContainer>
    );
}
export default Header;
