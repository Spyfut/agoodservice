import React, { useState } from 'react';
import "./index.css";
import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";
import Cookies from 'js-cookie';

function Déménagement(props) {
    
  function handleClickFr (e) {
    e.preventDefault();
    Cookies.set('langue', 'fr');
    window.location.reload(false);
  }

  function handleClickEn (e) {
      e.preventDefault();
      Cookies.set('langue', 'en');
      window.location.reload(false);
  }
  
  return (
    <>
      <Nav items={props.cookie === "fr" ? (navItems.urls) : (navItems.englishUrls)} />
      <div className='ChoixLangue'> <a href="" onClick={handleClickFr}>FR</a> | <a href="" onClick={handleClickEn}>EN</a></div>
      <div className="Demenagement-Core">
                <div className="Demenagement Demenagement-Intro">
                    <p className="Demenagement-Title">{props.cookie === "fr" ? ( 'Notre gamme de service' ) : ('Our services')}</p>
                    {props.cookie === "fr" ? (
                        <p className="Demenagement-Text">
                            Nous pouvons vous aider pour chaque situation :<br /><br/>
                            <ul>
                              <li>Ascenseur externe</li> 
                              <li>Permis de stationnement</li> 
                              <li>Navettes ou assistance au travail avec des déménageurs professionnels</li> 
                              <li>Spécialistes en déménagement de pianos</li> 
                              <li>Nettoyage de votre logement et service de femme de ménage</li>
                              <li>Nous pouvons aussi prendre soin de vos clients</li> 
                              <li>Acces check</li> 
                              <li>Visites techniques</li> 
                              <li>Contrôles qualité</li> 
                              <li>Emballlages/Déballages</li>
                            </ul>
                        </p>
                    ) : (
                        <p className="Demenagement-Text">
                            
                            We could help you in any situation :<br /><br/>
                            <ul>
                              <li>External elevator</li> 
                              <li>Parking permit</li> 
                              <li>Shuttle or labour assitance with Professional movers</li>
                              <li>Piano specialist</li> 
                              <li>home cleaning and maid service</li>
                              <li>We could also take care of yours clients</li> 
                              <li>Acces check</li> 
                              <li>Technical visit</li>
                              <li>Quality control</li> 
                              <li>Packing and unpacking</li>
                            </ul>
                        </p>
                    )}
                </div>
                <div className="Demenagement DemenagementImg DemenagementImgRight">
                    <img alt="cartons de déménagement" src={require('../../images/camion-demenagement.jpg')} />
                </div>
            </div>
    </>
  );
}

export default Déménagement