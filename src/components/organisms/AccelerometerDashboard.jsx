/* eslint-disable */
import React, { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { doc, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { dbRT, db } from '../../utils/firebase';
import { saveDataAccel } from '../../store/actions';
import XYZgraphic from '../molecules/XYZgraphic';
import XYZgraphicHistory from '../molecules/XYZgraphicHistory';

const ContainerGraph = styled.div`
display: flex;
flex-direction: column;
align-items: center;

@media (min-width: 1281px) {
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
}
`;

function AccelerometerDashboard() {
  const dispatch = useDispatch();
  const starCountRef = ref(dbRT, 'sensorSet_A1/accelerometer');

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(saveDataAccel(data));
    });
    // onSnapshot(doc(db, 'sensorSet', 'set_A1'), (doc) => {;
    //   const data = {
    //     x: doc.data().accelerometer.coords[0].x,
    //     y: doc.data().accelerometer.coords[0].y,
    //     z: doc.data().accelerometer.coords[0].z,
    //     createTime: doc.data().accelerometer.sampleTime[0],
    //   };
    //   dispatch(saveDataAccel(data));
    // });
  });
  return (
    <div>
      <h1>Acelerometro</h1>
      <ContainerGraph>
        <XYZgraphicHistory />
        <XYZgraphic />
      </ContainerGraph>
    </div>
  );
}

export default AccelerometerDashboard;
