import React from "react";

const Dashboard = (props) => {
	return <div>{`welcome ${props.location.state.state.fullName}`}</div>;
};

export default Dashboard;
