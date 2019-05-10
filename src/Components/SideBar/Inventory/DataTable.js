import React, { Component } from 'react'
import { Table, Button } from 'reactstrap';
import ModalForm from './ModalForm';

class DataTable extends Component {

  deleteItem = id => {
    let confirmDelete = window.confirm('Delete item forever?')
    if(confirmDelete){
      fetch('https://gentle-fortress-56351.herokuapp.com/api/delete', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      })
    })
      .then(response => response.json())
      .then(item => {
        this.props.deleteItemFromState(id)
      })
      .catch(err => console.log(err))
    }

  }

  render() {

    const inventory = this.props.inventory.map(item => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.inventory_name}</td>
          <td>{item.quantity}</td>
          
          <td>
            <div style={{width:"110px"}}>
            <ModalForm buttonLabel="Edit" item={item} updateState={this.props.updateState}/>
              {' '}
              <Button color="danger" onClick={() => this.deleteItem(item.id)}>Del</Button>
            </div>
          </td>
        </tr>
        )
      })

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory}
        </tbody>
      </Table>
    )
  }
}

export default DataTable;