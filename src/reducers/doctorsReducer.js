import { initDoctorsState } from '../helpers/initStates';

const doctorReducer = (state = initDoctorsState, action) => {
  switch (action.type) {
    case 'REQUEST_DOCTORS':
    case 'GET_DOCTOR':
      return {
        ...state,
        fetching: true,
      };

    case 'RECEIVE_DOCTORS':
      return {
        ...state,
        fetching: false,
        list: action.list,
      };

    case 'RECEIVE_DOCTORS_ERROR':
    case 'GET_DOCTOR_ERROR':
      return {
        ...state,
        fetching: false,
        message: action.error,
      };

    case 'GET_DOCTOR_SUCCESS':
      return {
        ...state,
        fetching: false,
        currentDoctor: action.doctor,
      };

    default:
      return state;
  }
};

export default doctorReducer;
