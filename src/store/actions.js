import {
  SAVE_DATA_ACCEL_SENSOR,
  SAVE_DATA_GYROS_SENSOR,
  CALCULATE_SPEED_ACCEL,
  SAVE_DATA_MAGNE_SENSOR,
  SAVE_DATA_USER_LOGED,
  SAVE_COLLECTIONS,
  SAVE_SENSOR_SET_CHOOSED,
  SAVE_COLLECTION_NAME,
} from './types';

export const saveDataAccel = (dataAccel) => ({
  type: SAVE_DATA_ACCEL_SENSOR,
  payload: dataAccel,
});

export const saveDataGyros = (dataGyros) => ({
  type: SAVE_DATA_GYROS_SENSOR,
  payload: dataGyros,
});

export const saveDataMagne = (dataMagne) => ({
  type: SAVE_DATA_MAGNE_SENSOR,
  payload: dataMagne,
});

export const speedCalculate = (dataAccel) => ({
  type: CALCULATE_SPEED_ACCEL,
  payload: dataAccel,
});

export const saveUserLoged = (userData) => ({
  type: SAVE_DATA_USER_LOGED,
  payload: userData,
});

export const saveCollection = (collectionData) => ({
  type: SAVE_COLLECTIONS,
  payload: collectionData,
});

export const saveSensorChoosed = (sensorChoosedData) => ({
  type: SAVE_SENSOR_SET_CHOOSED,
  payload: sensorChoosedData,
});

export const saveCollectionName = (collectionName) => ({
  type: SAVE_COLLECTION_NAME,
  payload: collectionName,
});
