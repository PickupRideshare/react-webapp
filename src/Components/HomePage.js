/*
* React component for the landing page.
*/
import React, { Component, PropTypes } from 'react';
import { browserHistory, Link } from 'react-router';
import { Grid, Row, Col, ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Table, HelpBlock, Glyphicon } from 'react-bootstrap';

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
			<div>
				<Navbar collapseOnSelect={true}>
					<Navbar.Header className ="text-center">
						<span>PickUp</span>
					</Navbar.Header>
				</Navbar>
			</div>
		);
	}
}

export default Homepage;