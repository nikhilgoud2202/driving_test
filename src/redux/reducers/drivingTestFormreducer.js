import * as types from './ActionTypes'
import { render } from 'react-dom'

const initialState = {
  answers: {},
  local: {}
}

const drivingTestFormreducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_DATA:
      return {
        ...state,
        answers: {
          ...action.data
        }
      }
    case types.CLEAR_DATA: {
      return {
        ...initialState()

      }
    }

    case types.UPDATE_TEST_DATA:
      return {
        ...state,


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