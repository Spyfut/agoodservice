import React, { useState } from 'react';
import "./index.css"
import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";
import Cookies from 'js-cookie';


function Accueil(props) {

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
        <div className="accueilSlogan">
            The way to make your moves easier
        </div>
    </>  
    )
}

export default Accueil;