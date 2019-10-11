import React, { Component } from 'react'
import { Popup, Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as loginActions from '../../actions/login';
import Service from '../../service/base'
import { loggedIn } from '../../service/auth'

import './Login.css';

interface ILoginState {
  username: string,
  is_logged: boolean,
}

interface ILoginProps {
  changeLogin: Function,
  changePassword: Function,
  tryLogin: Function,
  logout: Function
}

interface ISinginProps {
  changeLogin: Function,
  changePassword: Function,
  tryLogin: Function
}

interface ISingOutProps {
  logout: Function
}

class Login extends Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps, state: ILoginState) {
    super(props, state);
    this.state = {
      is_logged: loggedIn(),
      username: ''
    }
  }

  async componentWillMount() {
    const res = await Service.get('profiles/current_user/');
    this.setState({
      ...this.state,
      username: res[0] ? res[0].name + ' ' + res[0].second_name : 'Sing in'
    })
  } 
  
  render() {
    return (
        <div className="Login">
          <Popup trigger={<div>{this.state.username}</div>} flowing on='click'>
            {this.state.is_logged
              ? <SingOut
                  logout={this.props.logout}/>
              : <SingIn
                  changeLogin={this.props.changeLogin} 
                  changePassword={this.props.changePassword}
                  tryLogin={this.props.tryLogin}/> }
          </Popup>
        </div>
    )
  }
}

const SingIn = (props: ISinginProps, state: {}) => (
  <div>
    <Form>
      <Form.Field>
        <label>Login</label>
        <input placeholder='Login' onChange={(e: React.ChangeEvent) => props.changeLogin(e)}/>
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" onChange={(e: React.ChangeEvent) => props.changePassword(e)}/>
      </Form.Field>
      <Button type='submit' onClick={() => props.tryLogin()}>SingIn</Button>
    </Form>
  </div>
)

const SingOut = (props: ISingOutProps, state: any) => (
  <div>
    <Button onClick={() => props.logout()}>Log out</Button>
  </div>
)

const mapStateToProps = () => ({
  username: '',
  is_logged: false
});

const mapDispatchToProps = (dispatch: any) => ({
  ...bindActionCreators(loginActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);