import React from 'react';
import "./Home.css"
import {NavLink} from "react-router-dom";
import RandomCocktailComponent from "../components/RandomCocktailComponent/RandomCocktailComponent";

function Home() {

    return(
        <>
            <div className={"intro-container"}>
                <h1 className={"nemo-title"}>
                    Welkom bij Nemo.
                    <p>Wij helpen je navigeren in een zee vol cocktails!</p>
                </h1>
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