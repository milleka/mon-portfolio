import React from 'react';
import { NavLink } from 'react-router-dom'
import 'animate.css'

const Header = () => {
    return (
            <header className='App-header'>
                <div>
                    <NavLink to="/" exact className="link" activeClassName='active'><i  className="fas fa-home" title="page d'accueil"></i><p>Accueil</p></NavLink>
                </div>
                <div className="logo">
                    <img className="animate__animated animate__heartBeat" src="img/logo.png" alt="mon logo" title="dev web"/>
                </div>
                <div>
                    <NavLink to="/contact" exact className="link" activeClassName='active'><i className="fas fa-phone-square-alt" title="Mon contact"></i><p>Contact</p></NavLink>
                </div>
            </header>
    );
};

export default Header;