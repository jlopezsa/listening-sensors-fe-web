import React from 'react';
import GyroscopeDashboard from '../components/organisms/GyroscopeDashboard';
import AccelerometerDashboard from '../components/organisms/AccelerometerDashboard';
import MagnetometerDashboard from '../components/organisms/MagnetometerDashboard';

function DashboardPage() {
  return (
    <div>
      DashboardPage
      <AccelerometerDashboard />
      <GyroscopeDashboard />
      <MagnetometerDashboard />
    </div>
  );
}

export default DashboardPage;
