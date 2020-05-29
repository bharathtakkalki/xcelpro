import React from 'react';
import Login from '../components/login/Login';
import SignUp from '../components/signUp/SignUp';




const LandingPage = () => {
    return(
        <div style={{padding:25}}>
            <Login/>
            <p className="footer-container">By joining,you agree to the <a className="footer-link" href="/">Terms </a>and<a className="footer-link" href='/'> Privacy Policy</a></p>
            <SignUp/>
        </div>
    )
}

export default LandingPage;