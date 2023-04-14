import React, { useState } from 'react';
import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";
import "./index.css"
import Cookies from 'js-cookie';

function AGoodService(props) {
    
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

    console.log(props.cookie);

    return (
        <>
            <Nav items={props.cookie === "fr" ? (navItems.urls) : (navItems.englishUrls)} />
            <div className='ChoixLangue'> <a href="" onClick={handleClickFr}>FR</a> | <a href="" onClick={handleClickEn}>EN</a></div>
            <div className="AGoodService-Core">
                <div className="AGoodService AGoodService-Intro">
                    <p className="AGoodService-Title">A Good Service</p>
                    {props.cookie === "fr" ? (
                        <p className="AGoodService-Text">
                            Moi c'est Willou, je fais des gateaux en y mettant tout mon coeur et toute ma créativité.<br />
                            J'adore la patisserie depuis tout petit et je suis diplômé d'un CAP patisserie depuis début 2022.<br />
                            J'espère vous faire partager ma passion à travers mes nombreuses créations.<br /><br />
                            J'ai créé MadandCoo pour permettre à tout le monde de découvrir mes oeuvres gustatives: que ce soit pour retomber en enfance en dégustant sa simple part de flan, 
                            ou pour découvrir de nouvelles associations de saveurs avec mes patisseries les plus raffinées, ou encore juste pour avoir le bonheur de partager notre gâteau préféré pour un évènement particulier avec les bonnes personnes.<br /><br />
                        </p>
                    ) : (
                        <p className="AGoodService-Text">
                            Hi ! My name is Willou, je fais des gateaux en y mettant tout mon coeur et toute ma créativité.<br />
                            J'adore la patisserie depuis tout petit et je suis diplômé d'un CAP patisserie depuis début 2022.<br />
                            J'espère vous faire partager ma passion à travers mes nombreuses créations.<br /><br />
                            J'ai créé MadandCoo pour permettre à tout le monde de découvrir mes oeuvres gustatives: que ce soit pour retomber en enfance en dégustant sa simple part de flan, 
                            ou pour découvrir de nouvelles associations de saveurs avec mes patisseries les plus raffinées, ou encore juste pour avoir le bonheur de partager notre gâteau préféré pour un évènement particulier avec les bonnes personnes.<br /><br />
                        </p>
                    )}
                </div>
                <div className="AGoodService AGoodServiceImg AGoodServiceImgRight">
                    <img alt="Patissier" src={require('../../images/agoodservice.jpg')} />
                </div>
            </div>
            <div className="AGoodService-Core">
                <div className="AGoodService AGoodServiceImg AGoodServiceImgLeft">
                    <img alt="Patissier" src={require('../../images/demenageurs.jpg')} />
                </div>
                <div className="AGoodService AGoodService-Intro">
                    {props.cookie === 'fr' ? (
                        <p className="AGoodService-Title">Pour n'importe qui, et n'importe quelle occasion</p>
                    ) : ( 
                        <p className="AGoodService-Title">For everyone, in every occasion</p>
                    )}
                    <p className="AGoodService-Text">
                        De la viennoiserie à la patisserie, vous retrouverez sur ce site toute l'étendue de la gamme que je propose.<br /><br />
                        Pour un évènement ou pour tout un chacun je peux réaliser sur commande chacune de vos envies.
                        Macarons, rainbowCake, pièce montée, Tiramisu ou mignardises pour vos anniversaires, fêtes en tout genre ou mariage, je peux répondre à toutes vos demandes.
                        N'hésitez pas, et consultez ma galerie d'offre juste <a href="/#/mes-creations">ici</a>  
                    </p>
                </div>

            </div>
        </>
    );
}

export default AGoodService