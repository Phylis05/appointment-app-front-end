import { combineReducers } from 'redux';
import authReducer from './authReducer';
import apptReducer from './apptReducer';
import doctorsReducer from './doctorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  appointments: apptReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
