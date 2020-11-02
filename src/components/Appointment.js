import React from 'react';
import PropTypes from 'prop-types';
import { Appoint } from '../styles/StyledComponents';


const Appointment = ({ AppointmentInfo }) => {
  // const { date, time, location } = AppointmentInfo;
  return (
    <Appoint>
      <span>
        {`${(AppointmentInfo.time)}`}
      </span>
      <span>
        {`${(AppointmentInfo.date)}}`}
      </span>
      <span>
        {`${(AppointmentInfo.location)}}`}
      </span>
    
    </Appoint>
  );
};

Appointment.propTypes = {
  AppointmentInfo: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Appointment;