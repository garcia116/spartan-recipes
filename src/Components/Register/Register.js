import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Register.css';


const Register = ({onRouteChange}) => {

	return (

  <body>
  <h1 class="site-heading text-center text-white d-none d-lg-block">
    <span class="site-heading-lower">Spartan Recipes</span>
  </h1>

<Navbar bg="primary" expand="lg" id="mainNav">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" >Spartan Recipes</a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
</Navbar>;

<div id="content" class>
	<div id="main">
		<div class="container">
			<div class="login-options">
				<div class="title active">
					<p class="qa-active">New to Spartan Recipes?</p>
				</div>
					<div class="title with-link">
						<p onClick={() => onRouteChange('login')} class="qa-not-active" >Already registered?</p>			
					</div>
					<div class="clear"></div>
			</div>
			<br/>
			<p class="qa-use-email">Register with email</p>
			
		</div>

	<form>
  <div class="field">
    <label for="InputEmail">Email address:</label>
    <input type="email" required class="form-control" id="InputEmail" placeholder="Enter email"/>
  </div>
  <div class="field">
    <label for="InputFirstName">First Name:</label>
    <input type="fname" required class="form-control" id="InputFirstName" placeholder="First Name"/>
  </div>
  <div class="field">
  	<label for="InputLastName">Last Name:</label>
  	<input type="lname" required class="form-control"name="InputLastName" placeholder="Last Name"/>
  </div>
  <div class="field">
  	<label for="Password">Password:</label>
  	<input type="password" required class="form-control" name="InputPassword" placeholder="Password"/>
  </div>
  <div class="field">
  	<label for="Bdate">Date of Birth:</label>
  	<input type="Date" class="form-control" name="InputBdate" placeholder="Birth date"/>
  </div>
  <div class="field">
  	<label for="Gender">Gender:</label><br/>
  	<div class="form-check form-check-inline" required>
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>Male

  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>Female

  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>Other
</div>

  </div>
  <br/>
  <input 
	  onClick={() => onRouteChange('home')} 
	  type="signin" 
	  class="btn btn-primary btn-lg "
	   type="submit" 
	   value="Sign In" 
   />
  <br/>
  	
  <br/>
</form>
	</div>



</div>
</body>
	);
}

export default Register;