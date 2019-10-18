import React, { Component } from 'react'
import { Popup, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from './actions';
import Service from '../../service/base'
import { loggedIn } from '../../service/auth'

import './Login.css';

interface ILoginState {
  username: string,
  is_logged: boolean,
  login?: string,
  pass?: string
}

interface ILoginProps {
  tryLogin: Function,
  logout: Function,
  name?: string,
  secondName?: string
}

interface ISinginProps {
  tryLogin: Function,
  changeLogin: Function,
  changePassword: Function,
  login?: string,
  pass?: string,
}

interface ISingOutProps {
  logout: Function
}

class Login extends Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps, state: ILoginState) {
    super(props, state);
    this.state = {
      is_logged: loggedIn(),
      username: '',
    }
  }
  
  onChengeLogin = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, login: e.target.value})
  onChengePassword = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({...this.state, pass: e.target.value})

  render() {
    const username = this.props.name || this.props.secondName ? this.props.name + ' ' + this.props.secondName : 'Sing in';
    
    return (
        <div className="Login">
          <Popup trigger={<div>{username}</div>} flowing on='click'>
            {this.state.is_logged
              ? <SingOut
                  logout={this.props.logout}/>
              : <SingIn
                  login={this.state.login}
                  pass={this.state.pass}
                  changeLogin={this.onChengeLogin} 
                  changePassword={this.onChengePassword}
                  tryLogin={this.props.tryLogin}/> }
          </Popup>
        </div>
    )
  }
}

const SingIn = (props: ISinginProps) => (
  <div>
    <Form>
      <Form.Field>
        <label>Login</label>
        <input placeholder='Login' value={props.login} onChange={(e: React.ChangeEvent) => props.changeLogin(e)}/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" value={props.pass} onChange={(e: React.ChangeEvent) => props.changePassword(e)}/>
      </Form.Field>
      <Button type='submit' onClick={() => props.tryLogin(props.login, props.pass)}>SingIn</Button>
    </Form>
  </div>
)

const SingOut = (props: ISingOutProps) => (
  <div>
    <Button onClick={() => props.logout()}>Log out</Button>
  </div>
)


const mapStateToProps = (state: any) => state.profile
const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(loginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);