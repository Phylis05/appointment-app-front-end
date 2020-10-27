export const loginUser = userObj => ({
  type: 'LOGIN_USER',
  payload: userObj,
});

export const logoutUser = () => ({
  type: 'LOGOUT_USER',
});

export const getUserAppointments = appointments => ({
  type: 'GET_APPOINTMENTS',
  payload: appointments,
});

export const getDoctors = doctors => ({
  type: 'GET_DOCTORS',
  payload: doctors,
});
