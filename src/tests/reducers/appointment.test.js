import apptReducer from '../../reducers/apptReducer';

describe('fetch all appointments', () => {
  const initialState = [{
    fetching: true,
    list: [{
      canceled: false, created_at: '2020-06-08 16:51:35', date: '2020-07-05', doctor_id: 1, id: 1, location: 'Eldoret', time: '1  8:00:00', updated_at: '2020-06-08 16:51:35', user_id: 1,
    }, {
      canceled: false, created_at: '2020-06-08 16:51:35', date: '2020-07-05', doctor_id: 1, id: 2, location: 'Kisumu', time: '15:00:00', updated_at: '2020-06-08 16:51:35', user_id: 1,
    }, {
      canceled: false, created_at: '2020-06-08 16:51:35', date: '2020-07-05', doctor_id: 1, id: 3, location: 'Nairobi', time: '15:00:00', updated_at: '2020-06-08 16:51:35', user_id: 1,
    }, {
      canceled: false, created_at: '2020-06-08 16:51:35', date: '2020-07-05', doctor_id: 1, id: 4, location: 'Mombasa', time: '15:00:00', updated_at: '2020-06-08 16:51:35', user_id: 1,
    }],
    message: '',
  }];

  it('should return the initial state', () => {
    expect(apptReducer(undefined, {
      type: 'SET APPOINTMENT',
    })).toEqual(initialState);
  });

  it('should not return an empty array', () => {
    expect(apptReducer(undefined, {
      type: 'SET APPOINTMENT',
    })).not.toEqual([]);
  });
});
