import React from 'react';

const CompetencesInfo = () => {
    return (
        <div className="information">
            <h4>Framework/librairies/logiciels utilisés</h4>
                <div className="party">
                    <i className="fab fa-wordpress wp"><p>Wordpress</p></i>
                    <i className="fab fa-react react"><p>ReactJs</p></i>
                    <i className="fab fa-symfony"><p>Symfony</p></i>
                    <i className="fab fa-html5 html"><p>Html5</p></i>
                </div>
                <div className="party">
                    <i className="fab fa-css3-alt css"><p>Css3</p></i>
                    <i className="fab fa-git-alt git"><p>Git</p></i>
                    <i className="fab fa-sass sass"><p>Sass</p></i>
                    <i className="fab fa-bootstrap bt"><p>Bootstrap</p></i>
                </div>
            <h4>Langages Appris</h4>
                <div className="party">
                    <i className="fab fa-angular angu"><p>Angular</p></i>
                    <i className="fab fa-laravel lrv"><p>Laravel</p></i>
                    <i className="fab fa-node-js node"><p>Nodejs</p></i>
                </div>
            <h4>Compétences générales</h4>
                <div className="party">
                    <i className="fas fa-users"><p>Travail en équipe</p></i>
                    <i className="fas fa-power-off"><p>Veille techno</p></i>
                    <i className="far fa-question-circle"><p>Curiosité</p></i>
                    <i className="far fa-lightbulb"><p>Passionné</p></i>
                </div>
            <h4>Certifications obtenues</h4>
                <div className="party">
                    <i className="fab fa-docker dock"><p>Docker</p></i>
                    <div className="opquast">
                        <img src="img/badge-opquast.png" alt="mon logo" title="Accueil" className="adapt"/>
                        <p>Opquast</p>
                    </div>
                    <i className="fas fa-spinner agile"><p>Méthode agile</p></i>
                </div>
        </div>
    );
};

export default CompetencesInfo;