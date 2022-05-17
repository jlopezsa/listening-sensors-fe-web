import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { dbRT } from '../utils/firebase';

import XYZgraphic from '../components/molecules/XYZgraphic';
import XYZgraphicHistory from '../components/molecules/XYZgraphicHistory';

function DashboardPage() {
  const [accelData, setAccelData] = useState({
    createTime: 0,
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
        createTime: data.createTime,
        dataX: data.x,
        dataY: data.y,
        dataZ: data.z,
      }));
    });
  }, [accelData.dataX, accelData.dataY]);
  return (
    <div>
      DashboardPage
      <XYZgraphicHistory xyzValues={accelData} />
      <XYZgraphic xyzValues={accelData} />
    </div>
  );
}

export default DashboardPage;
