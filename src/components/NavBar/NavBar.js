import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';
import {ReactComponent as CocktailLogo} from "../../assets/cocktail-logo.svg";

function NavBar() {
    return(
        <>
            <nav className={"navigation-bar"}>
                <ul className={"navigation-container"}>
                    <li className={"navigation-item"}>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink to={"/cocktails"}>Cocktails</NavLink>
                    </li>
                    <li className={"navigation-item"} id={"cocktail-logo"}>
                        <CocktailLogo className={"cocktail-logo"}/>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink to={"/profile"}>Profiel</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink to={"/faq"}>FAQ</NavLink>
                    </li>
                </ul>
            </nav>
            <button className={"logreg-button"}>
                <NavLink to={"/login"}>Inloggen</NavLink>
            </button>
        </>
    );
}

export default NavBar;