import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AccelerometerDashboard from '../components/organisms/AccelerometerDashboard';
import GyroscopeDashboard from '../components/organisms/GyroscopeDashboard';
import MagnetometerDashboard from '../components/organisms/MagnetometerDashboard';

const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

function SetSensorsDashboard() {
  const dataSensorChoosed = useSelector((state) => state.sensorSetChoosed);
  return (
    <DashboardContainer>
      <h1>
        {dataSensorChoosed.name}
      </h1>
      <AccelerometerDashboard />
      <GyroscopeDashboard />
      <MagnetometerDashboard />
    </DashboardContainer>
  );
}

export default SetSensorsDashboard;
