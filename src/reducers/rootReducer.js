import { combineReducers } from 'redux';
import authReducer from './authReducer';
import apptReducer from './apptReducer';
import doctorsReducer from './doctorsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  appt: apptReducer,
  doctors: doctorsReducer,
});

export default rootReducer;
// import { combineReducers } from 'redux';
// import mainReducer from './index';

// const rootReducer = combineReducers({
//   mainReducer,
// });

// export default rootReducer;
