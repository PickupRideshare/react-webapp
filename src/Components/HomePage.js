/*
* React component for the landing page.
*/
import React, { Component, PropTypes } from 'react';
import { browserHistory} from 'react-router';
import { Grid, Row, Col, ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Form, FormGroup, FormControl, ControlLabel, Radio, HelpBlock, Glyphicon } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import TweenLite from 'gsap';
import scrollTo from 'gsap/ScrollToPlugin';
import SignupConfirmation from './SignupConfirmation.js';
import ReactDom from 'react-dom';

/*import assets here*/


class Homepage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
			firstNameValid: null,
			lastNameValid: null,
			emailValid: null,
			phoneValid: null,
      selectedDay: undefined,
		}

		/*this.myFunction = this.myFunction.bind(this);*/
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleLastnameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleDayChange = this.handleDayChange.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
	}
	
	componentDidMount() {
	console.log("component mounted");	
	}

  handleFirstnameChange(e) {
    this.setState({
      firstname: e.target.value,
      error: null,
    });
  }

  handleLastnameChange(e) {
    this.setState({
      lastname: e.target.value,
      error: null,
    });
  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
      error: null,
    });
  }
    

  handlePhoneChange(e) {
    this.setState({
      phone: e.target.value,
      error: null,
    });
  }

  handleDayChange(day) {
    this.setState({ 
      selectedDay: day 
    });
  }

  scrollTop() {
    TweenLite.to(window, .8, {scrollTo: '#second'});
  }

	render() {
		return(
      <div className="App">

      <Navbar collapseOnSelect={true}>
        <Navbar.Header className="navbar navbar-fixed-top
            navbar-default">
     <Button style={{float: 'right', margin: '12px', marginRight: '20px', verticalAlign: 'top'}} bsSize="small" onClick={this.scrollTop}>CONTACT US</Button>
        {!this.state.isLoggedIn &&
          <div>
            <Link to="/login" className="no-decoration">
              <Button style={{float: 'right', margin: '12px', verticalAlign: 'top'}} bsSize="small">SIGN IN</Button>
            </Link>
            <Link to="/signup" className="no-decoration">
              <Button bsSize="small" style={{float: 'right', margin: '12px', verticalAlign: 'top'}}>SIGN UP</Button>
            </Link>  
          </div>
        }
            
        </Navbar.Header>
      </Navbar>
      {/*
         <nav
            className="navbar navbar-fixed-top
            navbar-default"
            role="navigation"
            >
            
            <div className="container">


            <div className="navbar-header">
            <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#navbar_collapse">
            </button>
            </div>


            <div
            className="collapse navbar-collapse"
            id="navbar_collapse">
            <ul className="nav navbar-nav navbar-right">
            
            
            
      
        
            <li>
            <Link to='/'>Contact Us</Link>
            </li>


            <li>         
            <Link to="/signup"> Sign up </Link>
            </li>

            <li>
            <Link to="/login" > Log In </Link>
            </li>
            
           
            
            </ul>
            </div>
            </div>
            </nav>
      */}

            <div className="navbar-placeholder">
            <div id="content">
            <div className="mtl mbl lead">
            <div className="animation-container">
            <img
            alt="PickUp Banner"
            id="banner"
            src={require("./img/pickupwebbanner.png")}
             />
            </div>
            
            </div>
            </div>
            </div>
            <div className="feature-block">
            <div className="container">
            <div className="row text-center">
            <div className="col-md-10 col-md-offset-1">



            <h2 className="feature-header">
            <br /><br />

            <br /><br />

            <br /><br />

            What is PickUp?
            </h2>
            </div>
            </div>
            <div className="row mtl">
            <div className="col-md-4 col-md-push-6 lead mbl">
            <p className="mts">
            <br /><br />Pickup is a ridesharing service designed to simplify the commute of university students around Ontario and provide the best commuting experience.<br /><br /><br />
            
            Our app is currently in development and will be released in time for early September.<br /><br />
            
            In the meantime scroll down to try out our service from this website.
            <br /><br />
            </p>
            <p>
            </p>
            <div className="learn-more-button-wrapper mtm">
            <Link to="/signup">
              <Button
              className="btn btn-default btn-bordered"
              target="_blank"
              >
              Sign up to become a driver
              </Button>
            </Link>
            </div>
            </div>
            <div className="col-md-5 col-md-pull-3 mts text-center">
            
            
            <div className="animation-container">
            <div id="animation-container">
            <br />
            <br />
            <iframe src='//www.appdemostore.com/embed?id=4676514231615488' width='334' height='680' frameborder='0'></iframe>
            
            
            

            
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="feature-block black-bg">
            <div className="container">
            <div className="row text-center">
            <div className="col-md-8 col-md-offset-2">
            <h2 className="feature-header mtl">
            
            </h2>
            </div>
            </div>
            
            <div className="text-center">

           

            <div className="feature-block text-center" id="second">
            <div className="container">
            <h2 className="feature-header">
            Contact Us:
            </h2>
            
            <div className="row mtx mbx">
            <div className="col-md-10 col-md-offset-1">
          

            <div className="lead">
            
            pickuprideshare@gmail.com<br />
            
            647-632-1080<br />
            
            175 Longwood Road South Hamilton ON<br />
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
 
         



		</div>
    


	);

	}
}

export default Homepage;