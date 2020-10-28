import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignupForm';
import './App.css';
import Appointments from './containers/Appointments';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/signup" component={SignUpForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/appointments" component={Appointments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
