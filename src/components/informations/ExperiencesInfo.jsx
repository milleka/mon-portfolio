import React from 'react';

const ExperiencesInfo = () => {
    return (
        <div className="information">
            <div className="experience">
                <div className="party">
                    <img className="xp" src="img/logo-dynaidev.png" alt="dynaidev agence web"/>
                    <p className="bold">Dynaidev</p>
                    <p>Agence de développement web</p>
                </div>
                <div className="party">
                    <img className="xp" src="img/unova.png" alt="unova agence web"/>
                    <p className="bold">Unova</p>
                    <p>Agence de développement web</p>
                </div>
                <div className="party">
                    <i className="fas fa-store xp"></i>
                    <p className="bold">Employé libre-services</p>
                </div>
            </div>
        </div>
    );
};

export default ExperiencesInfo;