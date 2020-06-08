import React, {useEffect} from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Experiences = ({title}) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })

    return (
        <>
        <Header/>
        <main className='App-main expert'>
            <h2 className="subtitle">{title}</h2>
            <div className="experience">
                <div className="party">
                    <img src="img/logo-dynaidev.png" alt="dynaidev agence web"/>
                    <p className="bold">Dynaidev</p>
                    <p>Agence de développement web</p>
                </div>
                <div className="text">
                    <p className="bold">1 an d'alternance - 2019/2020</p>
                    <p> 
                        Dynaidev est une agence de développement web et web mobile basée dans la creuse
                    </p>
                    <p>
                        Pendant cette période, l'entreprise m'a intégrée parfaitement dans les choix et 
                        questionnement pour la réalisation des applications web. J'ai pu en un an, travailler 
                        sur de nombreuses tâches qui m'ont permis de progresser en tant que développeur web. 
                        J'ai travaillé sur de nombreux langages/logiciels (Symfony, ReactJs, wordpress, easyadmin,
                        sylius, git, bitbucket), Ces application ont été réalisées avec la méthode agile (scrum),
                        mais aussi avec la méthode kanban. 
                    </p>
                    <p>
                        J'ai pu gérer une équipe de 5 personnes lors de la refonte de l'application web de 
                        l'entreprise. Cette refonte a été faite en ReactJs et peut être utilisée en Progressive Web
                        App. Vous pouvez retrouver le site ici :  
                        <a href="https://dynaidev.net/" target="_blank" rel="noopener noreferrer">Dynaidev</a>
                    </p>
                </div>
            </div>
            <div className="experience">
                <div className="party">
                    <img className="xp" src="img/unova.png" alt="unova agence web"/>
                    <p className="bold">Unova</p>
                    <p>Agence de développement web</p>
                </div>
                <div className="text">
                    <p className="bold">Stage de 1 mois - 2019</p>
                    <p> 
                        Unova est une agence développement web créée en 2016. Ella a acceptée de m'accueillir pendant 1 mois lors de ma formation avec simplon.
                    </p>
                    <p>
                        Pendant cette période, l'entreprise m'a confié la tâche de réaliser un prototype pour un 
                        de leurs client. Ce travail a été fait sur Reactjs, le framework de javascript. C'est un
                        langage, que je ne connaissais pas avant cette période. Mais, par envie d’apprendre, 
                        j'ai relevé le défi. Le prototype a pu être livré au client après mon départ.
                    </p>
                </div>
            </div>
            <div className="experience">
                <div className="party">
                    <i className="fas fa-store xp"></i>
                    <p className="bold">Employé libre-services</p>
                </div>
                <div className="text">
                    <p className="bold">5 années de 2013 à 2018</p>
                    <p>
                        J'ai travaillé 5 ans dans 2 entreprises de la décoration, cette période m'a permis de 
                        prendre en confiance. J'ai pu acquérir des compétences tel que le travail en équipe, 
                        l'adaptation, l'autonomie, la polyvalence. Des plus que je pense être utile dans le métier
                        de développeur web.
                    </p>
                    <p>
                        Pendant cette période j'ai pris connaissance du métier de développeur web en discutant 
                        avec des responsables de magasin, de la famille. J'ai décidé de m'entrainer en autonomie 
                        sur openclassroom. C’est un travail qui m'a plus directement. J'ai donc décidé après avoir
                        déménagé à Limoges, de me réorienter en tant que développeur web. 
                    </p>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Experiences;