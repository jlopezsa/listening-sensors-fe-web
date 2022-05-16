import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { dbRT } from '../utils/firebase';
import { Header } from '../components/atomns/Header';
import LogoSensor from '../components/atomns/LogoSensor';
import XYZgraphic from '../components/molecules/XYZgraphic/XYZgraphic';
import Menu from '../components/atomns/Menu/Menu';

function HomePage() {
  const [accelData, setAccelData] = useState({
    dataX: 0,
    dataY: 0,
    dataZ: 0,
  });

  const starCountRef = ref(dbRT, 'accelerometer/');

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setAccelData((accelDataSatate) => ({
        ...accelDataSatate,
        dataX: data.x,
        dataY: data.y,
        dataZ: data.z,
      }));
    });
  }, [accelData.dataX, accelData.dataY, accelData.dataZ]);

  return (
    <div>
      <Header className="header_area">
        <LogoSensor />
        <Menu />
      </Header>
      <XYZgraphic xyzValues={accelData} />
    </div>

  );
}

export default HomePage;
