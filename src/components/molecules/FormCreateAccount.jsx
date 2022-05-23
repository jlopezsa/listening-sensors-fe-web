/* eslint-disable */
import { useState } from 'react';
import styled from 'styled-components';
import { setDocument } from '../../utils/firebase';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider ,
  getAuth,
  signInWithPopup,
} from 'firebase/auth';
import { Button } from '../atomns/Button';
import { Input } from '../atomns/Input';
import iconFacebook from '../../figures/facebook_icon_square.svg';
import SocialNetwork from '../atomns/SocialNetworks';

// Styled components
const ContainerFormSignup = styled.div`
text-align: center;
width: 350px;
margin: 0px;
padding: 0px;
`;

const auth = getAuth();
const provider = new FacebookAuthProvider();


function FormCreateAccount() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }

  const handleCreateAccount = async () => {
    try {
      const userCredential = createUserWithEmailAndPassword(auth, userData.userEmail, userData.userPassword)
      setUser(userCredential.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('ERROR: ', errorCode, errorMessage);
    }
  }

  const handleLoginWithFacebook = async () => {
    try {
      console.log('FLAG-01: ');
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
      setUser(user);
      await setDocument('users', {
        id: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: 'user',
      });

      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const credential = FacebookAuthProvider.credentialFromResult(result);
      console.log("credential", credential)
      const accessToken = credential.accessToken;
      console.log("accessToken", accessToken)
    } catch (error) {
      // console.log("error", error)
    }
  }

  const handleLogin = async () => {

  }
  return (
    <ContainerFormSignup>
      <form action="">
        <Input onChange={handleChange} type='text' name='userName' placeholder="Ingrese nombre" />
        <Input onChange={handleChange} type='email' name='userEmail' placeholder="Ingrese e-mail" />
        <Input onChange={handleChange} type='password' name='userPassword' placeholder="Ingrese password" />
        <h5>Ya tienes cuenta? Ingresa a la platafoma a traves del login </h5>
        <Button onClick={handleCreateAccount}>Crear cuenta</Button>
      </form>
      <hr/>
      <h5>También pedes ingresar usando tu red social</h5>
      <Button onClick={handleLoginWithFacebook} >
        <SocialNetwork imageSocial={iconFacebook}/>
      </Button>
    </ContainerFormSignup>
  );
}

export default FormCreateAccount;
