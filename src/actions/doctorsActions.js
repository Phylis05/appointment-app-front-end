import axios from 'axios';
import { PROD_URL } from '../helpers/constants';

export function requestDoctors() {
  return {
    type: 'REQUEST_DOCTORS',
  };
}

export function receiveDoctors(list) {
  return {
    type: 'RECEIVE_DOCTORS',
    list,
  };
}

export function receiveDoctorsError(error) {
  return {
    type: 'RECEIVE_DOCTORS_ERROR',
    error,
  };
}

export function getDoctor() {
  return {
    type: 'GET_DOCTOR',
  };
}

export function getDoctorSuccess(doctor) {
  return {
    type: 'GET_DOCTOR_SUCCESS',
    doctor,
  };
}

export function getDoctorError(error) {
  return {
    type: 'GET_DOCTOR_ERROR',
    error,
  };
}

export function getDoctors(token) {
  return dispatch => {
    dispatch(requestDoctors());
    return axios.get(`${PROD_URL}/v1/doctors`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      dispatch(receiveDoctors(response.data));
    }).catch(error => {
      dispatch(receiveDoctorsError(error));
    });
  };
}

export function fetchDoctor(id, token) {
  return dispatch => {
    dispatch(getDoctor());
    return axios.get(`${PROD_URL}/v1/doctors/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(response => {
      dispatch(getDoctorSuccess(response.data));
    }).catch(error => {
      dispatch(getDoctorError(error));
    });
  };
}