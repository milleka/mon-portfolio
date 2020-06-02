import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Competences = ({title}) => {
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

export default Competences;