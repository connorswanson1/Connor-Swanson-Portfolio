import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={{ backgroundColor: '#333', color: 'white', padding: '10px 0', textAlign: 'center' }}>
            <h1>Connor Swanson: Portfolio</h1>
            <nav>
                <Link to="/" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Home</Link>
                <Link to="/about" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>About</Link>
                <Link to="/projects" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Projects</Link>
                <Link to="/contact" style={{ margin: '0 10px', color: 'white', textDecoration: 'none' }}>Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
