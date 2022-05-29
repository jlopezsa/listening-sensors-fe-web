import styled from 'styled-components';
import FormCreateAccount from '../components/molecules/FormCreateAccount';

export const ContainerForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
function SignupPage() {
  return (
    <ContainerForm>
      <h1>
        Signup
      </h1>
      <FormCreateAccount />
    </ContainerForm>
  );
}

export default SignupPage;
