import React, { useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { dbRT } from '../../utils/firebase';
import { saveDataMagne } from '../../store/actions';
import XYZgraphicMagnetometer from '../molecules/XYZgraphicMagnetometer';
import XYZgraphicHistoryMagnetometer from '../molecules/XYZgraphicHistoryMagnetometer';

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

function MagnetometerDashboard() {
  const nameCollection = useSelector((state) => state.collectionName);
  const dispatch = useDispatch();
  const starCountRef = ref(dbRT, `${nameCollection}/magnetometer`);

  useEffect(() => {
    const unsubscribe = onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      dispatch(saveDataMagne(data));
    });
    return () => {
      unsubscribe();
    };
  });
  return (
    <div>
      <h1>Magnetometro</h1>
      <ContainerGraph>
        <XYZgraphicHistoryMagnetometer />
        <XYZgraphicMagnetometer />
      </ContainerGraph>
    </div>
  );
}

export default MagnetometerDashboard;
