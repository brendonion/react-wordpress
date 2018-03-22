// @flow
import * as React from 'react';

type Props = {
  loginState: Object,
  handleInput: Function,
  handleSubmit: Function,
  username: string,
  password: string,
}

class LoginForm extends React.Component<Props> {
  render() {
    const {
      username,
      password,
      handleInput,
      handleSubmit,
    } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="login-username">User Name:</label>
        <input 
          id="login-username" 
          value={username} 
          onChange={handleInput('username')} 
        />
        <label htmlFor="signup-password">Password:</label>
        <input 
          id="login-password" 
          type="password"
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

export default LoginForm;
