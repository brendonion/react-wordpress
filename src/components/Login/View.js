// @flow
import * as React from 'react';

import { Loading } from '../reusables';
import LoginForm from './LoginForm';

type Props = {
  loginState: Object,
  login: Function,
  handleInput: Function,
  handleSubmit: Function,
  username: string,
  password: string,
}

class View extends React.Component<Props> {
  render() {
    const { login, ...loginFormProps } = this.props;

    return (
      <div className="form-container--centered">
        <h2 className="title--centered">Login</h2>
        <Loading show={this.props.loginState.isFetching} />
        <LoginForm {...loginFormProps} />
      </div>
    )
  }
}

export default View;
