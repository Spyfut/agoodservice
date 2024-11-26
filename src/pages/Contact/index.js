import React, { useState } from 'react';
import "./index.css"
import Nav from "../../components/Nav";
import navItems from "../../components/Nav/index.json";
import emailjs from '@emailjs/browser';
import Cookies from 'js-cookie';

function Contact(props) {


    const [inputValues, setInputValues] = useState({
        nom: '', email: '', demande: ''
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setInputValues({ ...inputValues, [name]: value });
    };

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

    const handleSubmit = event => {
        event.preventDefault();
        const templateId = "template_hjyvvqp";
        const serviceId = "service_qto3xza";
        sendFeedback(serviceId, templateId, {
            nom: inputValues.nom,
            email: inputValues.email,
            demande: inputValues.demande
        })
        //document.location = "mailto:"+inputValues.email+"?subject="+inputValues.nom+"&body="+inputValues.demande;
        //emailjs : agoodserv@outlook.fr
        //mdp : EmailJS94350!
        
       alert('Votre message a bien été envoyé');
    }

    const sendFeedback = (serviceId, templateId, variables) => {
        emailjs.send(serviceId, templateId, variables, 'nV7WAigR4I7M3U2W8')
        .then((res) => {
            console.log('Success');
        })
        .catch((err) => 
            console.error('Il y a une erreur.')
        );
    };

    return (
        <>
            <div className="Nav-Container">
                <Nav items={props.cookie === "en" ? (navItems.englishUrls) : (navItems.urls)} />
            </div>
            <div className='ChoixLangue'> <span onClick={handleClickFr}>FR</span> | <span onClick={handleClickEn}>EN</span></div>
            <div className="Container">
                <div className="Contact-Core">
                    <div className="Contact ContactImg"><img alt="Patisseries" src={require('../../images/garde_meuble_2.jpg')} /></div>
                    <div className="Contact Contact-Form">
                        <p className="Contact-Title">{props.cookie === "en" ? ( "Contact us" ) : ( "Nous contacter" )}</p>
                        <form method="post" id="contactForm">
                            <label htmlFor="nom">
                                <span>{props.cookie === "en" ? ( "Name :" ) : ( "Nom :" )}</span> 
                                <input type="text" name="nom" id="nom" onChange={handleChange} />
                            </label>
                            <br />
                            <label htmlFor="email">
                                <br />
                                <span>{props.cookie === "en" ? ( "Your email adress :" ) : ( "Votre adresse email :" )} </span>
                                <input type="text" name="email" id="email" onChange={handleChange} />
                            </label>
                            <br />
                            <label htmlFor="demande">
                                <br />
                                <span>{props.cookie === "en" ? ( "Your request :" ) : ( "Votre demande :" )}</span>
                                <textarea rows="8" cols="50" name="demande" id="demande" onChange={handleChange} />
                            </label>
                            <br />
                            <input className="Button" type="submit" id="submit" onClick={handleSubmit} value={props.cookie === "en" ? ( "Send " ) : ( "Envoyer" )} />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact