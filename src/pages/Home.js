import React from 'react';
import "./Home.css"
import {NavLink} from "react-router-dom";

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
            <div className={"diagonal-separator"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, aspernatur at consectetur ducimus earum eum eveniet facilis impedit incidunt iusto nam natus neque odit reprehenderit, tenetur ut veritatis. Accusantium, animi atque commodi earum itaque labore non obcaecati </p>
                <button>verras me</button>
            </div>
        </>
    );
}

export default Home;