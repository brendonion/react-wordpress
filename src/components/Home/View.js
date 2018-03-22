// @flow
import * as React from 'react';

import { Loading } from '../reusables';
import Movie from './Movie';

type Props = {
  moviesState: Object,
  getMovies: Function,
}

class View extends React.Component<Props> {
  render() {
    const { isFetching, success, data } = this.props.moviesState;

    return (
      <div>
        <h2 className="title--centered">Star Wars Movies</h2>
        <Loading show={isFetching} />
        {success && data.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    )
  }
}

export default View;
