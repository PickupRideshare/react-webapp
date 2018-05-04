/*
* React component for the landing page.
*/
import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { Grid, Row, Col, ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Table, HelpBlock, Glyphicon } from 'react-bootstrap';
import RideDriveForm from './RideDriveForm';
/*import assets here*/

class Homepage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoggedIn: false,
			firstNameValid: null,
			lastNameValid: null,
			emailValid: null,
			phoneValid: null,
		}

		/*this.myFunction = this.myFunction.bind(this);*/
	}
	
	componentDidMount() {
	console.log("component mounted");	
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
            <a href = "login.html">Log In</a>
            </li>
            
            
        
            <li>
            <a >
            Contact Us
            </a>
            </li>
            
            
            <li>
            <a href="SignUp.html">Sign Up</a>
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
            
            <div class="row text-center">

            <RideDriveForm/>
            
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