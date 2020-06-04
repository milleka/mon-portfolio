import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'

import Cards from './Cards'
import'animate.css'

function Homepage({title}) {

  return (
    <>
      <Header />

      <main className='App-main'>
        <h2>{title}</h2>
        <div className="presentation">
          <div className="image">
            <img src="img/moi.png" alt="mon logo" title="Accueil"/>
          </div>
          <div className="text">
            <h3>Qui suis-je ?</h3>
            <p>Je m'appelle Camille Chassaing, j'ai 29 ans.</p>
            <p>Il y a quelques années, je me suis pris de passion pour le développement web. J'ai donc décidé de me réorientée.
              J'ai commencé par une formation pour adulte (Simplon), qui m'a permis d'obtenir un bac +2 développeur 
              web et web mobile, et 2 certificats ( Opquast et méthode agile ). Souhaitant poursuivre mes connaissance 
              en développement et réseaux, j'ai décidé de continuer dans une école d'ingénieur (3iL) afin 
              d'obtenir un bac +3. Aujourd'hui, arrive la fin de ma réorientation, afin de réussir parfaite cette 
              reconversion, je suis à la recherche d'un emploi en tant que développeur web junior.
            </p>
            <p>Ce portfolio vous présente mon histoire.</p>
            <p>Bonne visite !</p>
          </div>
        </div>
        <div className="cards">
          <div className="ligne espace">
            <Cards title="Compétences" src="img/competences.jpg"/>
            <Cards title="Expériences" src="img/experiences.jpg" />
          </div>
          <div className="ligne">
            <Cards title="Formations" src="img/formation.jpg" />
            <Cards title="Loisirs" src="img/loisir.jpg" />
          </div>
        </div>
      </main>

      <Footer/>
      </>
  )
}

export default Homepage;
