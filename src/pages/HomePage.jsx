import React, { useEffect, useState } from 'react';
import { getAccelerometerData } from '../utils/firebase';

function HomePage() {
  const [accelData, setAccelData] = useState(0);
  useEffect(() => {
    const accelerometerData = getAccelerometerData();
    console.log('FROM DATA BASE RT:  ', JSON.stringify(accelerometerData));
    console.log('FROM DATAASE RT:  ', accelerometerData.x);
    setAccelData(accelerometerData.x);
  }, [accelData]);

  return (
    <div>
      <h1>HomePage</h1>
      <h3>{accelData}</h3>
    </div>

  );
}

export default HomePage;
