import { combineReducers } from 'redux';
import authReducer from './authReducer';
import appointmentReducer from './appointmentReducer';
import doctorsReducer from './doctorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  appointments: appointmentReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
