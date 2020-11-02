import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HospitalAppointment from '../api/Api';
import Appointment from '../components/Appointment';

const Appointments = () => {
  const dispatch = useDispatch();

  HospitalAppointment.getAllAppointments(dispatch);

  const appointmentsState = useSelector(state => state.appointments);
  const userId = useSelector(state => state.loggedIn.user.id);

  const AppointmentFilter = (appointment, Id) => {
    if (appointment.user_id === Id) return <Appointment key={appointment.id} AppointmentInfo={appointment} />;
    return null;
  };

  return (
    <div className="appoint-container">
      {appointmentsState.map(appointment => (
        AppointmentFilter(appointment, userId)
      ))}
    </div>
  );
};

export default Appointments;
