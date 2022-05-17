import {
  SAVE_DATA_ACCEL_SENSOR,
  SAVE_DATA_GYROS_SENSOR,
} from './types';

export const saveDataAccel = (dataAccel) => ({
  type: SAVE_DATA_ACCEL_SENSOR,
  payload: dataAccel,
});

export const saveDataGyros = (dataGyros) => ({
  type: SAVE_DATA_GYROS_SENSOR,
  payload: dataGyros,
});
