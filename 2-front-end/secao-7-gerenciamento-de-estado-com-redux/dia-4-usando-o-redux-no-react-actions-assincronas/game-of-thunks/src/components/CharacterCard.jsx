import React, { Component } from 'react'
import { connect } from 'react-redux'

class CharacterCard extends Component {
  render() {
    const { characterData } = this.props;

    return (
      <div>
        <p>Name: { characterData[0].name }</p>
      </div>
    )
  }
}

const mapstateToProps = (state) => ({
  characterData: state.characterData,
});

export default connect(mapstateToProps)(CharacterCard);