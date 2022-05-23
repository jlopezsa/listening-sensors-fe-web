import React from 'react';
import GyroscopeDashboard from '../components/organisms/GyroscopeDashboard';
import AccelerometerDashboard from '../components/organisms/AccelerometerDashboard';
import MagnetometerDashboard from '../components/organisms/MagnetometerDashboard';
import DevicesList from '../components/molecules/DevicesList';

function DashboardPage() {
  return (
    <div>
      DashboardPage
      <DevicesList />
      <AccelerometerDashboard />
      <GyroscopeDashboard />
      <MagnetometerDashboard />
    </div>
  );
}

export default DashboardPage;
