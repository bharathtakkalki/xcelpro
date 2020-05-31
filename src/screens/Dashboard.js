import React, { useEffect, useState } from 'react';
import Header from '../components/common/Header';
import LeftNavBar from '../components/common/LeftNavBar';
import axios from '../helpers/axiosConfig';
import Card from '../components/cards/Card';
import { connect } from 'react-redux';


const Dashboard = (props) => {
	const [userList, setUserList] = useState([])
	useEffect(() => {
		axios.get(`/user/${props.uuid}`, { headers: { Authorization: "Bearer " + props.accessToken } })
			.then(result => {
				props.updateUser(result.data)
			})
			.catch(err => {
				console.log(err)
			})
		axios.get('/user', { headers: { Authorization: "Bearer " + props.accessToken } })
			.then(result => {
				setUserList(result.data)
				setLogoutTime()
			})
			.catch(err => {
				console.log(err)
			})

	}, [])
	
	const setLogoutTime = () =>{

		setTimeout(() => {
			console.log('Logging out Now...')
			axios.get('/user/logout', { headers: { Authorization: "Bearer " + props.accessToken } })
			.then(result => {
				if(result.status === 200){
					console.log(result.data)
					props.updateAccessToken()
				}
			})
			.catch(err =>{
				console.log(err.response)
			})
		}, 60 * 1000);
	}

	if (!props.accessToken) {
		props.history.push('/')
	}
	return (
		<div className="dashboard">
			<LeftNavBar />
			<div className="right-container">
				<Header />
				<div className="user-card-container">
					{userList.map((user, index) => (
						<Card key={index} name={`${user.firstName} ${user.lastName ? user.lastName : ""}`} imgUrl={user.imgUrl} email={user.email} phone={user.phoneNo} onlineStatus={user.onlineStatus} />
					))}
				</div>
			</div>
		</div>
	);
};


const mapStateToProps = state => {
	return {
		user: state.user,
		accessToken: state.accessToken,
		uuid: state.uuid,
	}
}

const mapDipatchToProps = dispatch => {
	return {
		updateAccessToken: () => dispatch({ type: 'UPDATE_ACCESS_TOKEN', accessToken: "" }),
		updateUser: (user) => dispatch({ type: 'UPDATE_USER', user: user }),
		updateUuid: (uuid) => dispatch({ type: 'UPDATE_UUID', uuid: uuid })
	}
}

export default connect(mapStateToProps, mapDipatchToProps)(Dashboard);
