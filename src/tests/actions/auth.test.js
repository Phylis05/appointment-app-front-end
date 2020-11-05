import { setToken, requestLogin, receiveLogin, receiveLoginError, requestSignUp, receiveSignUp, receiveSignUpError } from '../../actions/authActions';

describe('request appointments', () => {
  const authToken = 'authToken';
  const error = 'error'

  it('should sets up authentication token', () => {
    const expectedAction = {
      type: 'SET_TOKEN',
      authToken,
    };
    expect(setToken(authToken)).toEqual(expectedAction);
  });

  it('should request for login', () => {
    const expectedAction = {
      type: 'REQUEST_LOGIN',
    };
    expect(requestLogin()).toEqual(expectedAction);
  });

  it('should receive log in authentication', () => {
    const expectedAction = {
      type: 'RECEIVE_LOGIN',
      authToken,
    };
    expect(receiveLogin(authToken)).toEqual(expectedAction);
  });

  it('should receive login error', () => {
    const expectedAction = {
      type: 'RECEIVE_LOGIN_ERROR',
      error,
    };
    expect(receiveLoginError(error)).toEqual(expectedAction);
  });

  it('should request signup', () => {
    const expectedAction = {
      type: 'REQUEST_SIGNUP',
    };
    expect(requestSignUp()).toEqual(expectedAction);
  });

  it('should receive signup', () => {
    const expectedAction = {
      type: 'RECEIVE_SIGNUP',
      authToken,
    };
    expect(receiveSignUp(authToken)).toEqual(expectedAction);
  });

  it('should receive any errors from signup', () => {
    const expectedAction = {
      type: 'RECEIVE_SIGNUP_ERROR',
      error,
    };
    expect(receiveSignUpError(error)).toEqual(expectedAction);
  });
});