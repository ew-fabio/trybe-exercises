import React from 'react';
import './App.css';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import Header from './components/Header';
import Form from './components/Form';
import RegisteredCards from './components/RegisteredCards';

class App extends React.Component {

  state = {
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
    disabled: true,
    registeredCards: []
  };

  validationFields = () => {
    const { cvc, expiry, name } = this.state

    const validateCVC = cvc.length === 3
    const validateDate = expiry.length === 4
    const validateName = /^[A-Z][a-z]*(\s[A-Z][a-z]*)+$/i.test(name)

    console.log(validateName, validateCVC, validateDate)

    this.setState({
      disabled: !(validateName && validateCVC && validateDate)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const card = this.state
    this.setState((prevState) => ({
      registeredCards: [...prevState.registeredCards, card]
    }))
  }

  handleInputFocus = ({ target: { name } }) => {
    this.setState({ focus: name });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    }, this.validationFields)
  }

  render() {
    const {
      cvc,
      expiry,
      focus,
      name,
      number,
      registeredCards
    } = this.state

    return (
      <>
        <Header />
        <section className="main-section">
          <main className="App">
            <Cards
              cvc={cvc}
              expiry={expiry}
              focused={focus}
              name={name}
              number={number}
            />

            <Form
              handleChange={this.handleChange}
              handleInputFocus={this.handleInputFocus}
              handleSubmit={this.handleSubmit}
              {...this.state}
            />
          </main>
          <div className="list-cards">
            <RegisteredCards
              registeredCards={registeredCards}
            />
          </div>
        </section>
      </>
    );
  }
}

export default App;
