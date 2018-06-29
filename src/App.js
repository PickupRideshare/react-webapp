import React, { Component } from 'react';
import firebase from 'firebase';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SignupPage from './Components/SignupPage';
import RideDriveForm from './Components/RideDriveForm';
import UserDashboard from './Components/dashboard/src/views/Dashboard/Dashboard';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HashRouter, BrowserRouter } from 'react-router-dom';




class App extends Component {

  constructor(props){
    super(props);

    
  }
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/dashboard" component={UserDashboard} />
     

        </div>
      </BrowserRouter>
    );
  }
}

export default App;