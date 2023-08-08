import React from 'react';
import './App.css';
import axios from 'axios';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import loginImg from './login.png';
import SignUp from './SignUp';
import HomePage from './HomePage';
import { GoogleLogin } from 'react-google-login';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  isLoggedIn = () => {
    // window.loggedUsername should be defined by UI page / jelly script
    // if it's 'guest' that means there is no active user session
    if (window.loggedUsername === 'guest') {
      return false;
    } else {
      return true; // set it to false for local development to prevent passing through
    }
  };

  responseGoogle = response => {
    if (response && response.profileObj) {
      // Process the response received from Google Sign-In
      const { email, name, imageUrl } = response.profileObj;

      // Perform the login logic using the data received from Google Sign-In
      // For example, you can make an API call to your server to authenticate the user.

      // If login is successful, you can redirect the user to the home page.
      this.props.history.push('/home');
    } else {
      // Handle error if the response is not valid
      console.log('Google Sign-In failed.');
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // Perform the sign-in logic here, as you've already implemented
        // the sign-in functionality in the original code.
        // Once sign-in is successful, you can redirect to the home page.
        this.props.history.push('/home');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    if (this.isLoggedIn()) {
      return <div>Successfully logged in...</div>; // Redirect the user to the home page after successful login
    }
    return (
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
          </div>
          <div className="loginForm">
            <h2>Login</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please enter your username' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please enter your Password' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </FormItem>
              {/* Google Sign-In button */}
              <FormItem style={{ textAlign: 'center', marginBottom: 0 }}>
                <GoogleLogin
                  clientId="1003141512895-foh3n51lej9jqisledisadosf7gsthof.apps.googleusercontent.com" // Replace with your actual Google Client ID
                  buttonText="Login with Google"
                  onSuccess={this.responseGoogle}
                  onFailure={this.responseGoogle}
                  cookiePolicy={'single_host_origin'}
                  style={{
                    width: '100%',
                    height: '20px', // Set the same height as the "Log in" button
                    marginTop: '10px', // Add some spacing to separate from other elements
                  }}
                />
              </FormItem>
              {/* Add the "Sign Up" link inside the loginForm div */}
              <div style={{ textAlign: 'center' }}>
                <Link to="/signup">Don't have an account? Sign Up</Link>
              </div>
            </Form>
          </div>
        </div>
        <div className="footer">
          <a href="" target="_blank" rel="noopener noreferrer" className="footerLink">
            Powered by React
          </a>
        </div>
      </div>
    );
  }
}

const App = Form.create()(NormalLoginForm);

const AppWithRouting = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  </Router>
);

export default AppWithRouting;
