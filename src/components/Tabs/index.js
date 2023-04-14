import React, { useState } from 'react'
import "./index.css"

function Tab(props) {

    const { title, onClick, isActive, modifiers } = props;
    const isModifiers = modifiers ? modifiers : "";
    const actived = isActive ? ' Tab-active' : "";

    return (
        <div className={"Tab" + isModifiers + actived} onClick={onClick}>
            <span>{title}</span>
        </div>
    )
}

function Tabs(props) {

    const { tabs, modifiers, children } = props;
    const isModifiers = modifiers ? " " + modifiers : "";
    const [active, setActive] = useState(0);

    return (
        <>
            <div className={"Tabs" + isModifiers}>
                {tabs.map((tab) => {
                    return (
                        <Tab title={tab[1]} key={tab[0]} isActive={active === tab[0]} onClick={() => setActive(tab[0])} />
                    )
                })}

            </div>
            <div className="Tabs-Content">
                {tabs.map((id) => {
                    return active === id[0] ? children[id[0]] : ''
                })}
            </div>

        </>
    )
}

export default Tabs; 