import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Users from "../components/Users";
import StrictAccess from "../components/StrictAccess";

export default class Routes extends React.Component {
	render() {
		return (
			<div>
				<Switch>
					<Route
						path="/users/:id"
						render={(props) => (
							<Users {...props} greetingsMessage="Good Morning" />
						)}
					/>

					<Route
						path="/strict-access"
						render={(props) => <StrictAccess {...props} user={this.props} />}
					/>

					<Route path="/about" component={About} />

					<Route exact path="/" component={Home} />
				</Switch>
			</div>
		);
	}
}
