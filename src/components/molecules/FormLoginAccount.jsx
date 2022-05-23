import { useState } from 'react';
import {
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { ContainerFormSignupLogin } from './FormCreateAccount';
import { Button } from '../atomns/Button';
import { Input } from '../atomns/Input';
import { NavLinkStyledDark } from '../atomns/NavLinkStyledDark';
import { setDocument } from '../../utils/firebase';
import SocialNetwork from '../atomns/SocialNetworks';
import iconFacebook from '../../figures/facebook_icon_square.svg';
import {
  ROUTE_DASHBOARD,
  ROUTE_SIGNUP,
} from '../../routes/routes';

const auth = getAuth();
const provider = new FacebookAuthProvider();

function FormLoginAccount() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userEmail: '',
    userPassword: '',
  });
  const [, setUserLogin] = useState(null);

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
        'Login exitoso ',
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

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.userEmail,
        userData.userPassword,
      );
      // Signed in
      setUserLogin(userCredential.user);
      console.log('USER_LOGIN: ', userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };
  return (
    <ContainerFormSignupLogin>
      <form action="">
        <Input onChange={handleChange} type="email" name="userEmail" placeholder="Ingrese e-mail" />
        <Input onChange={handleChange} type="password" autoComplete="off" name="userPassword" placeholder="Ingrese password" />
        <Button onClick={handleLogin}>Iniciar sesión</Button>
        <h5>
          No tienes cuenta?
          <NavLinkStyledDark to={ROUTE_SIGNUP}> Crea una aquí! </NavLinkStyledDark>
        </h5>
      </form>
      <hr />
      <h5>También pedes ingresar directamente usando tu red social</h5>
      <Button onClick={handleLoginWithFacebook}>
        <SocialNetwork imageSocial={iconFacebook} />
      </Button>
    </ContainerFormSignupLogin>
  );
}

export default FormLoginAccount;
