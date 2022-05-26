import styled from 'styled-components';
import slideItems from '../components/atomns/DataFigures';
import SlidesImage from '../components/molecules/SlidesImage';
import { colors } from '../css/globalStyles';
import ContentCards from '../components/organisms/ContentCards';
import InformationBigCard from '../components/molecules/InformationBigCard';
import figAim from '../figures/listening-sensors.png';
import figArchitecture from '../figures/architecture.png';
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
      <ContainerSlider>
        <SlidesImage items={slideItems} />
      </ContainerSlider>
      <ContainerInfo>
        <InformationBigCard title="Lo que se hace como" content="Conexion de sensores" figure={figAim} />
      </ContainerInfo>
      <ContentCards />
      <ContainerInfo>
        <InformationBigCard title="Arquitectura" content="Conexion de sensores" figure={figArchitecture} />
      </ContainerInfo>
      {/* <img alt="" src={urlImage} /> */}
    </div>
  );
}

export default HomePage;
