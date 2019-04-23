import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


const Login = ({onRouteChange}) => {
	return (

		<body>
  <h1 className="site-heading text-center text-white d-none d-lg-block">
    <span className="site-heading-lower">Spartan Recipes</span>
  </h1>

<Navbar bg="primary" expand="lg" id="mainNav">
      <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" >Spartan Recipes</a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
</Navbar>;

<div id="content" class>
	<div id="main">
		<div class="container">
			<div class="login-options">
				<div class="title with-link">
					<p onClick={() => onRouteChange('register')} class="qa-join-sr">New to Spartan Recipes?</p>
				</div>
					<div class="title active">
						<p class="already">Already registered?</p>			
					</div>
					<div class="clear"></div>
			</div>
			<br/>
			<p className="qa-use-email">Sign in with email</p>
			
		</div>

	<form>
  <div className="field">
    <label for="InputEmail">Email address:</label>
    <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div class="field">
    <label for="InputPassword">Password:</label>
    <input type="password" class="form-control" id="InputPassword" placeholder="Password"/>
  </div>
  <br/>
  <div class="field">
  <input 
	  onClick={() => onRouteChange('home')} 
	  type="signin" 
	  class="btn btn-primary btn-lg "
	   type="submit" 
	   value="Sign In" 
   />
  </div>
  <br/>
</form>
	</div>



</div>
</body>
	);
}

export default Login;