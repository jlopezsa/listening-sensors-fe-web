import styled from 'styled-components';
import dataFig from '../components/atomns/DataFigures';
import SlidesImage from '../components/molecules/SlidesImage';
import { colors } from '../css/globalStyles';

const ContainerSlider = styled.div`
background-color: ${colors.backgroundDark};
padding-top: 40px;
padding-bottom: 40px;
display: flex;
justify-content: center;
`;

function HomePage() {
  return (
    <div>
      <ContainerSlider>
        <SlidesImage items={dataFig} />
      </ContainerSlider>
    </div>
  );
}

export default HomePage;
