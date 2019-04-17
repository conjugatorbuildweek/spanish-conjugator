import React, { Component } from "react";
import { Route, Link } from 'react-router-dom';
import Graph from './Graph';
import TargetVerbs from './TargetVerbs';
import TotalVerbs from './TotalVerbs';
import Header from '../Header';
import Modal from '../Modal/Modal';

class AccountView extends Component {

    constructor() {
      super();

      this.state = {
          isShowing: false
      }
    }

    openModalHandler = () => {
        this.setState({
          isShowing: true
        });
      }
  
      closeModalHandler = () => {
        this.setState({
          isShowing: false
        });
      }

    render () {
    return(
    <div className="account-page">
        <Header />
        <div className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/Account'>My Account</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Register'>Register</Link>
        </div>
        <TargetVerbs />
        <TotalVerbs />
        <Graph />
        <div className="made-with-love" onClick={this.openModalHandler}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
          <Modal
            show={this.state.isShowing}
            close={this.closeModalHandler} 
          />
    </div>
            
        );
    };
}

export default AccountView;
