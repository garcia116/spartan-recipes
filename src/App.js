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
			route: 'login'
		}
	}

  onRouteChange = (route) => {
    this.setState({route: route });
  }

  render() {
    return(
    <div className="App">
    	{
    		this.state.route === 'home'
    		? <div>
          <DefaultLayout />
          <SideBar />

     </div>
    		: (
            this.state.route === 'login' 
            ? <Login onRouteChange={this.onRouteChange} />
            : <Register onRouteChange={this.onRouteChange} />

          )
     		 
    	}
     
      
    </div>

    );
    
  }
}

export default App;
