// @flow
import * as React from 'react';
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
    const { signup, ...signupProps } = this.props;

    return (
      <div>
        <h2 className="title--centered">Star Wars Movies</h2>
        {this.props.signupState.isFetching &&
          <div>Loading</div>
        }
        <SignupForm {...signupProps} />
      </div>
    )
  }
}

export default View;
