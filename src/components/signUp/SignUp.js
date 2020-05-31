import React, { useState,useEffect } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';
import { emailValidator, fieldNotEmpty, passwordValidator } from '../../helpers/helpers';

const SignUp = ({ setShowSignUp, onClickSubmit,error }) => {
	const [firstName, setFirstName] = useState('');
	const [firstNameHappy, setFirstNameHappy] = useState({ happy: true, error: '' });
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [emailHappy, setEmailHappy] = useState({ happy: true, error: '' });
	const [password, setPassword] = useState('');
	const [passwordHappy, setPasswordHappy] = useState({ happy: true, error: '' });

	useEffect(() => {
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
		if (!fieldNotEmpty(firstName)) {
			setFirstNameHappy({
				happy: false,
				error: "FirstName cannot be empty"
			})
			isFormValid = false

		} else {
			setFirstNameHappy({
				happy: true,
				error: ""
			})
		}
		if (!passwordValidator(password)) {
			setPasswordHappy({
				happy: false,
				error: "Password need to be min length 5 & alphanumeric"
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
				firstName: firstName,
				lastName: lastName,
				email: email,
				password: password
			}
			onClickSubmit(data)
		}

	}


	return (
		<div className="landingPage-form-container">
			<h1 className="heading">Sign-Up</h1>
			<p className="sub-heading">
				Already have an account?<label className="switch-link" onClick={() => setShowSignUp(false)}> Login</label>
			</p>
			<Button facebook onClick={() => { window.alert('Facebook Authentication flow') }}>Join via facebook</Button>
			<form className="form">

				<div className="name-field-container">
					<Input formField="First Name" happy={firstNameHappy.happy} error={firstNameHappy.error} type="text" placeholder="First Name" value={firstName} onChange={setFirstName} />
					<Input style={{ marginLeft: 8 }} formField="Last Name" happy={true} type="text" placeholder="Last Name" value={lastName} onChange={setLastName} />
				</div>
				<Input formField="Email address" happy={emailHappy.happy} error={emailHappy.error} type="email" placeholder="Enter your Email" value={email} onChange={setEmail} />
				<Input formField="Password" happy={passwordHappy.happy} error={passwordHappy.error} type="password" placeholder="Enter your Password" value={password} onChange={setPassword} />
			</form>
			<Button primary onClick={checkAllData}>Join our community</Button>
		</div>
	);
};

export default SignUp;