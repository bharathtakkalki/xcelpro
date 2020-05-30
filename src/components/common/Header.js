import React from 'react';
import Avatar from './Avatar';

const Header = () => {
    return(
        <header className="header">
            <h1 className="header-heading">Dashboard</h1>
            <Avatar small className="header-avatar"/>
        </header>
    )
}

export default Header;