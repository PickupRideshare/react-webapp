import React, { Component } from "react";
import { Grid, Row, Col, ButtonGroup, Button, Jumbotron, Nav, NavItem, NavDropdown, Navbar, Form, FormGroup, FormControl, ControlLabel, Radio, HelpBlock, Glyphicon } from 'react-bootstrap';


import Card from "components/Card/Card.jsx";
import { thArray, tdArray } from "variables/Variables.jsx";

class TableList extends Component {
  render() {
    return (
      <div className="content">
<center>
<h2>
            Complete The Following Form To Submit Your Ride 
            </h2>
    
    
   <form>
       <br /> 
  First name<br />
  <input type="text" name="firstname" /><br /><br />
  Last name<br />
  <input type="text" name="lastname" /><br /> <br />
    
  Email <br />
 <input type="text" name="email" /><br /> <br />
       
   Phone Number <br />
 <input type="text" name="Phone Number" />  <br /> <br />
 
       
       
   
   
<FormGroup controlId="formControlsSelect">

    
<Col sm="13" md={{ size: 6, offset: 3 }}>   
                Starting From
              
           
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

    
<Col sm="13" md={{ size: 6, offset: 3 }}>   
                Destination
              
           
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
   
 

</form>
    
   <br />
    
  <button> Submit </button>     
       
        </center>
            
            
        
            
        </div>
            
            
            
      
    );
  }
}

export default TableList;