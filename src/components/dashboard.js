import React from "react";

const Dashboard = (props) => {
	return (
		<div className='App'>
			<h1>Dashboard</h1>
			<h3>{`welcome ${props.location.state.state.fullName}`}</h3>
		</div>
	);
};

export default Dashboard;
