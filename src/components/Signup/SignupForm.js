// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../constants/routes';

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
      <form className="form__auth-form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="signup-username">User Name:</label>
          <input 
            id="signup-username" 
            autoFocus
            value={username} 
            onChange={handleInput('username')} 
          />
        </div>
        <div className="field">
          <label htmlFor="signup-email">Email:</label>
          <input 
            id="signup-email" 
            type="email"
            value={email} 
            onChange={handleInput('email')} 
          />
        </div>
        <div className="field">
          <label htmlFor="signup-password">Password:</label>
          <input 
            id="signup-password" 
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
        <Link to={LOGIN}>Login</Link>
      </form>
    )
  }
}

export default SignupForm;
