import React, {Component} from 'react';
import ModalForm from './ModalForm';
import DataTable from './DataTable';
import { Container, Row, Col } from 'reactstrap'
import './Inventory.css'

class InventoryDefault extends Component {
	state = {
		inventory: []
	}

	getInventory = () => {
		fetch('http://localhost:3000/api/inventory')
		.then(response => response.json())
		.then(inventory => this.setState({inventory}))
		.catch(err => console.log(err))
	}

	componentDidMount(){
		this.getInventory()
	}

	addItemToState = (item) => {
    this.setState(prevState => ({
      inventory: [...prevState.inventory, item]
    }))
  }	

    updateState = (item) => {
    const itemIndex = this.state.inventory.findIndex(data => data.id === item.id)
    const newArray = [
    // destructure all items from beginning to the indexed item
      ...this.state.inventory.slice(0, itemIndex),
    // add the updated item to the array
      item,
    // add the rest of the items to the array from the index after the replaced item
      ...this.state.inventory.slice(itemIndex + 1)
    ]
    this.setState({ inventory: newArray })
  }
        
deleteItemFromState = (id) => {
    const updatedItems = this.state.inventory.filter(item => item.id !== id)
    this.setState({ inventory: updatedItems })
  }
	




	render() {
		return (
			<Container className="App">
        <Row>
          <Col>
            <h1 style={{margin: "20px 0"}}>Inventory</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable inventory={this.state.inventory} updateState={this.updateState} deleteItemFromState={this.deleteItemFromState} />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="Add Item" addItemToState={this.addItemToState}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default InventoryDefault;