import React from 'react'
import "./index.css"
import {
    NavLink
} from "react-router-dom";

function Nav(props) {

    const { items, modifiers } = props;
    const itemKeys = Object.keys(items);
    const isModifiers = modifiers ? modifiers : "";

    const isMobile = window.matchMedia("(max-width: 45.5em)").matches;

    const toggleNav = () => {
        const Nav = document.getElementById('Nav');
        Nav.classList.toggle('Nav-hide');
        const NavLinks = document.getElementById('Nav-Links');
        if(!NavLinks.classList.contains('moved') && !NavLinks.classList.contains('unmoved')) {
             NavLinks.classList.toggle('moved');
        }
        else if (NavLinks.classList.contains('moved')) {
            NavLinks.classList.toggle('moved');
            NavLinks.classList.toggle('unmoved');
        }
        else {
            NavLinks.classList.toggle('moved');
            NavLinks.classList.toggle('unmoved');
        }
    }

    return (
        <div id="Nav" className={!isMobile ? "Nav " + isModifiers : 'Nav Nav-hide ' + isModifiers}>
            {isMobile && <div id="Nav-mobile-menu"><span className='Nav-mobile-menu-icon' onClick={toggleNav}></span>
                <div id="Nav-Links">
                    {itemKeys.map((item) => (
                    <NavLink onClick={isMobile && toggleNav} key={item} to={items[item]} id={item} className={"Nav-item " + isModifiers} end>
                        {item}
                    </NavLink>
                    ))}
                </div>
            </div>}

            {!isMobile && itemKeys.map((item) => (
                <NavLink onClick={isMobile && toggleNav} key={item} to={items[item]} id={item} className={"Nav-item " + isModifiers} end>
                    {item}
                </NavLink>
            ))}
        </div>
    )

}

export default Nav; 