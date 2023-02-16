import React from 'react';
import './App.css';
import Quote from './components/Quote';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      quote: 'phrase',
      author: 'author',
      newFavorite: false,
      favoriteQuotes: []
    }
  }

  fetchQuote = () => {
    this.setState({
      quote: undefined,
      author: undefined
    }, async () => {
      const RESPONSE = await fetch('http://api.quotable.io/random')
      const data = await RESPONSE.json()
      //console.log(data);
      this.setState({
        quote: data.content,
        author: data.author
      })
    })
  }

  saveFavoriteQuotes = (content) => {
    const { quote, author, favoriteQuotes } = this.state
    // if(favoriteQuotes.some((phrase) =>phrase.quote === content.quote)) {
    //   this.setState({
    //     favoriteQuotes: favoriteQuotes.filter((phrase) => phrase.quote !== content.quote),
    //     newFavorite: false
    //   })
    // return;
    // }

    const del = favoriteQuotes.findIndex((iCard) => iCard.quote === content.quote);
    if(del > -1) {
      favoriteQuotes.splice(del, 1);
      this.setState({
        favoriteQuotes,
        newFavorite: false
      })
    return
    }

    this.setState((prevState) => ({
      ...prevState,
      favoriteQuotes: [...prevState.favoriteQuotes, {quote, author}],
      newFavorite: true
    }))
  }


  componentDidMount() {
    this.fetchQuote()
  }

  componentDidUpdate() {
    const { newFavorite } = this.state
    if(newFavorite) {
      this.setState({
        newFavorite: false
      }, this.fetchQuote)
    }
  }

  render() {
    const { quote, author, favoriteQuotes } = this.state

    const content = {
      quote: quote || 'Carregando...',
      author: author || '-',
    }

    //console.log(quote, author)

    return (
      <div className="App">
          <button onClick={this.fetchQuote}>
            Trocar Frase
          </button>

        <div>
          <Quote
            quote={ content }
            saveFavoriteQuotes= { this.saveFavoriteQuotes }
            isFavorite={ false }
          />
        </div>

        <div>
          {
            favoriteQuotes.map((phrase, index) => {
              return <div>
                <Quote
                  key={ index }
                  quote={ phrase }
                  saveFavoriteQuotes= { this.saveFavoriteQuotes }
                  isFavorite={ true }
                />
              </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
