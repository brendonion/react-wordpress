// @flow
import * as React from 'react';

type Props = {
  title: string,
  releaseYear: string,
  rating: string,
  description: string,
  handleInput: Function,
  handleSubmit: Function,
}

class CreateForm extends React.Component<Props> {
  render() {
    const {
      title,
      releaseYear,
      rating,
      description,
      handleInput,
      handleSubmit,
    } = this.props;

    return (
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="movie-title">Title:</label>
          <input 
            id="movie-title" 
            autoFocus
            value={title} 
            onChange={handleInput('title')} 
          />
        </div>
        <div className="field">
          <label htmlFor="movie-release">Release Year:</label>
          <input 
            id="movie-release" 
            type="number"
            maxLength="4"
            value={releaseYear} 
            onChange={handleInput('releaseYear')} 
          />
        </div>
        <div className="field">
          <label htmlFor="movie-rating">Rating:</label>
          <input 
            id="movie-rating" 
            type="number"
            maxLength="1"
            value={rating} 
            onChange={handleInput('rating')} 
          />
        </div>
        <div className="field">
          <label htmlFor="movie-description">Description:</label>
          <textarea 
            id="movie-description" 
            value={description}
            onChange={handleInput('description')} 
          />
        </div>
        <button 
          className="btn--primary" 
          type="submit" 
        >
          Submit
        </button>
      </form>
    )
  }
}

export default CreateForm;
