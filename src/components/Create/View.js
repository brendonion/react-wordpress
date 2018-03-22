// @flow
import * as React from 'react';

import { Loading } from '../reusables';
import CreateForm from './CreateForm';

type Props = {
  postMovieState: Object,
  postMovie: Function,
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

class View extends React.Component<Props> {
  render() {
    const { postMovieState, postMovie, ...formProps } = this.props;

    return (
      <div>
        <h2 className="title--centered">Create a Star Wars Movie</h2>
        <Loading show={this.props.postMovieState.isFetching} />
        <CreateForm {...formProps} />
      </div>
    )
  }
}

export default View;
