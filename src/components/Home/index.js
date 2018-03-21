// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { GET_MOVIES } from '../../constants/reducerTypes';
import { getMovies } from '../../actions/movieActions';

import View from './View';

type Props = {
  moviesState: Object,
  getMovies: Function,
}

class Home extends React.Component<Props> {

  componentDidMount() { 
    this.props.getMovies();
  }
  
  render() {
    return (
      <View {...this.props} />
    )
  }
}

const mapStateToProps = (state) => ({
  moviesState: state[GET_MOVIES]
});

const mapDispatchToProps = {
  getMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
