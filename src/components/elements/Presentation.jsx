import React, {useEffect} from 'react';

const Presentation = () => {

    useEffect(() => {
          const bgImage = require('../../assets/img/bg-desktop' +
            Math.floor(Math.random() * 6 + 1) +
            '.png')
    
          document.getElementById("background").style.backgroundImage = `url(${bgImage})`
    })

    return (
        <div className="background" id="background">
            <div className="filter">
                <h1>
                    Camille Chassaing
                </h1>
                <h2>
                    Développeur web
                </h2>
            </div>
        </div>
    );
};

export default Presentation;