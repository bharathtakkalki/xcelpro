import React, { useState } from 'react';
import Login from '../components/login/Login';
import SignUp from '../components/signUp/SignUp';
import Carousel from '../components/carousel/Carousel';

const LandingPage = () => {
	const [ showSignUp, setShowSignUp ] = useState(true);
	return (
		<div className="landing-page">
			<div className="content">
				<Carousel />
			</div>
			<div className="content center">
				{!showSignUp ? <Login setShowSignUp={setShowSignUp}/> : <SignUp setShowSignUp={setShowSignUp}/>}
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

export default LandingPage;
