import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginForm from './LoginForm';
// import Activities from '../container/Activities';
import Navbar from './NavBar';
// import CreateActivity from './CreateActivity';
import AllDoctors from './DoctorList';
// import CreateMeasurement from './CreateMeasurement';
import PrivateRoute from './PrivateRouter';
import Signup from './SignupForm';
// import Information from './Information';

const Router = () => (
  <div>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/doctors" component={AllDoctors} />
        {/* <PrivateRoute exact path="/activities" component={Activities} /> */}
        {/* <PrivateRoute exact path="/create-activity" component={CreateActivity} />
        <PrivateRoute exact path="//:id/measurements" component={Measurements} />
        <PrivateRoute exact path="/activity/:id/create" component={CreateMeasurement} /> */}
      </Switch>
    </BrowserRouter>
  </div>
);

export default Router;
