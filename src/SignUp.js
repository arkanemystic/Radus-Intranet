import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import loginImg from './login.png';

const FormItem = Form.Item;

class SignUpForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success('Successfully signed up!');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
          </div>
          <div className="loginForm">
            <h2>Sign Up</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please enter your username' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator('email', {
                  rules: [
                    { required: true, message: 'Please enter your email' },
                    { type: 'email', message: 'Please enter a valid email address' },
                  ],
                })(<Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email" />)}
              </FormItem>
              <FormItem>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please enter your password' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Sign Up
                </Button>
              </FormItem>
            </Form>
            {

            }
            <div style={{ textAlign: 'center' }}>
              <Link to="/">Already have an account? Log in</Link>
            </div>
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

const SignUp = Form.create()(SignUpForm);

export default SignUp;
