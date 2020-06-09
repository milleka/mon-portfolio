import React, {useState} from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

import {Carousel} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const Loisirs = ({title}) => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

    return (
        <>
        <Header/>
        <main className='App-main loisir'>
            <h2 className="subtitle">{title}</h2>
            <NavLink to="/contact" exact className="lien">Ecrivez-moi !</NavLink>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="hobby">
                        <h3>Basket-ball</h3>
                        <i className="fas fa-basketball-ball ball"></i>
                    </div>
                    <div className="info">
                        <div className="image">
                            <img src="img/kb.gif" alt="basket-ball"/>
                        </div>
                        <div className="citation">
                            <p> 
                            "Je peux accepter l'échec, tout le monde peut échouer, 
                            mais je n'accepterai jamais de ne pas avoir essayé" MJ.
                            </p>   
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hobby">
                        <h3>Cuisine</h3>
                        <i className="fas fa-utensils ustensils"></i>
                    </div>
                    <div className="info">
                        <div className="image">
                            <img className="cook" src="img/cook.gif" alt="cuisiner"/>
                        </div>
                        <div className="citation">
                            <p> 
                            "On ne peut pas faire de cuisine, si l'on n'aime pas les gens" JR.
                            </p>   
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hobby">
                        <h3>Jeux-vidéo</h3>
                        <i className="fas fa-gamepad game"></i>
                    </div>
                    <div className="info">
                        <div className="image">
                            <img className="gaming" src="img/game.gif" alt="jeux-vidéo"/>
                        </div>
                        <div className="citation">
                            <p> 
                            "Jouer aux jeux vidéo augmente la créativité, et permet une vue plus détaillée, et améliore
                            la concentration et rend les gens heureux".
                            </p>   
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hobby">
                        <h3>Séries/Films</h3>
                        <i className="fas fa-tv tv"></i>
                    </div>
                    <div className="info">
                        <div className="image">
                            <img className="movie" src="img/movie.gif" alt="films et séries"/>
                        </div>
                        <div className="citation">
                            <p> 
                            "La vie c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber" Forest Gump.
                            </p>   
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="hobby">
                        <h3>Voyager</h3>
                        <i className="fas fa-plane plane"></i>
                    </div>
                    <div className="info">
                        <div className="image">
                            <img className="travel" src="img/travel.gif" alt="voyage"/>
                        </div>
                        <div className="citation">
                            <p> 
                            "Voyager est un triple plaisir: l'attente, l'éblouissement et le souvenir".
                            </p>   
                        </div>
                    </div>     
                </Carousel.Item>
            </Carousel>
        </main>
        <Footer/>
        </>
    );
};

export default Loisirs;