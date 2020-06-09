import React, {useEffect} from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

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
            <div className="competences un">
                <div className="information left" data-aos="fade-right">
                    <h4>Langages/logiciels utilisés</h4>
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
                        symfony mais aussi sur des CMS comme wordpress. Lors de la création 
                        des applications, j'ai également utilisé des langages css comme sass. 
                        Ces applications ont été géré avec des logiciels de gestion de versions 
                        (github, gitlab, bitbucket). Lors de mes différentes formations et stages,
                        j'ai pu prendre en main ces 3 logiciels qui utilise git. Pour finir j'ai
                        pu utiliser les fonctionnalités de bootstrap pour faciliter et accélérer
                        mon travail sur certain point des applications.
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
                        sous laravel et en utilisant un bundle admin qui s'appelle voyageur. 
                        Lors de ma période à 3il, j'ai pu travailler et apprendre, angular et Nodejs,
                        avec des exercices et des projets fictifs.
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
                        Le travail de développeur web se fait en équipe, et la réalisation d'un projet web, se réalise grâce à plusieurs
                        acteurs (designer, développeur back, développeur front, ...) et c'est en communiquant 
                        qu'un projet peut bien se dérouler. J’ai souvent travaillé sous la méthode agile scrum.<br/>
                        Pour moi un développeur ne peut pas maitriser un langage à 100%, il connait le code et comprend sa logique.
                        La raison, un langage ne reste pas fixe, et évolue avec son temps au travers de ses différentes mise à
                        jour, c'est pourquoi il est important de continuer à apprendre et faire ces propres recherches. 
                        Ce métier me passionne, je les découverts en apprenant en autonomie sur openclassroom et udemy. Plus j'en connais, et plus je suis curieux d'en 
                        apprendre encore.
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
                        Grâce aux cours sur udemy, j'ai pu acquérir des compétences sur docker, reactjs ou 
                        récemment Python. Pendant ma formation avec simplon, J'ai passé deux certifications, 
                        dont une avec un jury, qui m'ont permis d'obtenir la certification Opquast 
                        (780pts niveau Confirmé) et Agile qui officialise ma compétence à utiliser les méthodes 
                        agile, scrum en particulier.
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