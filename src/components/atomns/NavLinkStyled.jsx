import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../css/globalStyles';

export const NavLinkStyled = styled(NavLink)`
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
