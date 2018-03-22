// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { postMovie } from '../../actions/movieActions';
import { uploadMedia } from '../../actions/mediaActions';
import { POST_MOVIE } from '../../constants/reducerTypes';

import View from './View';

type Props = {
  postMovieState: Object,
  postMovie: Function,
  uploadMedia: Function,
}

type State = {
  title: string,
  releaseYear: string,
  rating: string,
  description: string,
  imageName: string,
  imageFile: Object | null,
}

class Create extends React.Component<Props, State> {

  state = {
    title: '',
    releaseYear: '',
    rating: '',
    description: '',
    imageName: '',
    imageFile: null,
  }

  handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const state = {...this.state};
    
    const mediaPayload = {
      name: state.imageName,
      file: state.imageFile,
    };

    this.props.uploadMedia(mediaPayload)
      .then((response) => {
        const payload = {
          title: state.title,
          status: 'publish',
          acf_fields: {
            release_year: parseInt(state.releaseYear, 0),
            rating: parseInt(state.rating, 0),
            description: state.description,
          },
          featured_media: response.data.id,
        };
        this.props.postMovie(payload);
      });
  }

  handleInput = (key: string) => (event: any) => {
    this.setState({ [key]: event.target.value });
  }

  handleImageUpload = (event: any) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onload = (e) => {
      this.setState({
        imageName: file.name, 
        imageFile: file,
      });
    }
    reader.readAsDataURL(file);
  }

  render() {
    return (
      <View 
        {...this.props} 
        {...this.state} 
        handleInput={this.handleInput}
        handleSubmit={this.handleSubmit}
        handleImageUpload={this.handleImageUpload}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  postMovieState: state[POST_MOVIE]
});

const mapDispatchToProps = {
  postMovie,
  uploadMedia,
};

export default connect(mapStateToProps, mapDispatchToProps)(Create);
