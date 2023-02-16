import React from "react";
import JuiceCard from "./components/JuiceCard";
import juices from './Data';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      juiceFilter: '',
      theme: 'light' // arrumei o teste da aula
    }
  }

  handleChange = ({target: { value }}) => {
    this.setState({
      juiceFilter: value.toLowerCase()
    });
    this.setState((prevState) => ({
      theme: (prevState.theme === 'dark' ? 'light' : 'dark') }))
  }

  render() {
    const { juiceFilter, theme } = this.state
    console.log(theme);
    return (
      <>
        <h1>🧃🧋🍹 Escolha seu suco: 🧃🧋🍹</h1>

        <input type="text" onChange={this.handleChange} />

        <ul>
          {juices
            .filter(({ suco }) => suco.toLowerCase().includes(juiceFilter))
            .map((objJuice) => (
            <JuiceCard key={objJuice.name} juice={ objJuice } />
          ))}
        </ul>
      </>
    );
  }
}
