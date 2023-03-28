import React, { Component } from 'react';
import { connect } from 'react-redux';
import CharacterCard from './components/CharacterCard';
import { fetchAPI } from './redux/actions';

class App extends Component {
  state = {
    character: '',
  }

  render() {
    const { character } = this.state;
    const { characterData, dispatch, isLoading } = this.props;

    return (
      <div>
        <label htmlFor="character">Personagem: </label>
        <input
          autoFocus
          type="text"
          id="character"
          onChange={ ({ target }) => this.setState({ character: target.value }) }
          />

        <button type='button' onClick={ () => dispatch(fetchAPI(character))}>Buscar</button>

        {
          characterData && <CharacterCard />
        }
        {
          isLoading && <p>Loading...</p>
        }

      </div>
    )
  }
}

const mapstateToProps = (state) => ({
  isLoading: state.isLoading,
  characterData: state.characterData,
});

export default connect(mapstateToProps)(App);