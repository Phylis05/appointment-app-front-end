/* eslint-disable no-alert */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import doctorClasses from '../styles/doctor.module.scss';
import { setToken } from '../actions/authActions';
import { fetchDoctor } from '../actions/doctorsActions';
import { checkToken } from '../helpers/token';

export class Doctor extends Component {
  constructor(props) {
    super(props);
    const { match } = props;

    this.state = {
      id: match.params.id,
      doctor: [],
    };
  }

  componentDidMount() {
    const { id } = this.state;
    const { setToken, fetchDoctor } = this.props;
    const tokenObj = JSON.parse(localStorage.getItem('tokenObj'));
    const { token } = tokenObj;
    if (token) {
      fetchDoctor(id, token).then(() => {
        const { currentDoctor } = this.props;
        this.setState({ doctor: currentDoctor });
        setToken(token);
      });
    }
  }

  render() {
    const validToken = checkToken();
    const { doctor } = this.state;
    if (!validToken) {
      alert('Please login first');
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div className={doctorClasses.mainDiv}>
        <div className={doctorClasses.doctorImgDiv}>
          <img src={doctor.img} alt="doctor profile" className={doctorClasses.doctorImg} />
        </div>
        <div className={doctorClasses.doctorInfoDiv}>
          <h1 className={doctorClasses.doctorName}>{doctor.name}</h1>
          <div>
            <div className={`${doctorClasses.doctorInfo} ${doctorClasses.doctorInfo__gray}`}>
              <p className={`${doctorClasses.doctorInfo__title}`}>Practice from:</p>
              <p className={`${doctorClasses.doctorInfo__text}`}>
                {doctor.practice_from}
              </p>
            </div>
            <div className={doctorClasses.doctorInfo}>
              <p className={`${doctorClasses.doctorInfo__title}`}>Specialization:</p>
              <p className={doctorClasses.doctorInfo__text}>
                {doctor.specialization}
              </p>
            </div>
            <div className={`${doctorClasses.doctorInfo} ${doctorClasses.doctorInfo__gray}`}>
              {/* <p className={`${doctorClasses.doctorInfo__title}`}>Professional Statement</p> */}
              <p className={`${doctorClasses.doctorInfo__text}`}>
                {doctor.professional_statement}
              </p>
            </div>
          </div>
          <Link
            to={{
              pathname: '/appointments/new',
              doctorId: doctor.id,
            }}
            className={doctorClasses.appointmentButton}
          >
            Book Appointment
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentDoctor: state.doctors.currentDoctor,
  authToken: state.auth.authToken,
});

const mapDispatchToProps = dispatch => ({
  fetchDoctor: (id, token) => dispatch(fetchDoctor(id, token)),
  setToken: token => dispatch(setToken(token)),
});

Doctor.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  currentDoctor: PropTypes.shape({
    name: PropTypes.string,
    rate: PropTypes.string,
  }),
  setToken: PropTypes.func.isRequired,
  fetchDoctor: PropTypes.func.isRequired,
};

Doctor.defaultProps = {
  currentDoctor: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
