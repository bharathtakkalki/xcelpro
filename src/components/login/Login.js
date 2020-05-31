import React, { useState, useEffect } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { emailValidator, fieldNotEmpty, } from '../../helpers/helpers';


const Login = ({ setShowSignUp, onClickSubmit, error }) => {
	const [email, setEmail] = useState('');
	const [emailHappy, setEmailHappy] = useState({ happy: true, error: '' });
	const [password, setPassword] = useState('');
	const [passwordHappy, setPasswordHappy] = useState({ happy: true, error: '' });

	useEffect(() => {
		if (error.type === "PASSWORD") {
			setPasswordHappy({
				happy: false,
				error: error.message
			})
		}
		if (error.type === "EMAIL") {
			setEmailHappy({
				happy: false,
				error: error.message
			})
		}

	}, [error])

	const checkAllData = () => {
		let isFormValid = true
		if (!emailValidator(email)) {
			setEmailHappy({
				happy: false,
				error: "Enter valid EmailId"
			})
			isFormValid = false
		} else {
			setEmailHappy({
				happy: true,
				error: ""
			})
		}
		if (!fieldNotEmpty(password)) {
			setPasswordHappy({
				happy: false,
				error: "Password cannot be empty"
			})
			isFormValid = false

		} else {
			setPasswordHappy({
				happy: true,
				error: ""
			})
		}
		if (isFormValid) {
			let data = {
				email: email,
				password: password
			}
			onClickSubmit(data)
		}

	}


	return (
		<div className="landingPage-form-container">
			<h1 className="heading">Login</h1>
			<p className="sub-heading">
				Don't have an account?<label className="switch-link" onClick={() => setShowSignUp(true)}> Sign up</label>
			</p>
			<Button facebook onClick={() => { window.alert('Facebook Authentication flow') }}>Login via facebook</Button>
			<form className="form">
				<Input formField="Email address" happy={emailHappy.happy} error={emailHappy.error} type="email" placeholder="Enter your Email" value={email} onChange={setEmail} />
				<Input formField="Password" happy={passwordHappy.happy} type="password" error={passwordHappy.error} placeholder="Enter your Password" value={password} onChange={setPassword} />
			</form>
			<Button primary onClick={checkAllData}>Login our community</Button>
		</div>
	);
};

export default Login;
