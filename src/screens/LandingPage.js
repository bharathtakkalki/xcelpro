import React from 'react';
import Login from '../components/login/Login';




const LandingPage = () => {
    return(
        <div style={{padding:25}}>
            <Login/>
            <p className="footer-container">By joining,you agree to the <a className="footer-link" href="/">Terms </a>and<a className="footer-link" href='/'> Privacy Policy</a></p>
        </div>
    )
}

export default LandingPage;