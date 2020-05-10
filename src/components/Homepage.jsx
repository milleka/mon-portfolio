import React from 'react';
import Header from './layout/Header'
import Footer from './layout/Footer'

function Homepage() {
  return (
    <>
      <Header/>

      <main className='App-main'>
        <p>page de la homepage</p>
      </main>

      <Footer/>
    </>
  )
}

export default Homepage;
