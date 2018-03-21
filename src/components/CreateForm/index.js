// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { postMovie } from '../../actions/movieActions';
import { POST_MOVIE } from '../../constants/reducerTypes';

import View from './View';

type Props = {
  postMovieState: Object,
  postMovie: Function,
}

type State = {
  title: string,
  releaseYear: string,
  rating: string,
  description: string,
}

class Create extends React.Component<Props, State> {
  static defaultProps = {}

  state = {
    title: '',
    releaseYear: '',
    rating: '',
    description: '',
  }

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const state = {...this.state};
    const payload = {
      title: state.title,
      release_year: parseInt(state.releaseYear, 0),
      rating: parseInt(state.rating, 0),
      description: state.description,
    };

    console.log('payload', payload);
    this.props.postMovie(payload);
  }

  handleInput = (key: string) => (event: any) => {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <View 
        {...this.props} 
        {...this.state} 
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  postMovieState: state[POST_MOVIE]
});

const mapDispatchToProps = {
  postMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
