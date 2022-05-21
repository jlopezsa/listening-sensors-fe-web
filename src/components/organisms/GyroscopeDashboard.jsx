import React, { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { dbRT } from '../../utils/firebase';
import { saveDataGyros } from '../../store/actions';
import XYZgraphicGyroscope from '../molecules/XYZgraphicGyroscope';
import XYZgraphicHistoryGyroscope from '../molecules/XYZgraphicHistoryGyroscope';

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

function GyroscopeDashboard() {
  const dispatch = useDispatch();
  const starCountRef = ref(dbRT, 'sensorSet_A1/gyroscope');

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(saveDataGyros(data));
    });
  });
  return (
    <div>
      <h1>Giroscópio</h1>
      <ContainerGraph>
        <XYZgraphicHistoryGyroscope />
        <XYZgraphicGyroscope />
      </ContainerGraph>
    </div>
  );
}

export default GyroscopeDashboard;