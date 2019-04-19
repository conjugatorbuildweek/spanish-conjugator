import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from '../Header';
import Modal from '../Modal/Modal';
import '../../css/login-form.css';
import '../../css/navbar.css';

class LoginForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        isShowing: false
      };
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

    handleInputChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };
  
    formSubmit = e => {
      e.preventDefault();
      
      this.setState({ username: "", password: ""});
      this.props.history.push("/");
    };
  

    render() {
      
      const { username, password} = this.state;

      return (
        <div className="login-page-container">
        <Header />
        <div className="navbar">
          <Link to='/' className='navlink'>Home</Link>
          <Link to='/Account' className='navlink'>My Account</Link>
          <Link to='/Login' className='navlink'>Login</Link>
          <Link to='/Register' className='navlink'>Register</Link>
        </div>
        <div className="login-body">
          <h2>Login</h2>
        <form className="form" onSubmit={this.formSubmit}>
          <input className="user"
            type="text"
            value={username}
            name="username"
            placeholder="Enter username..."
            onChange={this.handleInputChange}
          />
          <input className="password"
            type="text"
            value={password}
            name="password"
            placeholder="Enter password..."
            onChange={this.handleInputChange}
          />
            <button type="submit">Sign in</button>
            <div className="registertext">New to Conjugator.io?</div>
           <Link to='/Register'><button>Register here</button></Link>
        </form>
        <div className="made-with-love" onClick={this.openModalHandler}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
          <Modal
            show={this.state.isShowing}
            close={this.closeModalHandler} 
          />
          </div>
       </div> 
      );
    }
  }


export default LoginForm;