import React, { Component } from "react";
import { Grid, Row, Col, ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Form, FormGroup, FormControl, ControlLabel, Radio, HelpBlock, Glyphicon, MenuItem  } from 'react-bootstrap';

import Card from "components/Card/Card.jsx";


class Typography extends Component {
  render() {
    return (
      <div className="content"> <center><h1>Complete the Following Form to Post a Ride</h1> </center>
      
      <form><center>
        First Name<br />
        <input type="text" name = "firstname"/><br /><br />
        Last Name<br />
        <input type = "text" name="lastname"/><br /><br/>
        Email Adress<br/>
        <input type = "text" name="email"/><br /><br/>
        Phone Number<br />
        <input type = "text" name="phonenumber"/><br/><br/>
        <FormGroup controlId="formControlsSelect">
                Driving From
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
            </FormGroup>


        <FormGroup controlId="formControlsSelect">
                Dropping Off
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
            </FormGroup>

            <button>Submit</button>
      </center></form>
      
      
      </div>
    );
  }
}

export default Typography;
