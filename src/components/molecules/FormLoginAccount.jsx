import { useState } from 'react';
import {
  FacebookAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveUserLoged } from '../../store/actions';
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
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    userEmail: '',
    userPassword: '',
  });

  const handleLoginWithFacebook = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const { user } = result;
      dispatch(saveUserLoged(user));
      await setDocument('users', {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: 'user',
      });

      Swal.fire({
        icon: 'success',
        title: 'Login exitoso',
        showConfirmButton: false,
        timer: 1500,
      });
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
      dispatch(saveUserLoged(userCredential.user));
      Swal.fire({
        icon: 'success',
        title: 'Login exitoso',
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(ROUTE_DASHBOARD);
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-email':
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'La sintaxis del email no es valida, verifica nuevamente!',
          });
          break;
        case 'auth/wrong-password':
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'Tu e-mail o password están incorrectos, intenta nuevamente!',
          });
          break;
        case 'auth/user-not-found':
          Swal.fire({
            icon: 'error',
            title: 'Algo salió mal',
            text: 'El e-mail ingresado no está registrado, crea una cuenta!',
          });
          break;
        default:
          break;
      }
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
