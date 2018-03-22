// @flow
import * as React from 'react';

import { Loading } from '../reusables';
import SignupForm from './SignupForm';

type Props = {
  signupState: Object,
  signup: Function,
  handleInput: Function,
  handleSubmit: Function,
  username: string,
  email: string,
  password: string,
}

class View extends React.Component<Props> {
  render() {
    const { signup, ...signupFormProps } = this.props;

    return (
      <div>
        <h2 className="title--centered">Sign Up</h2>
        <Loading show={this.props.signupState.isFetching} />
        <SignupForm {...signupFormProps} />
      </div>
    )
  }
}

export default View;
