import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';
import { colors } from '../../css/globalStyles';

export const HashLinkStyled = styled(HashLink)`
  margin: 0;
  padding: 10px;
  text-decoration: none;
  font-weight: bold;
  color: ${colors.mainTextLight};

  &:hover{
    color: ${colors.mainTextHover};
    transition: all 700ms ease 0s;
  }
`;
