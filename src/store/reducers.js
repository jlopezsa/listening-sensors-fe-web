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
          dataX: action.payload.dataX,
          dataY: action.payload.dataY,
          dataZ: action.payload.dataZ,
        },
      };
    case SAVE_DATA_GYROS_SENSOR:
      return {
        ...state,
        dataGyroscope: {
          createTime: action.payload.createTime,
          dataX: action.payload.dataX,
          dataY: action.payload.dataY,
          dataZ: action.payload.dataZ,
        },
      };
    default:
      return state;
  }
}

export default reducer;
