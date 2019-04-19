import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from '../Header';
import Modal from '../Modal/Modal';
import axios from 'axios';
import '../../css/register-form.css';
import '../../css/navbar.css';

class RegisterForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
        email: "",
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
      console.log("State", this.state)
    };
  

    formSubmit = e => {
      e.preventDefault();
      
      const headers = {
        "username": this.state.username,
        "password": this.state.password
      }

      axios
      .post(`http://localhost:4000/api/register`, headers)
      .then(response => {
        console.log('Response', response);
      })
      .catch(err => {
        console.log('Err:', err);
      });
      this.setState({ username: "", password: "", email: "", });
      this.props.history.push("/");
    };
  

    render() {
      
      const { username, password, email } = this.state;

      return (
        <div className="register-page-container">
        <Header />
        <div className="navbar">
          <Link to='/' className='navlink'>Home</Link>
          <Link to='/Account' className='navlink'>My Account</Link>
          <Link to='/Login' className='navlink'>Login</Link>
          <Link to='/Register' className='navlink'>Register</Link>
        </div>
        <div className="register-body">
        <div className="Register-text"><h2>Create an account</h2></div>
        
        
        <form className="form" onSubmit={this.formSubmit}>
          <input
            className="user"
            type="text"
            value={username}
            name="username"
            placeholder="Enter username..."
            onChange={this.handleInputChange}
          />
          <input
            className="password"
            type="text"
            value={password}
            name="password"
            placeholder="Enter password..."
            onChange={this.handleInputChange}
          />
          
          <input
            className="email"
            type="text"
            value={email}
            name="email"
            placeholder="Enter email..."
            onChange={this.handleInputChange}
          />
            <button type="submit">Register</button>
            <div className="registeredtext">Already registered?</div>
            <Link to='/Login'><button>Sign in here</button></Link>
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


export default RegisterForm;
