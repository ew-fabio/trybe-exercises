import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super()
    this.state = {
      joke: '',
    }

    this.fetchJoke = this.fetchJoke.bind(this)
  }

  componentDidMount() {
    this.fetchJoke()
  }

  fetchJoke() {
    const URL = 'https://icanhazdadjoke.com/'
    const HEADER = { headers : { Accept: 'application/json' } }
    fetch(URL, HEADER)
      .then((response) => response.json())
      .then(({ joke }) =>
        this.setState({
          joke
        }))
  }

	render() {
    const { joke } = this.state

		return (
			<div className="App">
        <h3>{ joke }</h3>
        <button
          onClick={ this.fetchJoke }
        >
          Another Joke
        </button>
			</div>
		);
	}
}

export default App;
