import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const Login = ({ setShowSignUp }) => {
	return (
		<div className="landingPage-form-container">
			<h1 className="heading">Login</h1>
			<p className="sub-heading">
				Don't have an account?<label className="switch-link" onClick={()=>setShowSignUp(true)}> Sign up</label>
			</p>
			<Button facebook onClick={()=>{window.alert('Facebook Authentication flow')}}>Login via facebook</Button>
			<Input formField="Email address" happy={true} type="email" placeholder="Enter your Email" />
			<Input formField="Password" happy={true} type="password" placeholder="Enter your Password" />
			<Button primary>Login our community</Button>
		</div>
	);
};

export default Login;
