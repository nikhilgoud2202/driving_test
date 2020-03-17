import * as types from './ActionTypes'

const initialState = {
  parking: {},
  driverInformation: {}
}

const drivingTestFormreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DATA:
      return {
        ...state,
        ...action.data
      }
    case types.UPDATE_PARKING_DATA:
      return {
        ...state,
        parking: {
          ...action.data
        }
      }
    default:
      return state
  }
}

export default drivingTestFormreducer;