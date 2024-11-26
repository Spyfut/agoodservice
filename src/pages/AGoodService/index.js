import React from 'react';
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

    return (
        <>
            <div className="Nav-Container">
                <Nav items={props.cookie === "en" ? (navItems.englishUrls) : (navItems.urls)} />
            </div>
            <div className='ChoixLangue'> <span onClick={handleClickFr}>FR</span> | <span onClick={handleClickEn}>EN</span></div>
            <div className="Container Big-Container">
                <div className="AGoodService-Core">
                    <div className="AGoodService AGoodService-Intro">
                        <p className="AGoodService-Title">A Good Service</p>
                        {props.cookie === "en" ? (
                            <p className="AGoodService-Text">
                                Let a good service help you get where you need to go! <br />
                                We know moving is never easy and that's why we work hard to make moving day a simple and affordable process. <br />
                                We have high quality moving materials to help you pack up and a team of trained professionals to help you
                                pack and unpack at your new location. <br /><br />
                                We also offer storage at our state-of-the-art storage facility. <br />
                                We're good at what we do. That's why we've been helping professional since 2022.<br /><br />
                                Call us today for your free estimate!
                                <br /><br />
                            </p>
                        ) : (
                            <p className="AGoodService-Text">
                                Laissez A Good Service vous aider à arriver où vous devez aller !<br />
                                Nous savons que déménager n'est jamais chose aisée, c'est pourquoi nous mettons tout en oeuvre pour rendre cela simple et accessible pour vous.<br />
                                Nous disposons de matériel de haute qualité pour vous aider à tout préparer et une équipe de professionnels entrainés pour vous faciliter à emballer et déballer vos biens à votre nouvelle habitation.<br /><br />
                                Nous proposons également du stockage grâce à nos installations haut de gamme. <br />
                                Nous sommes bons dans ce que nous faisons. C'est pourquoi nous aidons les professionnels depuis 2022. <br /><br />
                                Contactez-nous pour obtenir votre devis gratuit !
                            </p>

                        )}
                    </div>
                    <div className="AGoodService AGoodServiceImg AGoodServiceImgRight">
                        <img alt="Patissier" src={require('../../images/garde_meuble.jpg')} />
                    </div>
                </div>
                <div className="AGoodService-Core">
                    <div className="AGoodService AGoodServiceImg AGoodServiceImgLeft">
                        <img alt="Patissier" src={require('../../images/demenagement.jpg')} />
                    </div>
                    <div className="AGoodService AGoodService-Intro">
                        {props.cookie === 'en' ? (
                            <div>
                            <p className="AGoodService-Title">Your moving day, stress free</p>
                            <p>
                                We provide various moving and storage services. <br />
                                Our moving services include various products you may need to pack with carry, bubble wrap, mattress protectors and masking
                                tape. <br />
                                We recommend letting our team of professionals pack everything up for you. <br /><br />
                                We can make moving day stress free by not only packing up the house but moving everything out of
                                your old location and into the new one. <br /><br />
                                If you need to move across the nation we can help!<br /><br />
                                We can also provide safe storage.
                            </p>
                        </div>
                        ) : (   
                            <div>
                                <p className="AGoodService-Title">Votre déménagement en toute serenité</p>
                                <p className="AGoodService-Text">
                                    Nous vous proposons de nombreux services pour vos déménagements et stockages de matériel. Papier bulles, protections pour matelas ou encore ruban adhésifs, notre service de déménagement inclus tout le nécessaire pour emballer et transporter vos biens avec le plus grand soin.<br />
                                    Nous vous recommandons de laisser à notre équipe de professionnels le soin de tout emballer pour vous.<br /><br />
                                    Nous pouvons faire en sorte que votre déménagement ne soit plus une source de préoccupation pour vous en nous occupant de l'emballage mais également en transfèrant vos biens de votre ancienne habitation jusqu'à la nouvelle.<br /><br />
                                    Vous déménagez à l'autre bout du pays ? Nous pouvons également vous aider !<br /><br />
                                    Nous proposons aussi des services de stockage sécurisé.
                                 </p>
                            </div>
                        )}


                    </div>

                </div>
            </div>
        </>
    );
}

export default AGoodService

