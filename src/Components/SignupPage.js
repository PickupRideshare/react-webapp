import React, {Component} from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import './css/index.css';
import { Switch, Route, Link } from 'react-router-dom'
import { Button, Navbar, Nav, NavItem, NavDropdown } from 'react-bootstrap';
import SignupConfirmation from './SignupConfirmation.js';

class SigninPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirm: '',
      showConfirmation: false,
    }

    this.render = this.render.bind(this);
    this.onChange = this.onChange.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.closeConfirmation = this.closeConfirmation.bind(this);


  }

  onChange(e) {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  createAccount() {
    if(this.state.password === this.state.passwordConfirm) {
      this.props.firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
    }
    this.setState({
      showConfirmation: true,
    });
  }

  closeConfirmation() {
    this.setState({
        showConfirmation: false,
    });
  }

render(){
  return(

    <div className="App">


      <Navbar>
        <Navbar.Header className="navbar navbar-fixed-top
            navbar-default">
            <Link to="/" className="no-decoration">
              <Button bsSize="small" style={{float: 'right', margin: '15px', marginRight: '30px'}}>GO HOME</Button>
            </Link> 
        </Navbar.Header>
      </Navbar>

  
      <div className="feature-block black-bg">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-10 col-md-offset-1">
                    
                    <center>
                    <h2 className="feature-header">
                        Create Account:
                    </h2>
            
            {/* Username:<br />
            <input type="text" name="Username" /><br /><br /> */}
                
            Email:<br />
            <input type="text" class="inputfield" name="email" value={this.state.email} onChange={this.onChange} /><br /><br />
{/*                 
            Phone Number:<br />
            <input type="text" name="Password" /><br /><br /> */}
                
                
            Password:<br />
            <input type="text" class="inputfield" name="password" value={this.state.password} onChange={this.onChange} /><br /><br />
                
            
                        
            Confirm Password:<br />
            <input type="text" class="inputfield" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.onChange}/><br /><br />
                
                
          
            <Button onClick={this.createAccount}>Create Account</Button>
            
            
            
            <br /><br /><br />
            
            <h2 className="feature-header">
                Thank you for signing up. We appreciate your business.
            </h2>
            
            </center>
                      </div>
                </div>
            </div>
        </div>

        <SignupConfirmation
          show={this.state.showConfirmation}
          onHide={this.closeConfirmation}
          className="text-center"
          style={{color:'#000'}}
          title={"Thank you for signing up!"}
          message={"Welcome to the PickUp family. You are now able to search for rides with your information saved."}
        />
      
      </div>


  );
}



}
export default SigninPage;


