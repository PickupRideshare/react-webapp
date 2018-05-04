import React, { Component } from 'react';
import firebase from 'firebase';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage';
import SigninPage from './Components/SigninPage';
import RideDriveForm from './Components/RideDriveForm';
import Main from '.Components/HomePage';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';




class App extends Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
      <div>
        <Switch>
          <Route path='/' component={HomePage}/> 
          <Route path='/SigninPage' component={SigninPage}/>
          <Route path='/LoginPage' component={LoginPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;