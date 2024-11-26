import React from 'react';
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
    <div className="Nav-Container">
        <Nav items={props.cookie === "en" ? (navItems.englishUrls) : (navItems.urls)} />
    </div>
        <div className='ChoixLangue'> <span onClick={handleClickFr}>FR</span> | <span onClick={handleClickEn}>EN</span></div>
        <div className="Container">
            <div className="accueilSlogan">
                The way to make your moves easier  
            </div>
        </div>
    </>  
    )
}

export default Accueil;