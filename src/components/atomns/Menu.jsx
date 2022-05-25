/* eslint-disale */
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAuth, signOut } from 'firebase/auth';
// import Hamburger from 'hamburger-react';
import Swal from 'sweetalert2';
import {
  ROUTE_HOME,
  ROUTE_DASHBOARD,
  ROUTE_LOGIN,
  ROUTE_SIGNUP,
} from '../../routes/routes';
import { NavLinkStyled } from './NavLinkStyled';
import { saveUserLoged } from '../../store/actions';

const Nav = styled.nav`
  margin-right: 50px;
  margin-left: 50px;
  display: true;
  @media (max-width: 690px) {
    display: none;
}
`;

const Ul = styled.ul`
  margin: 0px;
  padding: 0px;
`;

/* const NavLinkStyledBurger = styled(NavLink)`
background: black;
  display: block;
  position: absolute;
  right: 0;
  top: 0;
  &:hover {
  background-color: #ddd;
  color: black;
}
`; */

/* const II = styled.i`

`; */

const auth = getAuth();

function Menu() {
  const userIsLoged = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
          dispatch(saveUserLoged(null));
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

  /* const myFunction = () => {
    const x = document.getElementById('myLinks');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }; */

  return (
    <div>
      <Nav>
        <Ul>
          <NavLinkStyled to={ROUTE_HOME}> Home </NavLinkStyled>
          {!userIsLoged
            ? null : <NavLinkStyled to={ROUTE_DASHBOARD}> Dashboard </NavLinkStyled> }
          <NavLinkStyled to={ROUTE_HOME}> Team </NavLinkStyled>
          <NavLinkStyled to={ROUTE_HOME}> Contact </NavLinkStyled>
          {!userIsLoged
            ? <NavLinkStyled to={ROUTE_SIGNUP}> Sign Up </NavLinkStyled> : null }
          {!userIsLoged
            ? <NavLinkStyled to={ROUTE_LOGIN}> Login </NavLinkStyled> : null }
          {!userIsLoged
            ? null
            : <NavLinkStyled to={ROUTE_HOME} onClick={handleClick}> Logout </NavLinkStyled> }
        </Ul>
      </Nav>

      {/* <Nav>
        <Hamburger color="#4FD1C5" />
      </Nav> */}
    </div>
  );
}

export default Menu;
