// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/authActions';
import { SIGNUP } from '../../constants/reducerTypes';
import { HOME } from '../../constants/routes';

import View from './View';

type Props = {
  signupState: Object,
  signup: Function,
}

type State = {
  username: string,
  email: string,
  password: string,
}

class Signup extends React.Component<Props, State> {

  state = {
    username: '',
    email: '',
    password: '',
  }

  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: sign user up, then redirect to home

    this.props.signup(this.state);
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
  signupState: state[SIGNUP]
});

const mapDispatchToProps = {
  signup
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
