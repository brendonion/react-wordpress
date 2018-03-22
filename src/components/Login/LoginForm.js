// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { SIGNUP } from '../../constants/routes';

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
      <form className="form__auth-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="login-username">User Name:</label>
          <input 
            id="login-username" 
            autoFocus
            value={username}
            onChange={handleInput('username')} 
          />
        </div>
        <div className="field">
          <label htmlFor="login-password">Password:</label>
          <input 
            id="login-password" 
            type="password"
            value={password} 
            onChange={handleInput('password')} 
          />
        </div>
        <button 
          className="btn--primary" 
          type="submit" 
        >
          Submit
        </button>
        <Link to={SIGNUP}>Sign up</Link>
      </form>
    )
  }
}

export default LoginForm;
