import firebase from 'firebase';
import './css/index.css';
import React, { Component, PropTypes } from 'react';
import { browserHistory} from 'react-router';
import { Grid, Row, Col, ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Table, HelpBlock, Glyphicon } from 'react-bootstrap';
import { Switch, Route,  Link  } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import SignupPage from './SignupPage';


class LoginPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };

    this.render = this.render.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onChange(e) {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit() {
    console.log(this.state.email);
    console.log(this.state.password);
    this.props.firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch((e)=>{
        console.log(e);
    }).then(() => {
      console.log("Signed in!");
    });
  }

  render(){
  return(

  <div className="App">


  <nav
            class="navbar navbar-fixed-top
            navbar-default"
            role="navigation"
            >
            
            <div class="container">


            <div class="navbar-header">
            <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar_collapse">
            </button>
            </div>


            <div
            class="collapse navbar-collapse"
            id="navbar_collapse">
            <ul class="nav navbar-nav navbar-right">
            
            
            
      
        
            <li>
            <a >
           <Link to="/"> Go Home </Link>
            </a>
            </li>


            </ul>
            </div>
            </div>
            </nav>
    
    <div className="feature-block black-bg">
      <div className="container">
          <div className="row text-center">
              <div className="col-md-10 col-md-offset-1">
                  
                  <center>
                  <h2 className="feature-header">
                      Log In:
                  </h2>
          
          {/* Username:<br />
          <input type="text" name="Username" /><br /><br /> */}
              
          Email:<br />
          <input type="text" name="email" value={this.state.email} onChange={this.onChange}/><br /><br />
              
          {/* Phone Number:<br />
          <input type="text" name="Password" /><br /><br />
               */}
              
          Password:<br />
          <input type="text" name="password" value={this.state.password} onChange={this.onChange} /><br /><br />
              
          
                      
          {/* Confirm Password:<br />
          <input type="text" name="Password" /><br /><br />
               */}
              
        
              <button onClick={this.onSubmit}>Sign in</button>
          
          
          
          <br /><br /><br />
          
          <h2 className="feature-header">
              Thank You for signing up. We appreciate your business.
          </h2>
          
          </center>
                    </div>
               </div>
          </div>
       </div>

    
    </div>
  );
}
}

export default LoginPage;