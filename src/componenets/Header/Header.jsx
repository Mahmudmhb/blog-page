import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav className='header-container'>
            <h2>Programing blog</h2>
            <div className="anhor">
                <a href="/Home">Home</a>
                <a href="About">About</a>
                <a href="Blogs">Blogs</a>
                <a href="Login">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;