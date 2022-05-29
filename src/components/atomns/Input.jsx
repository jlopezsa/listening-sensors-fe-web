import styled from 'styled-components';
import { colors } from '../../css/globalStyles';

export const Input = styled.input`
  background-color: ${colors.backgroundLight};
  border: 2px solid ${colors.backgroundDark};
  border-radius: 10px;
  box-shadow: none;
  height: 20px;
  margin-bottom: 30px;
  padding: 15px;
  padding-right: 0px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 95%;
`;
