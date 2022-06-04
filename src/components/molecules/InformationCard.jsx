/* eslint-disable */
import styled from 'styled-components';
import { colors } from '../../css/globalStyles';

const ContainerCard = styled.div`
width: 350px;
background-color: ${colors.backgroundLight};
border-radius: 30px;
margin-bottom: 50px;
`;


const ImagCard = styled.img`
  height: 237px;
  width: 350px;
  background-repeat: no-repeat;
  background-size: 40px 40px;
  background-position: center;
  margin-right: auto;
  margin-left: auto;
  border-radius: 10% 10% 0% 0%;
`;

const TitleCard = styled.h3`
font-size: 20px;
color: ${colors.mainTextHover};
text-align: center;
`;

const ContentCard = styled.p`
font-size: 18px;
padding: 10px;
`;

function InformationCard(props) {
  const { title, content, figure } = props;
  return (
    <ContainerCard>
      <ImagCard src={figure} alt="title" />
      <TitleCard>{title}</TitleCard>
      <ContentCard>{content}</ContentCard>
    </ContainerCard>
  );
}

export default InformationCard;
