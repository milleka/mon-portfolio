import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='App-header'>
            <img src="img/logo.png" alt="mon logo"/>
            <h1>Bonjour et bienvenue sur mon portfolio</h1>
            <div>
            <NavLink to="/contact"><i className="fas fa-phone-square-alt"></i></NavLink>
            <a href="https://github.com/milleka" target='_blank' rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/camille-chassaing-66a481180/" target='_blank' rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </header>
    );
};

export default Header;