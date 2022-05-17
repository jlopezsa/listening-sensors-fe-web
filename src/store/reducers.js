import {
  SAVE_DATA_ACCEL_SENSOR,
  SAVE_DATA_GYROS_SENSOR,
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
    default:
      return state;
  }
}

export default reducer;
