import React from "react";

const Dashboard = (props) => {
	return (
		<>
			<h1>Dashboard</h1>
			<h3>{`welcome ${props.location.state.state.fullName}`}</h3>
		</>
	);
};

export default Dashboard;
