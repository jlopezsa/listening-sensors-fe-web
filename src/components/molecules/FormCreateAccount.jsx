import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import Swal from 'sweetalert2';
import { setDocument } from '../../utils/firebase';
import {
  ROUTE_LOGIN,
  ROUTE_DASHBOARD,
} from '../../routes/routes';
import { Button } from '../atomns/Button';
import { Input } from '../atomns/Input';
import { NavLinkStyledDark } from '../atomns/NavLinkStyledDark';
import SocialNetwork from '../atomns/SocialNetworks';
import iconFacebook from '../../figures/facebook_icon_square.svg';

// Styled components
export const ContainerFormSignupLogin = styled.div`
text-align: center;
width: 350px;
margin: 0px;
padding: 0px;
`;

const auth = getAuth();
const provider = new FacebookAuthProvider();

function FormCreateAccount() {
  const navigate = useNavigate();
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  // const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line max-len
      const userCredential = await createUserWithEmailAndPassword(auth, userData.userEmail, userData.userPassword);
      Swal.fire(
        'Registro exitoso ',
        'Ingresa tus datos para entrar a la plataforma!',
        'success',
      );

      // setUser(userCredential.user);

      await setDocument('users', {
        id: userCredential.user.uid,
        name: userData.userName,
        email: userCredential.user.email,
        photo: userCredential.user.photoURL,
        role: 'user',
      });

      navigate(ROUTE_LOGIN);
    } catch (error) {
      switch (error.code) {
        case 'auth/email-already-in-use':
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'Tu e-mail ya está registrado, intenta otro!',
          });
          break;
        case 'auth/weak-password':
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'Tu password debe tener como mínimo 6 caracteres!',
          });
          break;
        default:
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'Ingresa tus datos nuevamente',
          });
          break;
      }
    }
  };

  const handleLoginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const { user } = result;
      // setUser(userInfo);
      await setDocument('users', {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: 'user',
      });

      Swal.fire(
        'Registro exitoso ',
        'Ya puedes acceder a los recursos de la plataforma!',
        'success',
      );
      navigate(ROUTE_DASHBOARD);
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const credential = FacebookAuthProvider.credentialFromResult(result);
      // const { accessToken } = credential;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Algo salió mal',
        text: 'No fue posible acceder a tu cuenta Facebook',
      });
    }
  };

  return (
    <ContainerFormSignupLogin>
      <form action="">
        <Input onChange={handleChange} type="text" name="userName" placeholder="Ingrese nombre" />
        <Input onChange={handleChange} type="email" name="userEmail" placeholder="Ingrese e-mail" />
        <Input onChange={handleChange} type="password" autoComplete="off" name="userPassword" placeholder="Ingrese password" />
        <h5>
          Ya tienes cuenta?
          <NavLinkStyledDark to={ROUTE_LOGIN}> Ingresa a traves del login! </NavLinkStyledDark>
        </h5>
        <Button onClick={handleCreateAccount}>Crear cuenta</Button>
      </form>
      <hr />
      <h5>También pedes ingresar usando tu red social</h5>
      <Button onClick={handleLoginWithFacebook}>
        <SocialNetwork imageSocial={iconFacebook} />
      </Button>
    </ContainerFormSignupLogin>
  );
}

export default FormCreateAccount;
