/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import HospitalAppointment from '../api/Api';
import DoctorsCard from './DoctorsCard';

const getAllDoctors = HospitalAppointment.getAllDoctors();

const AllDoctors = () => {

  return (
    <div>
      <div className="">
      </div>
      <DoctorsCard />
    </div>
  );
};

AllDoctors.propTypes = {
  getAllDoctors: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  getAllDoctors,
};

export default connect(
  mapDispatchToProps,
)(AllDoctors);