import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class FormAddEdit extends React.Component {
  state = {
    id: 0,
    inventory_name: '',
    quantity: '',
  }

  onChange = e => {
    this.setState({[e.target.name]: e.target.value})
  }

  submitFormAdd = e => {
    e.preventDefault()
    fetch('http://localhost:3000/api/newInventory', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inventory_name: this.state.inventory_name,
        quantity: this.state.quantity,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          this.props.addItemToState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  submitFormEdit = e => {
    e.preventDefault()
    fetch('http://localhost:3000/api/put', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: this.state.id,
        inventory_name: this.state.inventory_name,
        quantity: this.state.quantity,
      })
    })
      .then(response => response.json())
      .then(item => {
        if(Array.isArray(item)) {
          // console.log(item[0])
          this.props.updateState(item[0])
          this.props.toggle()
        } else {
          console.log('failure')
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    // if item exists, populate the state with proper data
    if(this.props.item){
      const { id, inventory_name, quantity} = this.props.item
      this.setState({ id, inventory_name, quantity })
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.item ? this.submitFormEdit : this.submitFormAdd}>
        <FormGroup>
          <Label for="inventory_name">Product</Label>
          <Input type="text" name="inventory_name" id="inventory_name" onChange={this.onChange} value={this.state.inventory_name === null ? '' : this.state.inventory_name} />
        </FormGroup>
        <FormGroup>
          <Label for="quantity">Quantity</Label>
          <Input type="text" name="quantity" id="quantity" onChange={this.onChange} value={this.state.quantity === null ? '' : this.state.quantity}  />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default FormAddEdit