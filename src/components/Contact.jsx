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
        <main className='App-main'>
        
        </main>
        <Footer />
        </>
    );
};

export default Contact;