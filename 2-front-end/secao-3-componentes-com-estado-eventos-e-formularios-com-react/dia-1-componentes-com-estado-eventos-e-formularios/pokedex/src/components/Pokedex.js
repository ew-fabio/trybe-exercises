import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from '../types';
import GenButton from './GenButton';

class Pokedex extends React.Component {
  constructor() {
    super();

    this.state = {
      pokemonIndex: 0,
    };
  }

  nextPoke = () => {
    const { pokemonIndex } = this.state;
    const { pokemonList } = this.props;
    if (pokemonIndex < pokemonList.length - 1) {
      this.setState((prevState) => ({
        pokemonIndex: prevState.pokemonIndex + 1,
      }));
    } else {
      this.setState({
        pokemonIndex: 0,
      });
    }
  };

  render() {
    const { pokemonList } = this.props;
    const { pokemonIndex } = this.state;
    return (
      <>
        <h1> Pokédex </h1>
        <div className="pokedex">
          <Pokemon pokemon={ pokemonList[pokemonIndex] } />
        </div>
        <div>
          <GenButton pokeType="Fire" />
          <GenButton pokeType="Psychic" />
        </div>
        <button
          type="button"
          onClick={ this.nextPoke }
        >
          Próximo pokémon
        </button>
      </>
    );
  }
}

Pokedex.defaultProps = {
  pokemonList: [],
};

Pokedex.propTypes = {
  pokemonList: arrayOf(pokemonType),
};

export default Pokedex;
