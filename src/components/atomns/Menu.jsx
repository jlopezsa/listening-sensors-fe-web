/* eslint-disale */
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAuth, signOut } from 'firebase/auth';
import Hamburger from 'hamburger-react';
import Swal from 'sweetalert2';
import {
  ROUTE_HOME,
  ROUTE_HOME_TOP,
  ROUTE_DASHBOARD,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
  ROUTE_SECTION_OBJECTIVE,
  ROUTE_SECTION_METHODOLOGY,
  ROUTE_SECTION_TECH,
  ROUTE_SECTION_SENSORS,
} from '../../routes/routes';
import { HashLinkStyled } from './HashLinkStyled';
import { saveUserLoged } from '../../store/actions';
import { colors } from '../../css/globalStyles';

const Nav = styled.nav`
  margin-right: 50px;
  margin-left: 50px;
  @media (max-width: 950px) {
    display: none;
}
`;

const NavBurguer = styled.nav`
  background-color: rgba(44, 62, 80,0.9);
  width: 100vw;
  height: 100vh;
  text-align: center;
  padding-top: 1;
  position: absolute;
  font-size: 20px;
  left: 0px;
  @media (min-width: 950px) {
    display: none;
}
`;

const ContainerBurguer = styled.div`
display: none;
margin: 50px;
@media (max-width: 950px) {
  display: inline;
}
`;

const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`;

const UlBurguer = styled.ul`
position: inline;
display: flex;
height: 30px;
flex-direction: column;
`;

const auth = getAuth();

function Menu() {
  const userIsLoged = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        title: ' Logout',
        text: 'Realmente quieres salir de la plataforma?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#30d64c',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, deseo salir!',
      }).then(async (result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Logout con éxito!',
            'Regresa pronto',
            'success',
          );
          dispatch(saveUserLoged({}));
          await signOut(auth);
          navigate(ROUTE_HOME);
        }
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'Intenta salir de nuevo',
      });
    }
  };

  const showMenu = () => {
    setIsOpen(true);
  };
  const ocultaMenu = () => {
    setIsOpen(false);
  };

  const desplegarMenu = () => (
    <NavBurguer>
      <UlBurguer>
        <HashLinkStyled to={ROUTE_HOME_TOP}> Home </HashLinkStyled>
        <HashLinkStyled to={ROUTE_SECTION_OBJECTIVE}> Objetivo </HashLinkStyled>
        <HashLinkStyled to={ROUTE_SECTION_METHODOLOGY}> Como-usar? </HashLinkStyled>
        <HashLinkStyled to={ROUTE_SECTION_SENSORS}> Sensores </HashLinkStyled>
        <HashLinkStyled to={ROUTE_SECTION_TECH}> Tecnologías </HashLinkStyled>
        {Object.keys(userIsLoged).length === 0
          ? <HashLinkStyled to={ROUTE_SIGNUP}> Sign Up </HashLinkStyled> : null}
        {Object.keys(userIsLoged).length === 0
          ? <HashLinkStyled to={ROUTE_LOGIN}> Login </HashLinkStyled> : null }
        {Object.keys(userIsLoged).length === 0
          ? null : <HashLinkStyled to={ROUTE_DASHBOARD}> Dashboard </HashLinkStyled> }
        {Object.keys(userIsLoged).length === 0
          ? null
          : <HashLinkStyled to={ROUTE_HOME} onClick={handleClick}> Logout </HashLinkStyled> }
      </UlBurguer>
    </NavBurguer>
  );

  return (
    <div>
      <Nav>
        <Ul>
          <HashLinkStyled to={ROUTE_HOME_TOP}> Home </HashLinkStyled>
          <HashLinkStyled to={ROUTE_SECTION_OBJECTIVE} strict="true"> Objetivo </HashLinkStyled>
          <HashLinkStyled to={ROUTE_SECTION_METHODOLOGY}> Como-usar? </HashLinkStyled>
          <HashLinkStyled to={ROUTE_SECTION_SENSORS}> Sensores </HashLinkStyled>
          <HashLinkStyled to={ROUTE_SECTION_TECH}> Tecnologías </HashLinkStyled>
          {Object.keys(userIsLoged).length === 0
            ? <HashLinkStyled to={ROUTE_SIGNUP}> Sign Up </HashLinkStyled> : null}
          {Object.keys(userIsLoged).length === 0
            ? <HashLinkStyled to={ROUTE_LOGIN}> Login </HashLinkStyled> : null }
          {Object.keys(userIsLoged).length === 0
            ? null : <HashLinkStyled to={ROUTE_DASHBOARD}> Dashboard </HashLinkStyled> }
          {Object.keys(userIsLoged).length === 0
            ? null
            : <HashLinkStyled to={ROUTE_HOME} onClick={handleClick}> Logout </HashLinkStyled> }
        </Ul>
      </Nav>
      <ContainerBurguer>
        <Hamburger
          color={colors.backgroundOrange}
          onToggle={(toggled) => {
            if (toggled) {
              showMenu();
            } else {
              ocultaMenu();
              // close a menu
            }
          }}
        />
      </ContainerBurguer>
      {isOpen ? desplegarMenu() : null}
    </div>
  );
}

export default Menu;
