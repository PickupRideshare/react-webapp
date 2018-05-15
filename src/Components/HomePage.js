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
		}

		/*this.myFunction = this.myFunction.bind(this);*/
    this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
    this.handleLastnameChange = this.handleFirstnameChange.bind(this);
    this.handleEmailChange = this.handleFirstnameChange.bind(this);
    this.handlePhoneChange = this.handleFirstnameChange.bind(this);
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
      firstname: e.target.value,
      error: null,
    });
  }

	render() {
		return(
			// <div>
			// 	<Navbar collapseOnSelect={true}>
			// 		<Navbar.Header className ="text-center">
			// 			<span>PickUp</span>
			// 		</Navbar.Header>
			// 	</Navbar>
      // </div>
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
            Contact Us
            </a>
            </li>

            <li>
            <a >
           <Link to="/signup"> Sign up </Link>
            </a>
            </li>

            <li>
            <a >
            <Link to="/login" > Log In </Link>
            </ a>
            </li>
            
           
            
            </ul>
            </div>
            </div>
            </nav>
            


            <div class="navbar-placeholder">
            <div id="content">
            <div class="mtl mbl lead">
            <div class="animation-container">
            <img
            alt="PickUp Banner"
            id="banner"
            src={require("./img/pickupwebbanner.png")}
            />
            </div>
            
            </div>
            </div>
            </div>
            <div class="feature-block">
            <div class="container">
            <div class="row text-center">
            <div class="col-md-10 col-md-offset-1">

            <h2 class="feature-header">
            <br /><br />

            <br /><br />

            <br /><br />

            What is PickUp?
            </h2>
            </div>
            </div>
            <div class="row mtl">
            <div class="col-md-4 col-md-push-6 lead mbl">
            <p class="mts">
            <br /><br />Pickup is a ridesharing service designed to simplify the commute of university students around Ontario and provide the best commuting experience.<br /><br /><br />
            
            Our app is currently in development and will be released in time for early September.<br /><br />
            
            In the meantime scroll down to try out our service from this website.
            <br /><br />
            </p>
            <p>
            </p>
            <div class="learn-more-button-wrapper mtm">
            <a
            class="btn btn-default btn-bordered"
            target="_blank"
            >
            Sign up to become a driver
            </a>
            </div>
            </div>
            <div class="col-md-5 col-md-pull-3 mts text-center">
            
            
            <div class="animation-container">
            <div id="animation-container">
            <br />
            <br />
            <iframe src='//www.appdemostore.com/embed?id=4950896824811520' width='334' height='680' frameborder='0'></iframe>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div class="feature-block black-bg">
            <div class="container">
            <div class="row text-center">
            <div class="col-md-8 col-md-offset-2">
            <h2 class="feature-header mtl">
            Get A Ride Today <br /> Please Fill Out The Following Form And Select Rider Or Driver<br />
            <br />
            Info:
            </h2>
            </div>
            </div>
            
            <div className="text-center">

            <Form horizontal>
            <FormGroup controlId="firstnameField">
            <Col componentClass={ControlLabel} sm={4}>
            First name:
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder="First name"
                onChange={this.handleFirstnameChange}
                value={this.state.firstname}
              />
            </Col>
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="lastnameField">
             <Col componentClass={ControlLabel} sm={4}>
             Last name:
             </Col>
             <Col sm={5}>
              <FormControl
                type="text"
                placeholder="Last name"
                onChange={this.handleLastnameChange}
                value={this.state.lastname}
              />
              </Col>
              <FormControl.Feedback />
            </FormGroup>



           <FormGroup controlId="emailField">
            <Col componentClass={ControlLabel} sm={4}>
            Email address:
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                placeholder="name@example.com"
                onChange={this.handleEmailChange}
                value={this.state.email}
              />
            </Col>
              <FormControl.Feedback />
            </FormGroup>

            <FormGroup controlId="phoneField">
            <Col componentClass={ControlLabel} sm={4}>
            Phone number:
            </Col>
            <Col sm={5}>
              <FormControl
                type="text"
                onChange={this.handlePhoneChange}
                value={this.state.phone}
              />
            </Col>
              <FormControl.Feedback />
            </FormGroup>


            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={4}>
                Starting from:
              </Col>
              <Col sm={5}>
              <FormControl componentClass="select">
                  <option value="McMaster University">McMaster University</option>
                  <option value="Richmond Hill">Richmond Hill</option>
                  <option value="Oakville">Oakville</option>
                  <option value="Square One">Square One</option>
                  <option value="North York">North York</option>
                  <option value="Georgetown">Georgetown</option>
                  <option value="Milton">Milton</option>
                  <option value="Markham">Markham</option>
                  <option value="Scarborough">Scarborough</option>
                  <option value="Thornhill">Thornhill</option>
                  <option value="Etobicoke">Etobicoke</option>
                  <option value="Toronto">Toronto (DT)</option>
                  <option value="St. Catharines">St. Catharines</option>
                  <option value="London">London</option>
                  <option value="Kitchener">Kitchener</option>
              </FormControl>
              </Col>
            </FormGroup>
        
            

            <FormGroup controlId="formControlsSelect">
              <Col componentClass={ControlLabel} sm={4}>
                Destination:
              </Col>
              <Col sm={5}>
              <FormControl componentClass="select">
                <option value="McMaster University">McMaster University</option>
                  <option value="Richmond Hill">Richmond Hill</option>
                  <option value="Oakville">Oakville</option>
                  <option value="Square One">Square One</option>
                  <option value="North York">North York</option>
                  <option value="Georgetown">Georgetown</option>
                  <option value="Milton">Milton</option>
                  <option value="Markham">Markham</option>
                  <option value="Scarborough">Scarborough</option>
                  <option value="Thornhill">Thornhill</option>
                  <option value="Etobicoke">Etobicoke</option>
                  <option value="Toronto">Toronto (DT)</option>
                  <option value="St. Catharines">St. Catharines</option>
                  <option value="London">London</option>
                  <option value="Kitchener">Kitchener</option>
              </FormControl>
              </Col>
            </FormGroup>
            <div>
            {this.state.selectedDay && <p>Day: {this.state.selectedDay.toLocaleDateString()}</p>}
            {!this.state.selectedDay && <p>Choose a day</p>}
            <DayPickerInput 
                  onDayChange={this.handleDayChange}
                  dayPickerProps={{todayButton: 'Today'}}     
            />
            </div>


            <FormGroup controlId="formControlsRadio">
              <Radio name="radioGroup">
              I am a rider
              </Radio>
              <Radio name="radioGroup">
              I am a driver
              </Radio>
            </FormGroup>

           
            <Button type="submit" bsStyle="primary">Submit</Button>
            </Form>

            <div class="feature-block text-center">
            <div class="container">
            <h2 class="feature-header">
            Contact Us:
            </h2>
            
            <div class="row mtx mbx">
            <div class="col-md-10 col-md-offset-1">
          

            <div class="lead">
            
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