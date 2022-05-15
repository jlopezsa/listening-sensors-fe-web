import React, { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { dbRT } from '../utils/firebase';

function HomePage() {
  const [accelDataX, setAccelDataX] = useState(0);
  const [accelDataY, setAccelDataY] = useState(0);
  const [accelDataZ, setAccelDataZ] = useState(0);
  const starCountRef = ref(dbRT, 'accelerometer/');

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setAccelDataX(data.x);
      setAccelDataY(data.y);
      setAccelDataZ(data.z);
    });
  });

  return (
    <div>
      <h1>HomePage</h1>
      <h3>
        x:
        {' '}
        { accelDataX }
      </h3>
      <h3>
        y:
        {' '}
        { accelDataY }
      </h3>
      <h3>
        z:
        {' '}
        { accelDataZ }
      </h3>
    </div>

  );
}

export default HomePage;
