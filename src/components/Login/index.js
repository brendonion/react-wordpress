// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { AUTH } from '../../constants/reducerTypes';
import { login } from '../../actions/authActions';

import View from './View';

type Props = {
  loginState: Object,
  login: Function,
}

type State = {
  username: string,
  password: string,
}

class Login extends React.Component<Props, State> {

  state = {
    username: '',
    password: '',
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.props.login(username, password);
  } 

  handleInput = (key: string) => (event: any) => {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <View 
        {...this.props} 
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  loginState: state.authReducer
});

const mapDispatchToProps = {
  login
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
