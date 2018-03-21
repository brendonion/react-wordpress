// @flow
import React, { Component } from 'react';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  componentDidMount(): void {
    const API = 'http://localhost:8888/wordpresstest/wp-json/wp/v2/movies?_embed';
    fetch(API)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ movies: response });
      });
  }
  
  render() {
    return (
      <div>
        <h2 className="title--centered">Star Wars Movies</h2>
        {this.state.movies.map((movie, index) => (
          <div className="movie" key={movie.id}>
            <img src={movie._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url} alt="movie cover" />
            <h4>Title: {movie.title.rendered}</h4>
            <p><strong>Release Year:</strong> {movie.acf.release_year}</p>
            <p><strong>Rating:</strong> {movie.acf.rating}</p>
            <div><strong>Description:</strong>  <div dangerouslySetInnerHTML={ {__html: movie.acf.description} } /></div>
          </div>
        ))}
      </div>
    )
  }

}

export default Home;
