import styled from 'styled-components';
import slideItems from '../components/atomns/DataFigures';
import SlidesImage from '../components/molecules/SlidesImage';
import { colors } from '../css/globalStyles';
import ContentCards from '../components/organisms/ContentCards';
import InformationBigCard from '../components/molecules/InformationBigCard';
import InformationBigCardArchitecture from '../components/molecules/InformationBigCardArchitecture';
import InformationBigCardGrafico from '../components/molecules/InformationBigCardGrafico';
import figAim from '../figures/listening-sensors.png';
import figArchitecture from '../figures/architecture.png';
import figEntornoGrafico from '../figures/entorno-grafico.png';
// import { getImafFromFirebase } from '../utils/firebase';

const ContainerSlider = styled.div`
background-color: ${colors.backgroundDark};
padding-top: 40px;
padding-bottom: 40px;
display: flex;
justify-content: center;
`;

const ContainerInfo = styled.div`
display: flex;
justify-content: center;
`;

const MainTitle = styled.h1`
  background-color: ${colors.backgroundDark};
  margin: 0px;
  text-align: center;
  color: ${colors.mainTextHover};
  font-size: 50px;
`;

function HomePage() {
  // const [urlImage, setUrlImage] = useState('');
  // useEffect(() => {
  //   const downloadUrlImage = (async () => {
  //     const url = await getImafFromFirebase();
  //     setUrlImage(url);
  //   });
  //   downloadUrlImage();
  // }, []);
  return (
    <div>
      <MainTitle>Listening Sensors</MainTitle>

      <ContainerSlider>
        <SlidesImage items={slideItems} />
      </ContainerSlider>

      <ContainerInfo>
        <InformationBigCard title="Objetivo" figure={figAim} />
      </ContainerInfo>

      <ContainerInfo>
        <InformationBigCardGrafico title="Entorno Gráfico" figure={figEntornoGrafico} />
      </ContainerInfo>

      <ContentCards />

      <ContainerInfo>
        <InformationBigCardArchitecture title="Arquitectura" content="" figure={figArchitecture} />
      </ContainerInfo>
      {/* <img alt="" src={urlImage} /> */}
    </div>
  );
}

export default HomePage;
