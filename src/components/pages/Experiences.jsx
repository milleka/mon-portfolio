import React from 'react';
import Header from '../layout/Header'
import Footer from '../layout/Footer'

const Experiences = ({title}) => {
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

export default Experiences;