// @flow
import * as React from 'react';

type Props = {
  signupState: Object,
  handleInput: Function,
  handleSubmit: Function,
  username: string,
  email: string,
  password: string,
}

class SignupForm extends React.Component<Props> {
  render() {
    const {
      username,
      email,
      password,
      handleInput,
      handleSubmit,
    } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="signup-username">User Name:</label>
        <input 
          id="signup-username" 
          value={username} 
          onChange={handleInput('username')} 
        />
        <label htmlFor="signup-email">Email:</label>
        <input 
          id="signup-email" 
          type="email"
          value={email} 
          onChange={handleInput('email')} 
        />
        <label htmlFor="signup-password">Password:</label>
        <input 
          id="signup-password" 
          value={password} 
          onChange={handleInput('password')} 
        />
        <button 
          className="btn--primary" 
          type="submit" 
        >
          Submit
        </button>
      </form>
    )
  }
}

export default SignupForm;
