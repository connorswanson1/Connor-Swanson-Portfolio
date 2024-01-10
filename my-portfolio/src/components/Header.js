// Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <header className="nav-bar">
            <div className="title-and-icons">
                <h1>Connor Swanson</h1>
                <div className="social-links">
                    {/* LinkedIn Icon */}
                    <a href="https://www.linkedin.com/in/connorswanson" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    {/* GitHub Icon */}
                    <a href="https://github.com/connorswanson1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <ul className="nav-links">
                <li><NavLink to="/" exact>Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </header>
    );
}

export default Header;
