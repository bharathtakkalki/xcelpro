import React from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const SignUp = ({ ...props }) => {
	return (
		<div className="landingPage-form-container">
			<h1 className="heading">Sign-Up</h1>
			<p className="sub-heading">
            Already have an account?<label className="switch-link"> Login</label>
			</p>
			<Button facebook>Join via facebook</Button>
            <div className="name-field-container">
                <Input formField="First Name" happy={true} type="text" placeholder="First Name"/>
                <Input style={{marginLeft:8}} formField="Last Name" happy={true} type="text" placeholder="Last Name"/>
            </div>
			<Input formField="Email address" happy={true} type="email" placeholder="Enter your Email" />
			<Input formField="Password" happy={true} type="password" placeholder="Enter your Password" />
			<Button primary>Join our community</Button>
		</div>
	);
};

export default SignUp;