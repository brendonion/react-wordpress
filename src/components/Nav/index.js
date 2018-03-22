// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

import View from './View';

type Props = {
  user: string,
  logout: Function,
}

class Nav extends React.Component<Props> {
  render() {
    return (
      <View {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
