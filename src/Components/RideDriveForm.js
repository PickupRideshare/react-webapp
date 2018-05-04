import React, {Component, PropTypes} from 'react';
import firebase from '../fire';

class RideDriveForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingCity: '',
      destinationCity: '',
      riderName: '',
      selectedOption: 'Rider',
    }

    this.render = this.render.bind(this);
    this.onChange = this.onChange.bind(this);
    this.submitRide = this.submitRide.bind(this);
    this.optionChange = this.optionChange.bind(this);

  }

  onChange(e) {
    // Because we named the inputs to match their corresponding values in state, it's
    // super easy to update the state
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  optionChange(e) {
    console.log("Option Change" + e.target.value);
    this.setState({
      selectedOption: e.target.value
    });
  }

  submitRide() {
    console.log(this.state.destinationCity + this.state.riderName + this.state.startingCity);
    var isRider = this.state.selectedOption === "Rider";
    if(isRider) {
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
    } else {
      firebase.firestore().collection("Drives").add({
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
  }

  render() {
    var user = firebase.auth().currentUser;
    if(user) {
      return(
        <div>
          {/* <h1>Starting City</h1>
          <input type="text" name="startingCity" value={this.state.startingCity} onChange={this.onChange} /><br /><br />

          <h1>Destination City</h1>
          <input type="text" name="destinationCity" value={this.state.destinationCity} onChange={this.onChange} /><br /><br /> 

          <h1>Rider Name</h1>
          <input type="text" name="riderName" value={this.state.riderName} onChange={this.onChange} /><br /><br />  */}
      
          
              <div class="form-group">
              <label for="RiderForm5">Starting From:</label>
              <select class="form-control" name="startingCity" onChange={this.onChange} value={this.state.startingCity} id="RiderForm5">
                  <option></option>
                    <option>McMaster University</option>
                    <option>Richmond Hill</option>
                    <option>Oakville</option>
                    <option>Square One</option>
                    <option>North York</option>
                    <option>Georgetown</option>
                    <option>Milton</option>
                    <option>Markham</option>
                    <option>Scarborough</option>
                    <option>Thornhill</option>
                    <option>Etobicoke</option>
                    <option>Toronto (DT)</option>
                    <option>St. Catharines</option>
                    <option>London</option>
                    <option>Kitchener</option>
              </select>
              </div>


              <div class="form-group">
              <label for="RiderForm6">Destination:</label>
              <select class="form-control" name="destinationCity" onChange={this.onChange} value={this.state.destinationCity} id="RiderForm6">
                    <option></option>
                    <option>McMaster University</option>
                    <option>Richmond Hill</option>
                    <option>Oakville</option>
                    <option>Square One</option>
                    <option>North York</option>
                    <option>Georgetown</option>
                    <option>Milton</option>
                    <option>Markham</option>
                    <option>Scarborough</option>
                    <option>Thornhill</option>
                    <option>Etobicoke</option>
                    <option>Toronto (DT)</option>
                    <option>St. Catharines</option>
                    <option>London</option>
                    <option>Kitchener</option>
              </select>
              </div>


              <div class="form-check">
              <input class="form-check-input" name="radio" type="radio" id="Radios1" value="Rider" onChange={this.optionChange} checked={this.state.selectedOption==="Rider"}/>
              <label class="form-check-label" for="Radios1">
                  I'm a Rider
              </label>
              </div>


              <div class="form-check">
              <input class="form-check-input" name="radio" type="radio" id="Radios2" value="Driver" onChange={this.optionChange} checked={this.state.selectedOption==="Driver"}/>
              <label class="form-check-label" for="Radios2">
                  I'm a Driver
              </label>
              </div>

              <button onClick={this.submitRide}>Submit</button>
        </div> 
      );
    } else  {
      return (
        <h1 class="feature-header mtl"> Please Sign in or Create an Account to Drive or Ride with us! </h1>
      );
    }
  }
}

export default RideDriveForm;