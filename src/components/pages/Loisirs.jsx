import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Loisirs = ({title}) => {
    return (
        <>
        <Header/>
        <div>
            <h2>{title}</h2>
        </div>
        <Footer/>
        </>
    );
};

export default Loisirs;