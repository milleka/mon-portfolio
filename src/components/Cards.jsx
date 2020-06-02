import React from 'react';
import { NavLink } from 'react-router-dom';

const Cards = ({title, src}) => {

    const Onclick = () => {
        var link = title;

        switch(link) {
            case 'Compétences':
                return "/competences";
            case 'Expériences':
                return "/experiences";
            case 'Formations':
                return "/formations";
            case 'Loisirs':
                return "/loisirs";
            default:
                console.log(`erreur de contenu ${link}`);
                break;
        }
    }

    return (
        <div className="block">
            <div className="cards">
                <div className="card-front">
                    <img src={src} alt="mon logo" title="Accueil" className="adapt"/>
                    <h2>{title}</h2>
                </div>
                <div className="card-back">
                    <p>test</p>
                    <NavLink to={Onclick} exact>En savoir plus</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Cards;