import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
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
      <HashRouter>
      <Menu>
        <NavLink to="/search" className="menu-item">Search Recipe</NavLink>
        <NavLink to="/login" className="menu-item">Add Recipe</NavLink>
        <NavLink to="/inventory" className="menu-item">Inventory</NavLink>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
      <div className="content">
        <Route path="/search" component={SearchRecipe }/>
        <Route path="/inventory" component={Inventory}/>
      </div>
      </HashRouter>

    );
  }
}

export default Sidebar;