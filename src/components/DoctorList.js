/* eslint-disable no-alert */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import doctorClasses from '../styles/doctorList.module.scss';
import twitter from '../img/twitter.png';
import fb from '../img/facebook.png';
import { getDoctors, receiveDoctors } from '../actions/doctorsActions';
import { setToken } from '../actions/authActions';
import { checkToken } from '../helpers/token';

export class DoctorList extends Component {
  componentDidMount() {
    const { getDoctors, setToken } = this.props;
    const tokenObj = JSON.parse(localStorage.getItem('tokenObj'));
    setToken(tokenObj.token);
    const { authToken } = this.props;
    if (authToken) {
      getDoctors(authToken);
    }
  }

  render() {
    const validToken = checkToken();

    if (validToken === false) {
      alert('Please login first');
      return (
        <Redirect to="/" />
      );
    }

    const { doctors } = this.props;

    return (
      <div className={doctorClasses.mainDiv}>

        <div className={doctorClasses.title}>
          <h1 className={doctorClasses.mainTitle}>Best Doctors</h1>
          <h2 className={doctorClasses.subTitle}>Choose one of our best</h2>
          <div className={doctorClasses.divisor}>
            <p>************</p>
          </div>
        </div>
        <div className={doctorClasses.prevButton}>
          <span>&lt;</span>
        </div>
        {doctors.map(doctor => (
          <div key={doctor.id} className={doctorClasses.doctorDiv}>
            <Link to={`/doctors/${doctor.id}`}>
              <img className={doctorClasses.doctorPic} src={doctor.img} alt="Doctor profile" />
              <div className={doctorClasses.doctorInfo}>
                <p className={doctorClasses.doctorName}>{doctor.name}</p>
                <div className={doctorClasses.divisor}>
                  <p>************</p>
                </div>
                <p className={doctorClasses.about}>{doctor.about}</p>
              </div>
            </Link>
            <div className={doctorClasses.socialDiv}>
              <img className={doctorClasses.socialIcon} src={twitter} alt="twitter logo" />
              <img className={doctorClasses.socialIcon} src={fb} alt="Facebook logo" />
            </div>
          </div>
        ))}
        <div className={doctorClasses.nextButton}>
          <span>&gt;</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  doctors: state.doctors.list,
  fetching: state.fetching,
  authToken: state.auth.authToken,
});

const mapDispatchToProps = dispatch => ({
  getDoctors: token => dispatch(getDoctors(token)),
  receiveDoctors: response => dispatch(receiveDoctors(response.data)),
  setToken: token => dispatch(setToken(token)),
});

DoctorList.propTypes = {
  getDoctors: PropTypes.func.isRequired,
  setToken: PropTypes.func.isRequired,
  authToken: PropTypes.string.isRequired,
  doctors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorList);
