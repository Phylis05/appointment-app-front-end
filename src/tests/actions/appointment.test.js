import {
  setAppointments,
  postAppointment,
  postAppointmentError,
  getAppointments,
  getAppointmentsSuccess,
  getAppointmentsError,
} from '../../actions/appointmentActions';

describe('request appointments', () => {
  const list = 'list';
  const error = 'error';

  it('should set appointments', () => {
    const expectedAction = {
      type: 'SET_APPOINTMENTS',
      list,
    };
    expect(setAppointments(list)).toEqual(expectedAction);
  });

  it('should post appointments', () => {
    const expectedAction = {
      type: 'POST_APPOINTMENT',
    };
    expect(postAppointment()).toEqual(expectedAction);
  });

  it('should post any errors from request', () => {
    const expectedAction = {
      type: 'POST_APPOINTMENT_ERROR',
    };
    expect(postAppointmentError()).toEqual(expectedAction);
  });

  it('should fetch appointments', () => {
    const expectedAction = {
      type: 'GET_APPOINTMENTS',
    };
    expect(getAppointments()).toEqual(expectedAction);
  });

  it('should fetch appointments successfully', () => {
    const expectedAction = {
      type: 'GET_APPOINTMENTS_SUCCESS',
      list,
    };
    expect(getAppointmentsSuccess(list)).toEqual(expectedAction);
  });

  it('should receive any errors from appointment', () => {
    const expectedAction = {
      type: 'GET_APPOINTMENTS_ERROR',
      error,
    };
    expect(getAppointmentsError(error)).toEqual(expectedAction);
  });
});
