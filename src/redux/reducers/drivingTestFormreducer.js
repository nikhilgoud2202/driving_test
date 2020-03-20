import * as types from './ActionTypes'
import { render } from 'react-dom'

const initialState = {
  P1_total_Sc: 0,
  P2_total_Sc: 0,
  P3_total_Sc: 0,
  P4_total_Sc: 0,
  P5_total_Sc: 0,
  P6_total_Sc: 0,
  P7_total_Sc: 0,
}

const drivingTestFormreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DATA:
      return {
        ...state,
        ...action.data
      }
    case types.CLEAR_DATA: {
      return {
        ...initialState()
      }
    }
    case types.STORING_DATA: {
      return {
        ...state,

      }
    }
    case types.CLEAR_STORING_DATA: {
      return {
        ...state,

      }
    }
    default:
      return state
  }
}

export default drivingTestFormreducer;