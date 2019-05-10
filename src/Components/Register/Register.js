import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Register.css';


class Register extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
    }
  }
  onFirstNameChange = (event) => {
    this.setState({firstname: event.target.value})
  }

  onLastNameChange = (event) => {
    this.setState({lastname: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitLogin = (event) => {
        event.stopPropagation();

    fetch('https://gentle-fortress-56351.herokuapp.com/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      })
    })
      .then(response => response.json())
      .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home');

      }
    })
  }
 
  render() {

    const { onRouteChange } = this.props;

	return (

  <body>
  <h1 class="site-heading text-center text-white d-none d-lg-block">
    <span class="site-heading-lower">Spartan Recipes</span>
  </h1>

<Navbar bg="primary" expand="lg" id="mainNav">
      <a class="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" >Spartan Recipes</a>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
 
</Navbar>
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
    <input type="email" 
    required class="form-control" 
    id="InputEmail" 
    placeholder="Enter email"
    onChange={this.onEmailChange}
    />
  </div>
  <div class="field">
    <label for="InputFirstName">First Name:</label>
    <input type="fname" 
    required class="form-control" 
    id="InputFirstName" 
    placeholder="First Name"
    onChange={this.onFirstNameChange}
    />
  </div>
  <div class="field">
  	<label for="InputLastName">Last Name:</label>
  	<input type="lname" 
    required class="form-control" 
    name="InputLastName" 
    placeholder="Last Name"
    onChange={this.onLastNameChange}
    />
  </div>
  <div class="field">
  	<label for="Password">Password:</label>
  	<input type="password"
     required class="form-control" 
     name="InputPassword"
     placeholder="Password"
     onChange={this.onPasswordChange}

      />

  </div>
  <br/>
  <input 
	  onClick={this.onSubmitLogin} 
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
}

export default Register;