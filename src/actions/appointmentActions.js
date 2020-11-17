/* eslint-disable no-unused-vars */
import axios from 'axios';
import { DEV_URL } from '../helpers/constants';

export function setAppointments(list) {
  return {
    type: 'SET_APPOINTMENTS',
    list,
  };
}

export function postAppointment() {
  return {
    type: 'POST_APPOINTMENT',
  };
}

export function postAppointmentError() {
  return {
    type: 'POST_APPOINTMENT_ERROR',
  };
}

export function getAppointments() {
  return {
    type: 'GET_APPOINTMENTS',
  };
}

export function getAppointmentsSuccess(list) {
  return {
    type: 'GET_APPOINTMENTS_SUCCESS',
    list,
  };
}

export function getAppointmentsError(error) {
  return {
    type: 'GET_APPOINTMENTS_ERROR',
    error,
  };
}

export function appointmentCall(token) {
  return dispatch => {
    dispatch(getAppointments());
    return axios.get(`${DEV_URL}/v1/appointments`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      dispatch(getAppointmentsSuccess(response.data));
    }).catch(error => {
      dispatch(getAppointmentsError(error));
    });
  };
}

export function postappointmentCall(token, data) {
  return dispatch => {
    dispatch(postAppointment());
    return axios.post(`${DEV_URL}/v1/appointments`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        dispatch(setAppointments(response.data));
      }).catch(error => {
        dispatch(postAppointmentError(error));
      });
  };
}
