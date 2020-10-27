import axios from 'axios';
import * as reducerAction from '../actions/index';

const HealthApi = (() => {
  const signUpUser = user => async dispatch => {
    try {
      const data = await axios.post(
        'http://localhost:3000/signup',
        {
          users: {
            email: user.email,
            name: user.name,
            contact_number: user.contact_number,
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
        'http://localhost:3000/auth/login',
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
      const data = await axios.get('http://localhost:3000/v1/doctors',
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

  const getAllAppointments = () => async dispatch => {
    const token = localStorage.getItem('token');
    try {
      const data = await axios.get('http://localhost:3000/v1/measurements',
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

  // const addMeasurement = measure => async dispatch => {
  //   const token = localStorage.getItem('token');
  //   const config = {
  //     headers: { Authorization: `Bearer ${token}` },
  //   };

  //   const measurements = {
  //     value: measure.value,
  //     date: measure.date,
  //     measure_category_id: measure.measure_category_id,
  //   };
  //   try {
  //     const data = await axios.post('https://nameless-temple-95690.herokuapp.com/api/v1/measurements', measurements, config);
  //     dispatch(reducerAction.addMeasurements(data.measure));
  //   } catch (error) {
  //     dispatch(reducerAction.formErrors(error.response.data.message));
  //   }
  // };

  // const getAllMeasurementId = id => async dispatch => {
  //   const token = localStorage.getItem('token');
  //   try {
  //     const data = await axios.get(`https://nameless-temple-95690.herokuapp.com/api/v1/measurements/${id}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //     dispatch(reducerAction.getMeasuresId(data.data));
  //   } catch (error) {
  //     dispatch(reducerAction.formErrors(error.response.data.message));
  //   }
  // };

  return {
    signUpUser,
    loginUser,
    getAllAppointments,
    getAllDoctors,
    // getAllMeasurements,
    // getAllMeasurementId,
  };
})();

export default HealthApi;