import React, { useState } from 'react';
import Login from '../components/login/Login';
import SignUp from '../components/signUp/SignUp';
import Carousel from '../components/carousel/Carousel';
import axios from '../helpers/axiosConfig';
import {connect} from 'react-redux'; 

const LandingPage = (props) => {
	const [ showSignUp, setShowSignUp ] = useState(true);
	const [loginError, setLoginError] = useState('');
	const [signError, setSignError] = useState('')

	const callLoginApi = (loginData) =>{
		axios.post('/user/login',loginData)
		.then(result =>{
			if(result.status === 200){
				props.updateAccessToken(result.headers.authorization)
				props.updateUuid(result.data.uuid)
				props.history.push('/dashboard')
			}
		})
		.catch(err => {
			console.log(err.response)
			if(err.response.data.errorCode === "ATH-002" ){
				setLoginError({
					type:"PASSWORD",
					message:err.response.data.message
				})
			}
			if(err.response.data.errorCode === "ATH-001"){
				setLoginError({
					type:"EMAIL",
					message:err.response.data.message
				})
			}
		})
	}
	const callSignUpApi = (signUpData) => {
		axios.post('/user/register',signUpData)
		.then(result => {
			if(result.status === 201){
				setShowSignUp(false)
			}
		})
		.catch(err => {
			console.log(err.response)
			if(err.response.data[0].msg.errorCode === "SGN-004" ){
				setSignError({
					type:"EMAIL",
					message:err.response.data[0].msg.message
				})
			}
		})
	}

	return (
		<div className="landing-page">
			<div className="content">
				<Carousel />
			</div>
			<div className="content center">
				{!showSignUp ? <Login error={loginError} setShowSignUp={setShowSignUp} onClickSubmit={callLoginApi}/> : <SignUp error={signError} setShowSignUp={setShowSignUp} onClickSubmit={callSignUpApi}/>}
				<p className="footer-container">
					By joining,you agree to the{' '}
					<a className="footer-link" href="/">
						Terms{' '}
					</a>and<a className="footer-link" href="/">
						{' '}
						Privacy Policy
					</a>
				</p>
			</div>
		</div>
	);
};

const mapStateToProps = state =>{
	return{
		user:state.user,
	}
}

const mapDipatchToProps = dispatch => {
	return{
		updateAccessToken:(accessToken)=>dispatch({type:'UPDATE_ACCESS_TOKEN',accessToken:accessToken}),
		updateUuid:(uuid)=>dispatch({type:'UPDATE_UUID',uuid:uuid})
	}
}


export default connect(mapStateToProps,mapDipatchToProps)(LandingPage);
