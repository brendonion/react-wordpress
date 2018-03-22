// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../constants/routes';

type Props = {
  user: string,
  logout: Function,
}

class View extends React.Component<Props> {
  render() {
    return (
      <nav className="nav">
        <div className="nav__options">
          <Link to={Routes.HOME}>Home</Link>
          <Link to={Routes.CREATE}>Create A Movie</Link>
        </div>
        <div className="nav__options">
          <p>Welcome, {this.props.user}</p>
          <button 
            className="logout-btn"
            onClick={() => this.props.logout()}
          />
        </div>
      </nav>
    )
  }
}

export default View;
