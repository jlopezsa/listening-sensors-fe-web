import styled from 'styled-components';
import { colors } from '../../css/globalStyles';

export const Button = styled.button`
  margin: 0px;
  padding: 0px;
  font-weight: bold;
  color: ${colors.mainTextLight};
  background-color: ${colors.backgroundDarkHigh};
  border-radius: 6px;
  color: ${colors.mainTextLight};
  display: inline-block;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  margin-top: 15px;
  padding: 15px 24px;
  width: auto;
  border: 1px solid transparent;

  &:hover {
    background-color: ${colors.backgroundOrange};
    color: ${colors.mainTextLight};
    transition: all 700ms ease 0s;
    text-decoration: none;
    outline: none;
  }
`;
