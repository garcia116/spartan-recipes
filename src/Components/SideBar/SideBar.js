import React from 'react';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';
import SearchRecipe from './SearchRecipe/SearchRecipe';
import Inventory from './Inventory/EnhancedTableHead';
import Login from './Login/Login';

class Sidebar extends React.Component {
  showSettings (event) {
    event.preventDefault();
    
  }

  render () {

    return (
      <BrowserRouter>

      <Menu>
        <NavLink to="/" className="menu-item">Search Recipe</NavLink>
        <NavLink to="/login" className="menu-item">Add Recipe</NavLink>
        <NavLink to="/inventory" className="menu-item">Inventory</NavLink>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      <div className="content">
        <Route path="/" component={SearchRecipe } exact />
        <Route path="/inventory" component={Inventory}/>
      </div>
      </BrowserRouter>

    );
  }
}

export default Sidebar;