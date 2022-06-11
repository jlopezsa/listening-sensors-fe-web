import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import {
  ref,
  get,
  child,
} from 'firebase/database';
import { dbRT } from '../utils/firebase';
import { saveCollection } from '../store/actions';
// import GyroscopeDashboard from '../components/organisms/GyroscopeDashboard';
// import AccelerometerDashboard from '../components/organisms/AccelerometerDashboard';
// import MagnetometerDashboard from '../components/organisms/MagnetometerDashboard';
import DevicesList from '../components/molecules/DevicesList';

const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-left: 50px;
margin-right: 50px;
`;

const H1 = styled.h1`
padding-top: 100px;
`;

function DashboardPage() {
  const dispatch = useDispatch();

  const dbRef = ref(dbRT);
  function getDataDRT() {
    get(child(dbRef, '/')).then((snapshot) => {
      if (snapshot.exists()) {
        dispatch(saveCollection(snapshot.val()));
        return snapshot.val();
      }
      return null;
    }).catch((error) => {
      throw new Error(error.message);
    });
  }

  useEffect(() => {
    getDataDRT();
  }, []);

  return (
    <DashboardContainer>
      <H1>Lista de dispositivos</H1>
      <DevicesList />
      {/* <AccelerometerDashboard />
      <GyroscopeDashboard />
      <MagnetometerDashboard /> */}
    </DashboardContainer>
  );
}

export default DashboardPage;
