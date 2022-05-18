import React, { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { useDispatch } from 'react-redux';
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
      <h1>Hola Accel</h1>
      <ContainerGraph>
        <XYZgraphicHistory sensor={1} />
        <XYZgraphic sensor={1} />
      </ContainerGraph>
    </div>
  );
}

export default AccelerometerDashboard;
