import React from 'react';
import "./Home.css"
import {NavLink} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotate } from '@fortawesome/free-solid-svg-icons'
function Home() {

    return(
        <>
            <div className={"home-container"}>
                <h1 className={"nemo-title"}>
                    Welkom bij Nemo.
                    <p>Wij helpen je navigeren in een zee vol cocktails!</p>
                </h1>
                <button className={"cocktail-button"}>
                    <NavLink to={"/cocktails"}>Alle cocktails</NavLink>
                </button>
            </div>
            <div className={"randomize-container"}>
                <button className={"randomize-icon"}>
                    <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
                </button>
                <button className={"randomize-text"}>verras me</button>
            </div>
        </>
    );
}

export default Home;