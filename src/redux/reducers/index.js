import { combineReducers } from 'redux';
import drivingTestFormreducer from './drivingTestFormreducer'

const rootReducer = combineReducers({
   formData: drivingTestFormreducer,
});

export default rootReducer;
