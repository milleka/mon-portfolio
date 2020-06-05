import React from 'react';

const FormationsInfo = () => {
    return (
        <div className="information">
            <div className="experience">
                <div className="party">
                    <img className="fm" src="img/3il.png" alt="école d'ingénieur"/>
                    <p className="bold">3iL</p>
                    <p>Bachelor informatique en alternance</p>
                </div>
                <div className="party">
                    <img className="fm" src="img/simplon.png" alt="Simplon formation développement web"/>
                    <p className="bold">Simplon.co</p>
                    <p>Développeur web et web mobile</p>
                </div>
                <div className="party">
                    <i className="fas fa-store-alt"></i>
                    <p className="bold">BTS Management des Unités Commerciales</p>
                </div>
            </div>
        </div>
    );
};

export default FormationsInfo;