// @flow
import * as React from 'react';

type Props = {
  movie: Object,
}

class Movie extends React.Component<Props> {
  render() {
    const { movie } = this.props;
    
    return (
      <div className="movie">
        <img src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url} alt="movie cover" />
        <h4>Title: {movie.title.rendered}</h4>
        <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
        <p><strong>Rating:</strong> {movie.acf.rating}</p>
        <div><strong>Description:</strong> <div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
      </div>
    )
  }
}

export default Movie;
