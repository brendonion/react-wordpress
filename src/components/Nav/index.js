// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import View from './View';

type Props = {
  logout: Function,
}

class Nav extends React.Component<Props> {
  render() {
    return (
      <View {...this.props} />
    )
  }
}

const mapDispatchToProps = {
  logout
};

export default connect(null, mapDispatchToProps)(Nav);
