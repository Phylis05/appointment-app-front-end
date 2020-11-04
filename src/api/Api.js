/* eslint-disable no-template-curly-in-string */
import axios from 'axios';
import * as reducerAction from '../actions/index';

const HospitalAppointment = (() => {
  const signUpUser = user => async dispatch => {
    try {
      const data = await axios.post(
        'https://wicked-goosebumps-55914.herokuapp.com/signup',
        {
          users: {
            email: user.email,
            name: user.name,
            password: user.password,
            password_confirmation: user.password_confirmation,
          },
        },
      );
      localStorage.setItem('token', data.data.auth_token);
      dispatch(reducerAction.loginUser(data.user));
      window.location = '/homepage';
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };
  const loginUser = user => async dispatch => {
    try {
      const data = await axios.post(
        'https://wicked-goosebumps-55914.herokuapp.com/auth/login',
        {
          users: {
            email: user.email,
            password: user.password,
          },
        },
      );
      localStorage.setItem('token', data.data.auth_token);
      dispatch(reducerAction.loginUser(data.user));
      window.location = '/homepage';
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getAllDoctors = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get('https://wicked-goosebumps-55914.herokuapp.com/v1/doctors',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      dispatch(reducerAction.getDoctors(data.data));
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getDoctor = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get('https://wicked-goosebumps-55914.herokuapp.com/v1/doctors/${id}',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      dispatch(reducerAction.getDoctor(data.data));
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  const getAllAppointments = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get('https://wicked-goosebumps-55914.herokuapp.com/appointments',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      dispatch(reducerAction.getUserAppointments(data.data));
    } catch (error) {
      dispatch(reducerAction.formErrors(error.response.data.message));
    }
  };

  return {
    signUpUser,
    loginUser,
    getAllAppointments,
    getAllDoctors,
    getDoctor,
  };
})();

export default HospitalAppointment;