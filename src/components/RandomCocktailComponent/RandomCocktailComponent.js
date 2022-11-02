import React, {useCallback, useEffect, useState} from "react";
import "./RandomCocktailComponent.css"
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate, faCocktail} from "@fortawesome/free-solid-svg-icons";


const randomCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function RandomCocktailComponent(){

    const [cocktailTitle, setCocktailTitle] = useState()
    const fetchCocktail = () => {
        axios.get(randomCocktailUrl)
            .then(res => {
                console.log(res.data)
                setCocktailTitle(res.data.drinks[0])
            })
    }

    console.log(cocktailTitle)
    return(
        <section>
            <div className={"randomize-button-container"}>
                <button className={"randomize-icon"}>
                    <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
                </button>
                <button onClick={fetchCocktail} className={"randomize-text"}>verras me</button>
                <img src={cocktailTitle && cocktailTitle.strDrinkThumb} alt=""/>
                <p>{cocktailTitle && cocktailTitle.strDrink}</p>
            </div>
        </section>
    )
}

export default RandomCocktailComponent;