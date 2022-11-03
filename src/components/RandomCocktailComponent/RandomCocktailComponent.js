import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import "./RandomCocktailComponent.css"
import axios from "axios";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRotate, faCocktail} from "@fortawesome/free-solid-svg-icons";


const randomCocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function RandomCocktailComponent(){

    const [cocktailTitle, setCocktailTitle] = useState([])
    const fetchCocktail = () => {
        axios.get(randomCocktailUrl)
            .then(res => {
                console.log(res.data)
                setCocktailTitle(res.data.drinks[0])
            })
            .catch(e => console.log(e))
            }


    //        load cocktail upon page load.
    useEffect(()=> {
        fetchCocktail();
    },[]);


    return(
        <section>
            <div className={"random-cocktail-section"}>
                <button onClick={fetchCocktail} className={"randomize-button"}>
                    <FontAwesomeIcon icon={faRotate}></FontAwesomeIcon>
                    verras me!
                </button>
                <img src={cocktailTitle && cocktailTitle.strDrinkThumb} alt="cocktail-image"/>
                <button className={"random-cocktail-button"}>
                    <NavLink to={`/${cocktailTitle.idDrink}`}>
                        <FontAwesomeIcon icon={faCocktail}></FontAwesomeIcon>
                        {cocktailTitle && cocktailTitle.strDrink}
                    </NavLink>
                </button>
            </div>
        </section>
    )
}

export default RandomCocktailComponent;