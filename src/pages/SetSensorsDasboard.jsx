import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../components/atomns/Button';
import AccelerometerDashboard from '../components/organisms/AccelerometerDashboard';
import GyroscopeDashboard from '../components/organisms/GyroscopeDashboard';
import MagnetometerDashboard from '../components/organisms/MagnetometerDashboard';
import MapDashboard from '../components/organisms/MapDashboard';

const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding-top: 100px;
`;

const ContainerSelectSensors = styled.div`
/* width: 800px; */
display: flex;
flex-direction: row;
justify-content: space-around;
flex-wrap: wrap;
`;

function SetSensorsDashboard() {
  const [isAccelerometer, setIsAccelerometer] = useState(false);
  const [isGyroscope, setIsGroscope] = useState(false);
  const [isMagnetometer, setIsMagnetometer] = useState(false);
  const [isMap, setIsMap] = useState(false);
  const dataSensorChoosed = useSelector((state) => state.sensorSetChoosed);

  const handleClickAccel = () => {
    setIsAccelerometer(!isAccelerometer);
  };
  const handleClickGyros = () => {
    setIsGroscope(!isGyroscope);
  };
  const handleClickMagneto = () => {
    setIsMagnetometer(!isMagnetometer);
  };
  const handleClickMap = () => {
    setIsMap(!isMap);
  };

  return (
    <DashboardContainer>
      <h1>
        {dataSensorChoosed.name}
      </h1>
      <ContainerSelectSensors>
        <Button onClick={handleClickAccel}>Accelerometer</Button>
        <Button onClick={handleClickGyros}>Gyroscope</Button>
        <Button onClick={handleClickMagneto}>Magnetometer</Button>
        <Button onClick={handleClickMap}>Mapa</Button>
      </ContainerSelectSensors>

      {isAccelerometer ? <AccelerometerDashboard /> : <> </> }
      {isGyroscope ? <GyroscopeDashboard /> : <> </> }
      {isMagnetometer ? <MagnetometerDashboard /> : <> </> }
      {isMap ? <MapDashboard /> : <> </> }
    </DashboardContainer>
  );
}

export default SetSensorsDashboard;
