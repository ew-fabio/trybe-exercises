import "./App.css";
import React from "react";
import { connect } from "react-redux";
import { actionCreator } from "./redux/actions";

class App extends React.Component {
	render() {
		const { countClicks, countState, dispatch } = this.props;

    // const dispatchAll = (add = 1) => {
    //   dispatch(actionCreator(add));
    //   dispatch(clickCounter());
    // };

		return (
			<div className="App">
				<h1>Contador</h1>
				<h2>{countState}</h2>
				<button onClick={() => dispatch(actionCreator())}>Incrementar 1</button>
				<button onClick={() => dispatch(actionCreator(5))}>Incrementar 5</button>
        <span>{`Número de cliques: ${ countClicks }`}</span>
			</div>
		);
	}
}

const mapStateToProps = ({ counterReducer: { count, clicks } }) => ({
	countState: count,
  countClicks: clicks
});

export default connect(mapStateToProps)(App);
