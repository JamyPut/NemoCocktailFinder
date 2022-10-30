import React from 'react';
import "./Home.css"
import {NavLink} from "react-router-dom";

function Home() {

    return(
        <div className={"home-container"}>
        <h1 className={"nemo-title"}>
            Welkom bij Nemo.
            <p>Wij helpen je navigeren in een zee vol cocktails!</p>
        </h1>
            <button className={"cocktail-button"}>
               <NavLink to={"/cocktails"}>Alle cocktails</NavLink>
            </button>
        </div>
    );
}

export default Home;