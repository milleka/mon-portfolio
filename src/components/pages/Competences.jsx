import React, {useEffect} from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { NavLink } from 'react-router-dom';

import AOS from 'aos'
import 'aos/dist/aos.css'

const Competences = ({title}) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })

    AOS.init ({
        duration: 2000,
    })  

    return (
        <>
        <Header/>
        <main className='App-main compet'>
            <h2 className="subtitle">{title}</h2>
            <NavLink to="/contact" exact className="lien">Ecrivez-moi !</NavLink>
            <div className="competences un">
                <div className="information left" data-aos="fade-right">
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
                </div>
                <div className="text" data-aos="flip-up">
                    <p>
                        J'ai pu travailler sur certain projet avec des langages comme ReactJs,
                        symfony mais aussi sur des CMS comme wordpress. Lors de la création des applications,
                        j'ai également utilisé des langages css comme sass. Ces applications ont été géré avec
                        des logiciels de gestion de versions (github, gitlab, bitbucket). Lors de mes
                        différentes formations et stages, j'ai pu prendre en main ces 3 logiciels qui utilise
                        git. Pour finir j'ai pu utiliser les fonctionnalités de bootstrap pour faciliter
                        et accélérer mon travail sur certains points.
                    </p>
                </div>
            </div>
            <div className="competences deux">
                <div className="information right" id="none" data-aos="fade-left">
                    <h4>Langages Appris</h4>
                    <div className="party">
                        <i className="fab fa-angular angu"><p>Angular</p></i>
                        <i className="fab fa-laravel lrv"><p>Laravel</p></i>
                        <i className="fab fa-node-js node"><p>Nodejs</p></i>
                    </div>
                </div>
                <div className="text" data-aos="flip-up">
                    <p>
                        Lors de ma formation à Simplon j'ai pu réaliser un projet pour un photographe
                        sous laravel et un bundle admin (Voyageur). Pendant ma période à 3il, j'ai pu
                        travailler et apprendre Angular et Nodejs.
                    </p>
                </div>
                <div className="information right" id="none2" data-aos="fade-left" >
                    <h4>Langages Appris</h4>
                    <div className="party">
                        <i className="fab fa-angular angu"><p>Angular</p></i>
                        <i className="fab fa-laravel lrv"><p>Laravel</p></i>
                        <i className="fab fa-node-js node"><p>Nodejs</p></i>
                    </div>
                </div>
            </div>
            <div className="competences trois">
                <div className="information left" data-aos="fade-right">
                    <h4>Compétences générales</h4>
                    <div className="party">
                        <i className="fas fa-users"><p>Travail en équipe</p></i>
                        <i className="fas fa-power-off"><p>Veille techno</p></i>
                        <i className="far fa-question-circle"><p>Curiosité</p></i>
                        <i className="far fa-lightbulb"><p>Passionné</p></i>
                    </div>
                </div>
                <div className="text" data-aos="flip-up">
                    <p>
                        Pendant ma période de vendeur, j'ai pris l'habitude de travailler en équipe, 
                        et de partager mon savoir-faire, de proposer des idées et être force de proposition.
                        J'ai continué ainsi pendant ma réorientation, pour moi le travail de développeur web
                        se fait en équipe, et la réalisation d'un projet web, se réalise grâce à plusieurs
                        acteurs (designer, développeur back, développeur front, ...) et c'est en 
                        communiquant qu'un projet peut se dérouler correctement.<br/>
                        Pour moi un développeur ne peut pas maitriser un langage à 100%, il connait
                        le code et comprend sa logique. La raison, un langage ne reste pas fixe, et évolue
                        avec son temps au travers de ses différentes mise à jour, c'est pourquoi il est
                        important de continuer à apprendre et se renseigner grâce au différentes veille
                        technologique. Ce métier me passionne. Plus j'en connais, et plus je suis curieux
                        d'en apprendre encore.
                    </p>
                </div>
            </div>
            <div className="competences quatre">
                <div className="information right" id="none" data-aos="fade-left">
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
                <div className="text" data-aos="flip-up">
                    <p>
                        Pendant ma formation avec simplon, j'ai passé deux certifications, dont une avec un jury,
                        qui m'ont permis d'obtenir la certification Opquast (780pts niveau Confirmé) et Agile qui
                        officialise ma compétence à utiliser les méthodes agile et scrum en particulier. 
                        Grâce à des cours sur udemy, j'ai pu acquérir des compétences sur <a href="https://www.udemy.com/certificate/UC-2b9d8cfc-7aa4-408f-bae8-9f6c971de620/" target="_blank" rel="noopener noreferrer">Docker </a> 
                        et <a href="https://www.udemy.com/certificate/UC-48a92cce-825b-4128-a3af-4dc80a9dd67c/" target="_blank" rel="noopener noreferrer">ReactJs</a>. 
                    </p>
                </div>
                <div className="information right" id="none2" data-aos="fade-left">
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
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Competences;