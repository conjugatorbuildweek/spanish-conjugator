import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Header from '../Header';
import Modal from '../Modal/Modal';

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
    };
  
    formSubmit = e => {
      e.preventDefault();
      
      this.setState({ username: "", password: "", email: "", });
      this.props.history.push("/");
    };
  

    render() {
      
      const { username, password, email } = this.state;

      return (
        <div className="register">
        <Header />
        <div className="navbar">
          <Link to='/'>Home</Link>
          <Link to='/Account'>My Account</Link>
          <Link to='/Login'>Login</Link>
          <Link to='/Register'>Register</Link>
        </div>

        <h2>Create an account</h2>
        
        <form className="form" onSubmit={this.formSubmit}>
          <input
            type="text"
            value={username}
            name="username"
            placeholder="Enter username..."
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            value={password}
            name="password"
            placeholder="Enter password..."
            onChange={this.handleInputChange}
          />
          
          <input
            type="text"
            value={email}
            name="email"
            placeholder="Enter email..."
            onChange={this.handleInputChange}
          />
          
            <div className="button">
            <button type="submit">Register</button>
            </div>
            <Link to='/Login'><button>Already registered? Sign in</button></Link>
          </form>
          <div className="made-with-love" onClick={this.openModalHandler}>Made with <span role="img" aria-label="heart">❤️</span> in <span role="img" aria-label="colombia">🇨🇴</span></div>
          <Modal
            show={this.state.isShowing}
            close={this.closeModalHandler} 
          />
        </div>
      );
    }
  }


export default RegisterForm;
