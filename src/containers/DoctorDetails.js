/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {getDoctor, resetSelected} from '../actions/index';
import DoctorsCard from '../components/DoctorsCard';
import DoctorInfo from '../components/DoctorInfo';
import HospitalAppointment from '../api/Api';
import {
  getDoctors, getImg, getName, getSpecialization, getProfessionalStatement, getPracticeFrom
} from '../constants/index'

const getOneDoctor = HospitalAppointment.getDoctor();

const DoctorDetails = props => {
  const {
    img, name, pending, getOneDoctor, statement, practice, specialization, resetSelected, match
  } = props;
  const { id } = match.params;
  useEffect(() => {
    getOneDoctor(id);
  }, [getOneDoctor, id]);

  return (
    <div className="item-d">
      <div className="item-c">
        <div className="w-50">
          <DoctorInfo className="ingredients" />
          <div className="ingredients-buttons">
            <Link to="/">
              <button type="button" onClick={resetSelected} className="shadow btn">Home</button>
            </Link>
            <Link to={`/doctors`}>
              <button type="button" onClick={resetSelected} className="shadow btn">Back</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const { getDoctor } = state;
  const { details } = getDoctor
  
  return (
    {
      // img: getImg(details),
      specialization: getSpecialization(details),
      practice: getPracticeFrom(details),
      statement: getProfessionalStatement(details),
      name: getName(details),
    }
  );
};

const mapDispatchToProps = {
  getDoctor,
  resetSelected,
};

DoctorDetails.defaultProps = {
  img: '',
  pending: false,
  name: '',
  specialization: '',
  statement: '',
};

DoctorDetails.propTypes = {
  // img: PropTypes.string,
  name: PropTypes.string,
  pending: PropTypes.bool,
  getOneDoctor: PropTypes.func.isRequired,
  statement: PropTypes.string,
  practice: PropTypes.string,
  specialization: PropTypes.string,
  resetSelected: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetails);