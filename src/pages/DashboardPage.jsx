import React, { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { useDispatch } from 'react-redux';
import { dbRT } from '../utils/firebase';
import { saveDataAccel } from '../store/actions';

import XYZgraphic from '../components/molecules/XYZgraphic';
import XYZgraphicHistory from '../components/molecules/XYZgraphicHistory';

function DashboardPage() {
  const dispatch = useDispatch();

  const starCountRef = ref(dbRT, 'accelerometer/');

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(saveDataAccel(data));
    });
  });
  return (
    <div>
      DashboardPage
      <XYZgraphicHistory sensor={1} />
      <XYZgraphic />
    </div>
  );
}

export default DashboardPage;
