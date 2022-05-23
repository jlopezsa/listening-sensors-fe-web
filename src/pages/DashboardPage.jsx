import React from 'react';
import styled from 'styled-components';
// import GyroscopeDashboard from '../components/organisms/GyroscopeDashboard';
// import AccelerometerDashboard from '../components/organisms/AccelerometerDashboard';
// import MagnetometerDashboard from '../components/organisms/MagnetometerDashboard';
import DevicesList from '../components/molecules/DevicesList';

const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
function DashboardPage() {
  return (
    <DashboardContainer>
      <h1>Lista de dispositivos</h1>
      <DevicesList />
      {/* <AccelerometerDashboard />
      <GyroscopeDashboard />
      <MagnetometerDashboard /> */}
    </DashboardContainer>
  );
}

export default DashboardPage;
