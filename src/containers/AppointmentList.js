/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import appClasses from '../styles/appointmentList.module.scss';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { appointmentCall } from '../actions/appointmentActions';
import { checkToken } from '../helpers/token';

export class AppointmentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appointments: [],
    };
  }

  componentDidMount() {
    const validToken = checkToken();
    const tokenObj = JSON.parse(localStorage.getItem('tokenObj'));
    const { token } = tokenObj;
    if (validToken) {
      const { appointmentCall } = this.props;
      appointmentCall(token).then(() => {
        const { appointments } = this.props;
        this.setState({ appointments });
      });
    }
  }

  render() {
    const { fetching } = this.props;
    if (fetching === true) {
      return (
        <Loader
          className="spinner"
          type="Circles"
          color="#00BFFF"
          height={500}
          width={200}
        />
      );
    }

    const validToken = checkToken();
    if (!validToken) {
      return (<Redirect to="/" />);
    }

    const { appointments } = this.state;
    return (
      <div className={appClasses.mainDiv}>
        <div className={appClasses.bgImage} />
        <h1 className={appClasses.mainTitle}>Your Appointments:</h1>
        <div className={appClasses.appointmentsDiv}>
          {appointments.map(appointment => (
            <ul className={appClasses.appointment} key={appointment.id}>
              <li className={`${appClasses.doctor} ${appClasses.appointItem}`}>
                Doctor:
                <span className={appClasses.spanInfo}>{appointment.doctor_id}</span>
              </li>
              <li className={`${appClasses.location} ${appClasses.appointItem}`}>
                Location:
                <span className={appClasses.spanInfo}>{appointment.location}</span>
              </li>
              <li className={`${appClasses.date} ${appClasses.appointItem}`}>
                Date:
                <span className={appClasses.spanInfo}>{appointment.date}</span>
              </li>
            </ul>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  appointments: state.appointments.list,
  fetching: state.appointments.fetching,
  doctors: state.doctors.list,
});

const mapDispatchToProps = dispatch => ({
  appointmentCall: token => dispatch(appointmentCall(token)),
});

AppointmentList.propTypes = {
  appointmentCall: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  appointments: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppointmentList);
