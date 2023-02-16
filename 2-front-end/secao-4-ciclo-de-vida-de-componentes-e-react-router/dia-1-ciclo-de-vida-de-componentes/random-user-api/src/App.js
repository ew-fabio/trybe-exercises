import React from 'react';
import './App.css';
import Card from './components/Card';

class App extends React.Component {
  state = {
    randomUser: undefined,
    loading: true,
    // errorMSG: false
  }

  fetchRandomUser = async () => {
    const ENDPOINT = 'https://api.randomuser.me/'

    const request = await fetch(ENDPOINT)
    const data = await request.json()

    // console.log(data.results[0]);
    this.setState({
      loading: false,
      randomUser: data.results[0],
    })
  }

  componentDidMount() {
    this.fetchRandomUser()
  }

  shouldComponentUpdate(_props, nState) {
    if(nState.randomUser.dob.age > 50) {
      return false;
    }
    return true;
  }

  updateUser = () => {
    this.setState({
      loading: true
    })
    this.fetchRandomUser()
  }

  render() {
    const { randomUser, loading } = this.state

    const loadingElement = <h2>Carregando...</h2>

    return (
      <div className="App">
        {
          loading ? loadingElement : (
            <Card userData={randomUser} />
          )
        }

        {/* {
          !randomUser ? loadingElement : (
            <Card userData={randomUser} />
          )
        } */}

        <button onClick={this.updateUser}>Update User</button>

      </div>
    );
  }
}

export default App;
