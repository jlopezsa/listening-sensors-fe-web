/* eslint-disable */
import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
} from 'firebase/auth';
import { Button } from '../components/atomns/Button';

const auth = getAuth();
function SignupPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const handleClick = () => {
    console.log('Handle Click');
  };

  const handleCreateAccount = async () => {
    const email = 'jlopezsa@gmail.com';
    const password = '123456';
    try {
      const userCredential = createUserWithEmailAndPassword(auth, email, password)
      console.log('FLAG-01: ', userCredential);
      const user = userCredential.user;
      console.log('FLAG-02: ', user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('ERROR: ', errorCode, errorMessage);
    }

  }

  const handleLogin = async () => {

  }

  return (
    <div>
      <h1>
        Signup
      </h1>
      <Button onClick={handleCreateAccount}>Crear cuenta</Button>
    </div>
  );
}

export default SignupPage;
