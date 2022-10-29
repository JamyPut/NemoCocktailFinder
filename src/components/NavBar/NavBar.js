import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.css';
import {ReactComponent as CocktailLogo} from "../../assets/cocktail-logo.svg";

function NavBar() {
    return(
        <nav className={"navigation-bar"}>
            <div className={"navigation-container"}>
                <ul className={"navigation-list"}>
                    <li className={"navigation-item"}>
                        <NavLink to={"/"}>Home</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink to={"/cocktails"}>Cocktails</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <CocktailLogo/>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink to={"/profile"}>Profiel</NavLink>
                    </li>
                    <li className={"navigation-item"}>
                        <NavLink to={"/faq"}>FAQ</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;