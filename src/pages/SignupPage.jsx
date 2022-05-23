import styled from 'styled-components';
import FormCreateAccount from '../components/molecules/FormCreateAccount';

const ContainerSignup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;
function SignupPage() {
  return (
    <ContainerSignup>
      <h1>
        Signup
      </h1>
      <FormCreateAccount />
    </ContainerSignup>
  );
}

export default SignupPage;
