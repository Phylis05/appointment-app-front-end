import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Registration from './components/SignupForm';
import LandingPage from './containers/LandingPage';
import DoctorsCard from './components/DoctorsCard';
import DoctorList from './components/DoctorList';
import DoctorDetails from './containers/DoctorDetails';
import Appointment from './components/Appointment';

function App() {
  const currentUser = localStorage.getItem('token');
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/homepage" component={LandingPage}>
            {currentUser ? <LandingPage /> : <LoginForm />}
          </Route>
          <Route path="/signup" component={Registration} />
          <Route path="/login" component={LoginForm} />
          <Route
            path="/doctors"
            exact
            component={DoctorList}
          />
          <Route
            path="/doctorinfo"
            exact
            component={DoctorDetails}
          />
          <Route path="/doctorsCard" component={DoctorsCard}>
            {currentUser ? <DoctorsCard /> : <LoginForm />}
          </Route>
          <Route path="/appointment" component={Appointment}>
            {currentUser ? <Appointment /> : <LoginForm />}
          </Route>
          <Route path="/"><LoginForm /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;