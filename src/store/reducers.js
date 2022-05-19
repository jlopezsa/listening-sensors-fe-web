import {
  SAVE_DATA_ACCEL_SENSOR,
  SAVE_DATA_GYROS_SENSOR,
  CALCULATE_SPEED_ACCEL,
  SAVE_DATA_MAGNE_SENSOR,
} from './types';

const initialState = {
  dataAccelerometer: {
    createTime: 0,
    dataX: 0,
    dataY: 0,
    dataZ: 0,
  },
  dataGyroscope: {
    createTime: 0,
    dataX: 0,
    dataY: 0,
    dataZ: 0,
  },
  dataMagnetometer: {
    createTime: 0,
    dataX: 0,
    dataY: 0,
    dataZ: 0,
  },
  speed: {
    totalSpeed: 0,
    speedX: 0,
    speedY: 0,
    speedZ: 0,
  },
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_DATA_ACCEL_SENSOR:
      return {
        ...state,
        dataAccelerometer: {
          createTime: action.payload.createTime,
          dataX: action.payload.x,
          dataY: action.payload.y,
          dataZ: action.payload.z,
        },
      };
    case SAVE_DATA_GYROS_SENSOR:
      return {
        ...state,
        dataGyroscope: {
          createTime: action.payload.createTime,
          dataX: action.payload.x,
          dataY: action.payload.y,
          dataZ: action.payload.z,
        },
      };
    case SAVE_DATA_MAGNE_SENSOR:
      return {
        ...state,
        dataMagnetometer: {
          createTime: action.payload.createTime,
          dataX: action.payload.x,
          dataY: action.payload.y,
          dataZ: action.payload.z,
        },
      };
    case CALCULATE_SPEED_ACCEL:
      return {
        ...state,
        speed: {
          totalSpeed: Math.sqrt(state.speed.speedX ** 2
            + state.speed.speedY ** 2
            + state.speed.speedZ * 0 ** 2),
          speedX: action.payload.x * 9.81 * 0.1,
          speedY: action.payload.y * 9.81 * 0.1,
          speedZ: action.payload.z * 9.81 * 0.1,
        },
      };
    default:
      return state;
  }
}

export default reducer;
