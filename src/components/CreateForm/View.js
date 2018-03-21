// @flow
import * as React from 'react';

import CreateForm from './CreateForm';

type Props = {
  postMovieState: Object,
  postMovie: Function,
  title: string,
  releaseYear: string,
  rating: string,
  description: string,
  handleInput: Function, 
  handleSubmit: Function,
}

class View extends React.Component<Props> {
  render() {
    const { postMovieState, postMovie, ...formProps } = this.props;
    return (
      <div>
        <h2 className="title--centered">Create a Star Wars Movie</h2>
        {this.props.postMovieState.isFetching &&
          <div>Loading</div>
        }
        <CreateForm {...formProps} />
      </div>
    )
  }
}

export default View;
