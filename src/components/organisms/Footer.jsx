import React from 'react';
import styled from 'styled-components';
import { colors } from '../../css/globalStyles';
// import iconFacebook from '../../figures/facebook_icon.svg';
import SocialNetworksGroup from '../molecules/SocialNetworksGroup';

const ContainerFooter = styled.div`
height: 50vh;
background-color: ${colors.backgroundDarkHigh};
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const BoldText = styled.p`
color: ${colors.mainTextLight};
font-size: 18px;
text-align: center;
`;

function Footer() {
  return (
    <ContainerFooter>
      <SocialNetworksGroup />
      <BoldText> &copy; 2022: Julian Jair López Salamanca, listeningsensors</BoldText>
    </ContainerFooter>
  );
}

export default Footer;
