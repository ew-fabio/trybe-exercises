import React, { Component } from 'react'

export default class Quote extends Component {
  render() {
    const { quote, saveFavoriteQuotes, isFavorite } = this.props

    return (
      <div>
        <p>{ quote.quote }</p>
        <p>{ quote.author }</p>

        <button
          onClick={() => saveFavoriteQuotes(quote)}>
          {
            isFavorite ? 'Defavoritar' : 'Favoritar'
          }
        </button>
      </div>
    )
  }
}
