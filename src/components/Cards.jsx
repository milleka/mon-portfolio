import React from 'react';
import { NavLink } from 'react-router-dom';

import CompetencesInfo from './informations/CompetencesInfo'
import ExperiencesInfo from './informations/ExperiencesInfo'
import FormationsInfo from './informations/FormationsInfo'
import LoisirsInfo from './informations/LoisirsInfo'

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
                return null;
        }
    }

    const Display = () => {
        var display = title;

        switch(display) {
            case 'Compétences':
                return <CompetencesInfo/>;
            case 'Expériences':
                return <ExperiencesInfo />;
            case 'Formations':
                return <FormationsInfo />;
            case 'Loisirs':
                return <LoisirsInfo />;
            default:
                return null;
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
                    {Display()}
                    <NavLink to={Onclick} exact className="link">En savoir plus</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Cards;