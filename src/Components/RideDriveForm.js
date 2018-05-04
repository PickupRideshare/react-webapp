import React, {Component, PropTypes} from 'react';
import firebase from '../fire';

class RideDriveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingCity: '',
      destinationCity: '',
      riderName: '',
    }

    this.render = this.render.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitRide = this.submitRide.bind(this);

  }

  onChange(e) {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  submitRide() {
    console.log(this.state.destinationCity + this.state.riderName + this.state.startingCity);
    firebase.firestore().collection("Rides").add({
      destination_city: this.state.destinationCity,
      matched: false,
      rider_name: this.state.riderName,
      starting_city: this.state.startingCity,
    }).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(function(error) {
      console.error("Error adding document: ", error);
  });
  }

  render() {
    return(
      <div>
        <h1>Starting City</h1>
        <input type="text" name="startingCity" value={this.state.startingCity} onChange={this.onChange} /><br /><br />

        <h1>Destination City</h1>
        <input type="text" name="destinationCity" value={this.state.destinationCity} onChange={this.onChange} /><br /><br /> 

        <h1>Rider Name</h1>
        <input type="text" name="riderName" value={this.state.riderName} onChange={this.onChange} /><br /><br /> 

       <button onClick={this.submitRide}>Submit</button>
      </div>

      
      
    );
  }
}

export default RideDriveForm;