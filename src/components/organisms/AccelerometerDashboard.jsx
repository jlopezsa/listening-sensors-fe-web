import React, { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { dbRT } from '../../utils/firebase';
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
  const nameCollection = useSelector((state) => state.collectionName);
  const dispatch = useDispatch();
  const starCountRef = ref(dbRT, `${nameCollection}/accelerometer`);

  useEffect(() => {
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(saveDataAccel(data));
    });
    return () => {
      unsubscribe();
    };
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
