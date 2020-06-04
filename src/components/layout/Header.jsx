import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
            <header className='App-header'>
                <NavLink to="/" exact className="link"><img src="img/logo.png" alt="mon logo" title="Accueil"/></NavLink>
                <h1>Mon portfolio</h1>
                <div>
                <NavLink to="/" exact className="link" activeClassName='active'><i  className="fas fa-home" title="page d'accueil"></i></NavLink>
                <NavLink to="/contact" exact className="link" activeClassName='active'><i className="fas fa-phone-square-alt" title="Mon contact"></i></NavLink>
                </div>
            </header>
    );
};

export default Header;