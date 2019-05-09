import React, { Component } from 'react';

import DefaultLayout from './Components/DefaultLayout/DefaultLayout';
import SideBar from './Components/SideBar/SideBar';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import SearchRecipe from './Components/SideBar/SearchRecipe/SearchRecipe';


class App extends Component {

	constructor(){
		super();
		this.state ={
			route: 'login',
      isSignedIn: false,
      user: {
      id: '',
      firstname: '',
      lastname: '', 
      email: '', 
      joined: new Date()
      }
		}
	}

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email, 
      joined: data.joined
    }})
      
  }

  onRouteChange = (route) => {
    if (route === 'signout'){
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route });
  }

  render() {
    const { isSignedIn, route } = this.state;
    return (
    <div className="App" >
    	{
    		route === 'home'
    		? <div>
          <DefaultLayout />
          <SideBar />

     </div>
    		: (
            route === 'login' 
            ? <Login loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
            : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />

          )
     		 
    	}
     
      
    </div>

    );
    
  }
}

export default App;
