import doctorReducer from '../../reducers/doctorsReducer';

describe('fetch all doctors', () => {
  const initialState = {
    currentDoctor: {},
    fetching: true,
    list: [{
      id: 1,
      img: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Jeff Denlea',
      practice_from: '1-1-2017',
      professional_statement: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged.`,
      specialization: 'General Surgeon',
    }, {
      id: 2,
      img: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Jeff Denlea',
      practice_from: '1-1-2017',
      professional_statement: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged.`,
      specialization: 'General Surgeon',
    }, {
      id: 3,
      img: 'https://images.pexels.com/photos/3714743/pexels-photo-3714743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      name: 'Jeff Denlea',
      practice_from: '1-1-2017',
      professional_statement: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
      galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged.`,
      specialization: 'General Surgeon',
    }],
    message: '',
  };

  it('should return the initial state', () => {
    expect(doctorReducer(undefined, {
      type: 'GET DOCTOR',
    })).toEqual(initialState);
  });
  it('should not return an empty array', () => {
    expect(doctorReducer(undefined, {
      type: 'GET DOCTOR',
    })).not.toEqual([]);
  });
});
