import React, {useEffect} from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import { NavLink } from 'react-router-dom';

const Formations = ({title}) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })

    return (
        <>
        <Header/>
        <main className='App-main formation'>
            <h2 className="subtitle">{title}</h2>
            <NavLink to="/contact" exact className="lien">Ecrivez-moi !</NavLink>
            <div className="etude">
                <div className="party">
                <img src="img/3il.png" alt="école d'ingénieur"/>
                </div>
                <div className="info">
                    <p className="bold">Limoges - 2019/2020</p>
                    <div className="element">
                        <div className="image">
                            <img src="img/batiment_3il.jpg" alt="école d'ingénieur"/>
                        </div>
                        <div className="text">
                            <p> 
                                3iL est une école d'ingénieur qui m'a permis d'obtenir un bachelor informatique ( bac+3).
                            </p>
                            <p>
                                Pendant cette période de 1 an, la formation m'a permis de progresser dans le développement web 
                                mais aussi dans le domaine du réseau informatique.
                            </p>
                            <p>
                                J'ai pu grâce à de nombreux cours, d’apprendre sur le fonctionnement d'un framework php 
                                (réalisation d'un framework from scratch), nodeJs, Angular, git, et le fonctionnement des bdd sous Oracle.
                            </p>
                            <p>
                                Dans le réseau informatique, j'ai pu travailler sur les systèmes de sécurités, l'hébergement web,
                                les systèmes d'informations et la gestion des postes clients.
                            </p>
                           
                        </div>
                    </div>
                </div>
            </div>
            <div className="etude">
                <div className="party">
                    <img src="img/simplon.png" alt="Simplon formation développement web"/>
                </div>
                <div className="info">
                    <p className="bold">St Léonard de Noblat - 2019</p>
                    <div className="element">
                        <div className="image">
                            <img src="img/lescalier.jpg" alt="école d'ingénieur"/>
                        </div>
                        <div className="text">
                            <p> 
                                Simplon est un réseau de fabriques solidaires et inclusives qui proposent des formations gratuites 
                                aux métiers techniques du numérique en France et à l'étranger. Ella m'a permis d'obtenir un diplôme 
                                certifié par l'état en tant que développeur web et web mobile (bac+2).
                            </p>
                            <p>
                                Durant 6 mois , j'ai pu me perfectionner et apprendre le métier. 
                            </p>
                            <p>
                                J'ai réalisé plusieurs projets, pour des clients. Un projet en Laravel pour la 
                                réalisation d'une application de photographie, Un projet en Symfony pour l'association
                                loupélou, et pour mon projet de fin d'étude un projet sous react pour la mauvaise
                                herbe.
                            </p>
                            <p>
                                Par ailleurs j'ai décidé après la formation de continuer avec la mauvaise herbe, 
                                et de réaliser son site sous wordpress. Vous pouvez retrouver le site ici 
                                (en cour de réalisation) <br/>
                                <a href="http://lmh.lescadev.fr/" target="_blank" rel="noopener noreferrer">La Mauvaise Herbe</a> 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="etude">
                <div className="party">
                    <i className="fas fa-store-alt"></i>
                    <p className="bold">BTS Management des Unités Commerciales</p>
                </div>
                <div className="info">
                    <p className="bold">Angers - 2011/2013</p>
                    <div className="element">
                        <div className="image">
                            <img src="img/jdb.jpg" alt="bts Muc"/>
                        </div>
                        <div className="text">
                            <p> 
                                Après un bep Vente Action Marchande et un Bac pro Commerce, j'ai continué 
                                mes études en BTS Management des Unités Commerciales (bac +2).
                            </p>
                            <p>
                                A l'époque, je souhaitais travailler dans le commerce, parce que j'aimais le
                                contact humain, et créer des univers en fonction des produits que je vendais.
                            </p>
                            <p>
                                Cette période m'a permis d'acquérir des compétences en informatique, notamment
                                sur la gestion des datas clients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Formations;