import { requestDoctors, receiveDoctors, receiveDoctorsError, getDoctorSuccess, getDoctorError } from '../../actions/doctorsActions';

describe('request doctors', () => {
  const list = 'list';
  const doctor = 'doctor';
  const error = 'error'

  it('should create a doctors', () => {
    const expectedAction = {
      type: 'REQUEST_DOCTORS',
    };
    expect(requestDoctors()).toEqual(expectedAction);
  });

  it('should receive requested doctors', () => {
    const expectedAction = {
      type: 'RECEIVE_DOCTORS',
      list,
    };
    expect(receiveDoctors(list)).toEqual(expectedAction);
  });

  it('should receive any errors from request', () => {
    const expectedAction = {
      type: 'RECEIVE_DOCTORS_ERROR',
      error,
    };
    expect(receiveDoctorsError(error)).toEqual(expectedAction);
  });

  it('should get doctor successfully', () => {
    const expectedAction = {
      type: 'GET_DOCTOR_SUCCESS',
      doctor,
    };
    expect(getDoctorSuccess(doctor)).toEqual(expectedAction);
  });

  it('should receive any errors from doctor', () => {
    const expectedAction = {
      type: 'GET_DOCTOR_ERROR',
      error,
    };
    expect(getDoctorError(error)).toEqual(expectedAction);
  });



//   it('should create a measurement', () => {
//     const expectedAction = {
//       type: 'ADD_MEASURES',
//       payload: parameter,
//     };
//     expect(reducerAction.addMeasurements(parameter)).toEqual(expectedAction);
//   });

//   it('should get all measurements', () => {
//     const expectedAction = {
//       type: 'GET_MEASUREMENTS',
//       payload: parameter,
//     };
//     expect(reducerAction.getMeasurements(parameter)).toEqual(expectedAction);
//   });

//   it('should create a unique measurement', () => {
//     const expectedAction = {
//       type: 'GET_MEASURES',
//       payload: parameter,
//     };
//     expect(reducerAction.getMeasuresId(parameter)).toEqual(expectedAction);
//   });

//   it('should create a unique measurement', () => {
//     const expectedAction = {
//       type: 'GET_CATEGORIES',
//       payload: category,
//     };
//     expect(reducerAction.getCategories(category)).toEqual(expectedAction);
//   });

//   it('should create a unique measurement', () => {
//     const expectedAction = {
//       type: 'LOGIN_USER',
//       payload: user,
//     };
//     expect(reducerAction.loginUser(user)).toEqual(expectedAction);
//   });
// });

//   it('should create a ', () => {
//     const expectedAction = {
//       type: 'REQUEST_DOCTORS',
//     };
//     expect(requestDoctors()).toEqual(expectedAction);
//   });
});
