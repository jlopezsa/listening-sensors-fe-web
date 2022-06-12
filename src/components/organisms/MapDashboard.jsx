import styled from 'styled-components';
import MapLeaflet from '../molecules/MapLeaflet';

const ContainerMap = styled.div`
background-color: blue;;
height: "800px";
width: "800px";
`;

function MapDashboard() {
  return (
    <ContainerMap>
      <MapLeaflet />
    </ContainerMap>
  );
}

export default MapDashboard;
