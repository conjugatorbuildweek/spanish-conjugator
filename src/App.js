import React, { Component } from "react";
import { Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import LoginForm from "./components/Login/LoginForm";
import RegisterForm from "./components/Login/RegisterForm";
import AccountView from "./components/AccountPage/AccountView";


    class App extends Component {

      constructor() {
        super();

        this.state = {}        
      }

      render () {
      return(
      <div className="app">
      <Route exact path='/' component={Home} /> 
      <Route exact path='/Login' component={LoginForm} /> 
      <Route exact path='/Register' component={RegisterForm} /> 
      <Route exact path='/Account' component={AccountView} /> 
      </div>
      
  );
};
    }

export default App;
