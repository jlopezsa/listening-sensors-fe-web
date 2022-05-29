/* eslint-disable */
import styled from 'styled-components';
import { colors } from '../../css/globalStyles';

const ContainerBigCard = styled.div`
width: 90vw;
height: auto;
background-color: ${colors.backgroundLight};
border-radius: 30px;
display: flex;
flex-direction: column;
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
font-size: 50px;
color: ${colors.mainTextHover};
text-align: center;
`;

const ContentBigCard = styled.p`
font-size: 30px;
padding: 10px;

`;

function InformationBigCardGrafico(props) {
  const { title, figure } = props;
  return (
    <ContainerBigCard>
      <TitleBigCard>{title}</TitleBigCard>
      <ImagBigCard src={figure} alt="title" />
      <ContentBigCard>El aplicativo móvil (para Android) puede ser descarado en</ContentBigCard>
      <ContentBigCard>
        <a href="https://github.com/jlopezsa/listening-sensors-fe-mob/tree/develop">Link GitHub</a>
      </ContentBigCard>
    </ContainerBigCard>
  );
}

export default InformationBigCardGrafico;
