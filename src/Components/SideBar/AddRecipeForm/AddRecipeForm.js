import React, { Component } from 'react';
import {Col,Form, Button, Container} from 'react-bootstrap';
import './AddRecipeForm.css';


class AddRecipeForm extends Component {
    constructor(...args) {
      super(...args);

      this.state = { 
          validated: false,
          show: false,
        };
    }
    
    handleSubmit(event) {
      event.preventDefault();
      const form = event.currentTarget;
      if(form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      this.setState({ validated: true });
      if(this.state.validated === true)
        alert("Your Recipe has been sent to Admin for approval.")
    }

  
    render() {
      const { validated } = this.state;
      return (
       <Container className='AddRecipeForm-01'>
       <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
        >
        <Form.Row id='form-top' >
            <Form.Group as={Col} md="6" controlId="validationCustom01" className='a'>
              <Form.Label className="label">Recipe Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Recipe name"
                
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form.Row>

        <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom02" className='a'>
              <Form.Label className='label'>Diet Label</Form.Label>
              <Form.Control as="select">
                <option>None</option>
                <option>High protein</option>
                <option>High fiber</option>
                <option>Low-fat</option>
                <option>Low-carb</option>
                <option>Low-sodium</option>
                </Form.Control>
            </Form.Group> 
          </Form.Row>

        <Form.Row className='FormRow'>
        <Form.Group as={Col} md="6" controlId="validationCustom03" className='a'>
            <Form.Label className='label'>Health Label</Form.Label>
            <Form.Control as="select">
            <option>None</option>
            <option>Vegetarian</option>
            <option>Vegan</option>
            <option>Dairy-free</option>
            </Form.Control>
        </Form.Group> 
        </Form.Row>

        <Form.Row>
            <Form.Group  as={Col} md="12" controlId="validationCustom03" className='a'>
                <Form.Label className='label'>Ingredients</Form.Label>
                <Form.Control as="textarea" rows="10" required>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    Input cannot be left blank.
                </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>

        <Form.Row>
            <Form.Group  as={Col} md="12" controlId="validationCustom03" className='a'>
                <Form.Label className='label'>Instruction</Form.Label>
                <Form.Control as="textarea" rows="20" required>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                    Your instruction cannot be left blank.
                </Form.Control.Feedback>
            </Form.Group>

        </Form.Row>
          <Button type="submit" id='button'>Submit form</Button>
        </Form>
        
       </Container> 
      );
    }
  }

export default AddRecipeForm;