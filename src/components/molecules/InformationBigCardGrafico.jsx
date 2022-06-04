/* eslint-disable */
import styled from 'styled-components';
import { Button } from '../atomns/Button';
import SocialNetwork from '../atomns/SocialNetworks';
import SVG from 'react-inlinesvg';
// import { Link } from 'react-router-dom';
import { colors } from '../../css/globalStyles';
import iconGitHub from '../../figures/github_icon.svg';
import QRcode from '../../figures/app-mobile-expo-go.svg';

const ContainerBigCard = styled.div`
width: 90vw;
height: auto;
background-color: ${colors.backgroundLight};
border-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;
margin-bottom: 50px;
flex-wrap: wrap;
text-align: center;
`;


const ImagBigCard = styled.img`
  width: 90vw;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center;
  margin-right: auto;
  margin-left: auto;
  border-radius: 0% 0% 0% 0%;
  `;

const TitleBigCard = styled.h3`
font-size: 40px;
color: ${colors.mainTextHover};
text-align: center;
`;

const ContentBigCard = styled.p`
font-size: 20px;
padding: 10px;
`;

const ContentBigCardButtonQR = styled.p`
font-size: 20px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 30vw;
`;

const Alink = styled.a`
text-decoration: none;
color: ${colors.mainTextLight};
&:hover{
  color: ${colors.mainTextDark};
}
`;

const ImagSmall = styled(SVG)`
  height: 350px;
  width: auto;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center;
  margin-right: 50px;
  margin-left: 50px;
  & path {
    fill: orange;
  }
`;

function InformationBigCardGrafico(props) {
  const { title, figure } = props;

  return (
    <ContainerBigCard id="methodology">
      <TitleBigCard>{title}</TitleBigCard>
      <ImagBigCard src={figure} alt="title" />
      <ContentBigCard>
        El aplicativo móvil (para Android) puede ser descargado en
      </ContentBigCard>
      <ContentBigCardButtonQR>
        <ImagSmall src={QRcode} alt="title" />
        <br />
        Ó desde el repositorio GitHub
        <Button>
          <Alink href="https://github.com/jlopezsa/listening-sensors-fe-mob/tree/develop">
            <SocialNetwork imageSocial={iconGitHub} socialNetwork='GitHub' />
          </Alink>
        </Button>
      </ContentBigCardButtonQR>
    </ContainerBigCard>
  );
}

export default InformationBigCardGrafico;
