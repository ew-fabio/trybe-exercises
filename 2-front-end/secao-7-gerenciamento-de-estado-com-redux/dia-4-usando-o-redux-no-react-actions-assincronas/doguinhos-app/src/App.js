import React from "react";
import { connect } from "react-redux";

import { fetchDogImage } from "./redux/actions";

class App extends React.Component {
  render() {
    const { isFetching, imageURL, dispatch } = this.props;

    if (isFetching) return <p>Loading...</p>

    return (
      <div>
        <button
          onClick={ () => { dispatch(fetchDogImage()) } }
          type='button'
        >
          New Dog
        </button>

        {
          imageURL && <img
            src={ imageURL }
            alt="Random dog."
          />
        }

      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageURL: state.imageURL,
  isFetching: state.isFetching,
})


export default connect(mapStateToProps)(App);
