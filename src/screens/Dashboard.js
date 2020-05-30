import React, { Fragment } from 'react';
import Header from '../components/common/Header';
import LeftNavBar from '../components/common/LeftNavBar';
import Card from '../components/cards/Card';

const Dashboard = () => {
	return (
		<div className="dashboard">
			<LeftNavBar />
			<div className="right-container">
				<Header />
				<div className="user-card-container">
                    {Array(10).fill().map(index => (
                        <Fragment>
					        <Card name="Bharath Takkalki" email="bharath@gmail.com" phone="9731768041" />
					        <Card name="Bharath Takkalki" email="bharath@gmail.com" phone="9731768041" />
                        </Fragment>
                    ))}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
