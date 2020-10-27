const initState = {};

export default function mainReducer(state = initState, action) {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        userData: action.user,
      };

    case 'LOGOUT_USER':
      return {};

    case 'GET_APPOINTMENTS':
      return {
        ...state,
        appointments: action.appointments,
      };

    case 'GET_DOCTORS':
      return {
        ...state,
        services: action.services,
      };
    
      case 'GET_ERRORS':
        return {
          ...state,
          errors: action.payload,
        };
  
    default:
      return state;
  }
}