import React, { Component } from 'react';
import firebase from 'firebase';
import HomePage from './Components/HomePage';
import LoginPage from './Components/LoginPage.js';
import SigninPage from './Components/SigninPage';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
     // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC5uDHrDlCtykHP_f1mAufKA3t3tQ9pBLo",
    authDomain: "pickup-34815.firebaseapp.com",
    databaseURL: "https://pickup-34815.firebaseio.com",
    projectId: "pickup-34815",
    storageBucket: "pickup-34815.appspot.com",
    messagingSenderId: "521002640638"
  };
  firebase.initializeApp(config);
  }


  render() {
    return (
      <div>
        <SigninPage/>
      </div>
    );
  }
}

export default App;