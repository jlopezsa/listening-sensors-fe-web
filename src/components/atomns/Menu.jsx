import styled from 'styled-components';
import {
  ROUTE_HOME,
  ROUTE_DASHBOARD,
} from '../../routes/routes';
import { NavLinkStyled } from './NavLinkStyled';

const Nav = styled.nav`
  margin-right: 50px;
  margin-left: 50px
  `;
const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`;

function Menu() {
  return (
    <div>
      <Nav>
        <Ul>
          <NavLinkStyled to={ROUTE_HOME}> Home </NavLinkStyled>
          <NavLinkStyled to={ROUTE_DASHBOARD}> Dashboard </NavLinkStyled>
          <NavLinkStyled to={ROUTE_HOME}> Team </NavLinkStyled>
          <NavLinkStyled to={ROUTE_HOME}> Contact </NavLinkStyled>
          <NavLinkStyled to={ROUTE_HOME}> Sign Up </NavLinkStyled>
          <NavLinkStyled to={ROUTE_HOME}> Login </NavLinkStyled>
        </Ul>
      </Nav>
    </div>
  );
}

export default Menu;
