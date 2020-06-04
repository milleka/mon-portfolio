import React, {useEffect} from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Loisirs = ({title}) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      })

    return (
        <>
        <Header/>
        <main className='App-main loisir'>
            <h2>{title}</h2>
            <div className="hobby">
                <div className="party">
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
            </div>
            <div className="hobby">
                <div className="party">
                    <h3>Cuisine</h3>
                    <i className="fas fa-utensils ustensils"></i>
                </div>
                <div className="info">
                    <div className="image">
                        <img src="img/cook.gif" alt="cuisiner"/>
                    </div>
                    <div className="citation">
                        <p> 
                           "On ne peut pas faire de cuisine, si l'on n'aime pas les gens" JR.
                        </p>   
                    </div>
                </div>
            </div>
            <div className="hobby">
                <div className="party">
                    <h3>Jeux-vidéo</h3>
                    <i className="fas fa-gamepad game"></i>
                </div>
                <div className="info">
                    <div className="image">
                        <img src="img/game.gif" alt="jeux-vidéo"/>
                    </div>
                    <div className="citation">
                        <p> 
                           "Jouer aux jeux vidéo augmente la créativité, et permet une vue plus détaillée, et améliore
                           la concentration et rend les gens heureux".
                        </p>   
                    </div>
                </div>
            </div>
            <div className="hobby">
                <div className="party">
                    <h3>Séries/Films</h3>
                    <i className="fas fa-tv tv"></i>
                </div>
                <div className="info">
                    <div className="image">
                        <img src="img/movie.gif" alt="films et séries"/>
                    </div>
                    <div className="citation">
                        <p> 
                           "La vie c'est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber" Forest Gump.
                        </p>   
                    </div>
                </div>
            </div>
            <div className="hobby">
                <div className="party">
                    <h3>Voyager</h3>
                    <i class="fas fa-plane plane"></i>
                </div>
                <div className="info">
                    <div className="image">
                        <img src="img/travel.gif" alt="voyage"/>
                    </div>
                    <div className="citation">
                        <p> 
                           "Voyager est un triple plaisir: l'attente, l'éblouissement et le souvenir".
                        </p>   
                    </div>
                </div>
            </div>
        </main>
        <Footer/>
        </>
    );
};

export default Loisirs;