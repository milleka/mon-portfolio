import React, {useEffect} from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';


const Contact = ({title}) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  
    return (
        <>
        <Header />
        <main className='App-main contact'>
            <h2>{title}</h2>
            <div className="coordonees">
                <p>
                    <span>Adresse e-mail :</span>
                    <a href='mailto:camillechassaing.jdb@gmail.com'>camillechassaing.jdb@gmail.com</a>
                </p>
                <p>
                    <span>N° de téléphone :</span>
                    <a href='tel:+33673833827'>+33 6 73 83 38 27</a>
                </p>
            </div>
        </main>
        <Footer />
        </>
    );
};

export default Contact;