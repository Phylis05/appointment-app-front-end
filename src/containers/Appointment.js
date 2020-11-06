import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import appClasses from '../styles/appointment.module.scss';
import { postApptCall } from '../actions/apptActions';
import { checkToken } from '../helpers/token';

export class Appointment extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    const { doctorId } = history.location;

    this.state = {
      location: 'Nairobi',
      date: new Date(),
      doctorId,

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleDateChange(date) {
    this.setState({
      date,
    });
  }

  handleSubmit(event) {
    const {
      location, date, doctorId,
    } = this.state;

    const data = {
      location,
      date,
      doctor_id: doctorId,
    };

    const { history, postAppt } = this.props;
    const validToken = checkToken();
    if (validToken) {
      const tokenObj = JSON.parse(localStorage.getItem('tokenObj'));
      const { token } = tokenObj;
      postAppt(token, data).then(() => {
        history.push('/appointments');
      });
    }
    event.preventDefault();
  }

  render() {
    const { date, doctorId } = this.state;

    if (!doctorId) { return (<Redirect to="/doctors" />); }

    return (
      <div className={appClasses.mainDiv}>
        <h1 className={appClasses.mainTitle}>Book an appointment with us</h1>
        <div className={appClasses.divisor} />
        <div className={appClasses.textDiv}>
          <p>Kindly select your city and the preferred date</p>
          <p>We will inform you if the doctor is available</p>
        </div>
        <div className={appClasses.buttons}>
          <select className={appClasses.input} name="location" id="place-selector" onChange={this.handleChange}>
            <option value="eldoret">Eldoret</option>
            <option value="nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="nakuru">Nakuru</option>
          </select>
          <DatePicker
            name="date"
            className={`${appClasses.datePicker} ${appClasses.input} `}
            selected={date}
            onChange={date => this.handleDateChange(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={60}
            timeCaption="time"
            dateFormat="MMMM d, yyyy h:mm aa"
            shouldCloseOnSelect
          />
          <button type="submit" className={appClasses.bookButton} onClick={this.handleSubmit}>Book Now</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  appointments: state.appt.appointments,
});

const mapDispatchToProps = dispatch => ({
  postAppt: (token, data) => dispatch(postApptCall(token, data)),
});

Appointment.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
    location: PropTypes.shape({
      doctorId: PropTypes.number.isRequired,
    }),
  }).isRequired,
  postAppt: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);
