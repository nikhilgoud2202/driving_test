import * as types from './ActionTypes'

const initialState = {
    licenseNumber: '', 
    firstName: '', 
    lastName: '',
    startTime: '',
    startOdometer: '',
    startLoction: '',
    testCompleted: false,
}

const localDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.CLEAR_DATA: {
            return {
                ...initialState()
            }
        }
        case types.UPDATE_TEST_DATA:
            return {
                ...state,
                ...action.data
        }
        case types.TEST_COMPLETED:
            return {
                ...state,
                testCompleted: action.testCompleted
        }
        default:
            return state
    }
}

export default localDataReducer;