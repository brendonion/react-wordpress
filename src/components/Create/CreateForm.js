// @flow
import * as React from 'react';

type Props = {
  title: string,
  releaseYear: string,
  rating: string,
  description: string,
  imageName: string,
  imageFile: Object | null,
  handleInput: Function,
  handleSubmit: Function,
  handleImageUpload: Function,
}

class CreateForm extends React.Component<Props> {
  render() {
    const {
      title,
      releaseYear,
      rating,
      description,
      imageName,
      imageFile,
      handleInput,
      handleSubmit,
      handleImageUpload,
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
        <div className="upload-container">
          <label htmlFor="new-logo">Image:</label>
          <input 
            className="upload-container__field"
            placeholder="No image uploaded"
            value={
              imageName.length > 25 
              ? imageName.slice(0, 20) + '..' + imageName.slice(imageName.length - 4, imageName.length) 
              : imageName
            }
            disabled
          />
          <div className="upload-container__upload btn--secondary">
            <span>Upload New Image</span>
            <input 
              id="new-logo"
              type="file" 
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
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
