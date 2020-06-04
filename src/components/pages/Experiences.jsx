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
        <main className='App-main'>
            <h2>{title}</h2>
        </main>
        <Footer/>
        </>
    );
};

export default Experiences;