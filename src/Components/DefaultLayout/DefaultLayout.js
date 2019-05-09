import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './DefaultLayout.css';




const DefaultLayout = () => {

    return (

<body>
  <h1 class="site-heading text-center text-white d-none d-lg-block">
    <span class="site-heading-lower">Spartan Recipes</span>
  </h1>

<Navbar bg="primary" expand="lg" id="mainNav">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">Spartan Recipes</a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
        <NavDropdown className="text-uppercase" title="My Account" id="basic-nav-dropdown">
        <NavDropdown.Item href="/">Sign Out</NavDropdown.Item>
       </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>;


</body>


    );
    
  }


export default DefaultLayout;
