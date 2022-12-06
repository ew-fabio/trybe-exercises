import React from "react";
import JuiceCard from "./components/JuiceCard";
import juices from './Data';

export default class App extends React.Component {
  render() {
    console.log(juices);
    return (
      <>
        <h1>🧃🧋🍹 Escolha seu suco: 🧃🧋🍹</h1>

        <ul>
          {juices.map((objJuice) => (
            <JuiceCard key={objJuice.name} juice={ objJuice } />
          ))}
        </ul>
      </>
    );
  }
}
