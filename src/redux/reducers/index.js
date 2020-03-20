import { combineReducers } from 'redux';
import drivingTestFormreducer from './drivingTestFormreducer';
import localDataReducer from './localDataReducer';

const rootReducer = combineReducers({
   formData: drivingTestFormreducer,
   localData: localDataReducer
});

export default rootReducer;
