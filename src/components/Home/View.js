// @flow
import * as React from 'react';

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
        {isFetching &&
          <div>Loading</div>
        }
        {success && data.length && data.map((movie) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    )
  }
}

export default View;
