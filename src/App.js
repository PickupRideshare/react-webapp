import React, { Component } from 'react';
import firebase from 'firebase';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage.js';
import SigninPage from './Components/SigninPage';
import RideDriveForm from './Components/RideDriveForm';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <HomePage/>
      </div>
    );
  }
}

export default App;