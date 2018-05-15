import React, { Component, PropTypes } from 'react';
import { HelpBlock, Modal } from 'react-bootstrap';

class SignupConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };

   }

	render() {
  	return (
      <Modal {...this.props}>
      	<Modal.Header closeButton>
					<Modal.Title>Thank you for signing up!</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				  <img src='/img/pickupmodal.png' alt='PickUp' style={{height:'100px'}}/>
				  <p>Welcome to the PickUp family! You are now able to search for rides with your information saved.</p>
				</Modal.Body>
				<Modal.Footer>
					<HelpBlock><small>Have a question? <a href="/contact-us" target="_blank">Contact us</a>!</small></HelpBlock>
				</Modal.Footer>
			</Modal>
    )
  }
}

export default SignupConfirmation;