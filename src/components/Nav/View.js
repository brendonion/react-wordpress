// @flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import * as Routes from '../../constants/routes';

type Props = {
  logout: Function,
}

class View extends React.Component<Props> {
  render() {
    return (
      <nav className="nav">
        <div className="nav__links">
          <Link to={Routes.HOME}>Home</Link>
          <Link to={Routes.CREATE}>Create A Movie</Link>
        </div>
        <button 
          className="btn--secondary"
          onClick={() => this.props.logout()}
        >
          Log Out
        </button>
      </nav>
    )
  }
}

export default View;
