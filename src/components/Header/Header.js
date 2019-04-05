import React from 'react';
import './Header.css';

const Header = ({ user }) => {
    const { name, profile_pic, status } = user;
    return (
        <header className='Header'>
            <img src={ profile_pic } alt=""/>
            <div className="Header__profileInfo">
                <h1 className='Header__name'> {name} </h1>
                <p className="Header__status">
                    {status}
                </p>
            </div>
        </header>
    )
}

export default Header;