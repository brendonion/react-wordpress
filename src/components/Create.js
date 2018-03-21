// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { POST_MOVIE } from '../constants/reducerTypes';

class Create extends React.Component<void> {
  render() {
    return (
      <div>
        <h2>Create a Movie</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  postMovieState: state[POST_MOVIE]
});

export default connect(mapStateToProps, null)(Create);
