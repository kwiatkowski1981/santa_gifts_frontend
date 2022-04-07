import React from "react";
import {NavLink} from "react-router-dom";

export const Header = () => {

    const linkColor = ({isActive}: {
        isActive: boolean;
    }) => ({color: isActive ? 'green' : 'red'});

    return (
        <>
            <h1>Santa App</h1>
            Menu: | <NavLink style={linkColor} to="/gift">Gifts</NavLink> | <NavLink style={linkColor} to="/child">Children</NavLink> | <NavLink style={linkColor} to="/">Main</NavLink> |
            <hr/>
        </>
    )
}

