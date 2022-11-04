import React from 'react';
import "./Home.css"
import {NavLink} from "react-router-dom";
import RandomCocktailComponent from "../components/RandomCocktailComponent/RandomCocktailComponent";

function Home() {

    return(
        <>
            <div className={"intro-container"}>
                <div className={"nemo-title"}>
                    <h1>Welkom bij Nemo.</h1>
                    <p>Wij helpen je navigeren in een zee vol cocktails!</p>
                </div>
                <button className={"all-cocktails-button"}>
                    <NavLink to={"/cocktails"}>Alle cocktails</NavLink>
                </button>
            </div>
            <div className={"random-section-container"}>
                <RandomCocktailComponent/>
                <RandomCocktailComponent/>
                <RandomCocktailComponent/>
            </div>
        </>
    );
}

export default Home;