import React from "react";

import { Route, Switch } from "react-router";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Signup from "./components/signup";

const App = () => {
	return (
		<Switch>
			<Route exact path='/' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path='/dashboard' component={Dashboard} />
		</Switch>
	);
};

export default App;
