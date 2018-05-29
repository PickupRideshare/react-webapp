import React, { Component, PropTypes } from 'react';
import { HelpBlock, Modal } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import modal from './img/pickupwebbanner.png';
import './css/index.css';

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
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				  <img src={modal} alt='PickUp' style={{height:'100px'}}/>
				  <p className='mts'>{this.props.message}</p>
				</Modal.Body>
				<Modal.Footer>
					<HelpBlock><small>Have a question? <Link to="/">Contact us</Link>!</small></HelpBlock>
				</Modal.Footer>
			</Modal>
    )
  }
}

export default SignupConfirmation;