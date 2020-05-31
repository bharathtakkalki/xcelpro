import React from 'react';
import Avatar from './Avatar';
import {connect} from 'react-redux'; 


const Header = (props) => {
    return(
        <header className="header">
            <h1 className="header-heading">Dashboard</h1>
            <Avatar src={props.user.imgUrl} small className="header-avatar"/>
        </header>
    )
}

const mapStateToProps = state =>{
	return{
		user:state.user,
	}
}



export default connect(mapStateToProps)(Header);