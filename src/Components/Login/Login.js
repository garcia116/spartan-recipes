import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Login.css';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loginEmail: '',
			loginPassword: ''
		}
	}
	onEmailChange = (event) => {
		this.setState({loginEmail: event.target.value})
	}

	onPasswordChange = (event) => {
		this.setState({loginPassword: event.target.value})
	}

	onSubmitLogin = (event) => {
		event.preventDefault();
		fetch('http://localhost:3000/signin', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({
				email: this.state.loginEmail,
				password: this.state.loginPassword
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
				<div class="title with-link">
					<p onClick={() => onRouteChange('register')} class="qa-join-sr">New to Spartan Recipes?</p>
				</div>
					<div class="title active">
						<p class="already">Already registered?</p>			
					</div>
					<div class="clear"></div>
			</div>
			<br/>
			<p class="qa-use-email">Sign in with email</p>
			
		</div>

	<form>
  <div class="field">
    <label for="InputEmail">Email address:</label>
    <input type="email" 
    required class="form-control" 
    id="InputEmail"
    onChange={this.onEmailChange}
      placeholder="Enter email"/>
  </div>

  <div class="field">
    <label for="InputPassword">Password:</label>
    <input type="password" 
    required class="form-control" 
    id="InputPassword" 
    onChange={this.onPasswordChange}
    placeholder="Password"/>
  </div>
  <br/>
  <div class="field">
  <input 
	  onClick={ this.onSubmitLogin } 
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

}

export default Login;