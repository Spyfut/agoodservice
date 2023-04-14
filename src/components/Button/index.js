import React from 'react'
import "./index.css"

function Button(props) {

    const { url, label, func, modifiers, id } = props;

    const isModifiers = modifiers ? " " + modifiers : "";

    return (
        <a href={url} id={id} onClick={func} className={"Button" + isModifiers}>{label}</a>
    )

}

export default Button;